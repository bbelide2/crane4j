package cn.crane4j.core.support.container;

import cn.crane4j.annotation.MappingType;
import cn.crane4j.core.container.MethodInvokerContainer;
import cn.crane4j.core.support.MethodInvoker;
import cn.crane4j.core.support.converter.ConverterManager;
import cn.crane4j.core.support.converter.ParameterConvertibleMethodInvoker;
import cn.crane4j.core.support.reflect.PropertyOperator;
import cn.crane4j.core.support.reflect.ReflectiveMethodInvoker;
import cn.crane4j.core.util.Asserts;
import cn.crane4j.core.util.StringUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.checkerframework.checker.nullness.qual.NonNull;
import org.checkerframework.checker.nullness.qual.Nullable;

import java.lang.reflect.Method;

/**
 * Support class for {@link MethodInvokerContainer} creation.
 *
 * @author huangchengxing
 * @see ParameterConvertibleMethodInvoker
 * @see ReflectiveMethodInvoker
 * @since 1.3.0
 */
@Slf4j
@RequiredArgsConstructor
public class MethodInvokerContainerCreator {

    protected final PropertyOperator propertyOperator;
    protected final ConverterManager converterManager;

    /**
     * Create a {@link MethodInvokerContainer} from the given method.
     *
     * @param target      method's calling object, if the method is static, it can be null
     * @param method      method
     * @param mappingType mapping type
     * @param namespace   namespace, if null, use method name as namespace
     * @param resultType  result type, if mapping type is {@link MappingType#MAPPED}, this parameter is ignored
     * @param resultKey   result key, if mapping type is {@link MappingType#MAPPED}, this parameter is ignored
     * @return {@link MethodInvokerContainer}
     */
    public MethodInvokerContainer createContainer(
        @Nullable Object target, Method method, MappingType mappingType,
        @Nullable String namespace, Class<?> resultType, String resultKey) {
        log.debug("create method container from [{}]", method);
        // get key extractor of result object if necessary
        MethodInvokerContainer.KeyExtractor keyExtractor = getKeyExtractor(mappingType, resultType, resultKey);
        // is proxy object and not declaring by proxy class?
        MethodInvoker methodInvoker = getMethodInvoker(target, method);
        namespace = getNamespace(method, namespace);
        return createMethodInvokerContainer(target, mappingType, namespace, keyExtractor, methodInvoker);
    }

    /**
     * Create a {@link MethodInvokerContainer} from the given method invoker.
     *
     * @param target      method's calling object, if the method is static, it can be null
     * @param methodInvoker method invoker
     * @param mappingType mapping type
     * @param namespace   namespace, if null, use method name as namespace
     * @param resultType  result type, if mapping type is {@link MappingType#MAPPED}, this parameter is ignored
     * @param resultKey   result key, if mapping type is {@link MappingType#MAPPED}, this parameter is ignored
     * @return {@link MethodInvokerContainer}
     */
    public MethodInvokerContainer createContainer(
        @Nullable Object target, MethodInvoker methodInvoker, MappingType mappingType,
        String namespace, Class<?> resultType, String resultKey) {
        log.debug("create method container from [{}]", methodInvoker);
        // get key extractor of result object if necessary
        MethodInvokerContainer.KeyExtractor keyExtractor = getKeyExtractor(mappingType, resultType, resultKey);
        // is proxy object and not declaring by proxy class?
        return createMethodInvokerContainer(target, mappingType, namespace, keyExtractor, methodInvoker);
    }

    /**
     * Create a {@link MethodInvokerContainer} from the given method.
     *
     * @param target target, if the method is static, it can be null
     * @param mappingType mapping type
     * @param namespace namespace
     * @param keyExtractor key extractor, if mapping type is {@link MappingType#MAPPED}, this parameter is ignored
     * @param methodInvoker method invoker
     * @return {@link MethodInvokerContainer} instance
     */
    @NonNull
    protected MethodInvokerContainer createMethodInvokerContainer(
        @Nullable Object target, MappingType mappingType, String namespace,
        MethodInvokerContainer.KeyExtractor keyExtractor, MethodInvoker methodInvoker) {
        return new MethodInvokerContainer(namespace, methodInvoker, target, keyExtractor, mappingType);
    }

    /**
     * Get namespace of method container.
     *
     * @param target target, if the method is static, it can be null
     * @param method method
     * @return namespace
     * @implNote if target is <b>proxy object</b>, invoke method on proxy object,
     * otherwise invoke method on target object
     */
    @NonNull
    protected MethodInvoker getMethodInvoker(Object target, Method method) {
        MethodInvoker invoker = ReflectiveMethodInvoker.create(target, method, false);
        return ParameterConvertibleMethodInvoker.create(invoker, converterManager, method.getParameterTypes());
    }

    /**
     * Get key extractor of result object if necessary.
     *
     * @param mappingType mapping type
     * @param resultType  result type
     * @param resultKey   result key
     * @return key extractor
     */
    protected MethodInvokerContainer.@Nullable KeyExtractor getKeyExtractor(
        MappingType mappingType, Class<?> resultType, String resultKey) {
        MethodInvokerContainer.KeyExtractor keyExtractor = null;
        if (mappingType != MappingType.MAPPED) {
            MethodInvoker keyGetter = findKeyGetter(resultType, resultKey);
            keyExtractor = keyGetter::invoke;
        }
        return keyExtractor;
    }

    /**
     * Get namespace from method.
     *
     * @param method     method
     * @param namespace  namespace
     * @return namespace
     */
    protected static String getNamespace(Method method, String namespace) {
        return StringUtils.emptyToDefault(namespace, method.getName());
    }

    /**
     * Find key getter method of result object.
     *
     * @param resultType result type
     * @param resultKey  result key
     * @return key getter method
     */
    protected MethodInvoker findKeyGetter(Class<?> resultType, String resultKey) {
        MethodInvoker keyGetter = propertyOperator.findGetter(resultType, resultKey);
        Asserts.isNotNull(keyGetter, "cannot find getter method [{}] on [{}]", resultKey, resultType);
        return keyGetter;
    }
}
