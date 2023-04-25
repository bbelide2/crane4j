package cn.crane4j.extension.mybatis.plus;

import cn.crane4j.core.container.Container;
import cn.crane4j.core.container.ContainerProvider;
import cn.crane4j.core.container.MethodInvokerContainer;
import cn.crane4j.core.exception.Crane4jException;
import cn.crane4j.core.support.expression.ExpressionContext;
import cn.crane4j.core.support.expression.ExpressionEvaluator;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import lombok.RequiredArgsConstructor;

import javax.annotation.Nullable;
import java.util.List;
import java.util.function.Function;

/**
 * <p>Provider of {@link MethodInvokerContainer} based on {@link MybatisPlusQueryContainerRegister.Query}.
 * support obtain and call the specified method in {@link BaseMapper}through incoming expression.
 *
 * <p>The input expression supports the following notation:
 * <ul>
 *     <li>
 *         {@code container('fooMapper', 'id', {'name', 'sex', 'age'})}, <br />
 *         equivalent to {@code 'select id, name, sex, age from foo where id in ?'};
 *     </li>
 *     <li>
 *         {@code container('fooMapper', {'name', 'sex', 'age'})}, <br />
 *         equivalent to {@code 'select [pk], name, sex, age from foo where [pk] in ?'};
 *     </li>
 *     <li>
 *         {@code container('fooMapper', 'id')}, <br />
 *         equivalent to {@code 'select * from foo where id in ?'};
 *     </li>
 *     <li>
 *         {@code container('fooMapper')}, <br />
 *         equivalent to {@code 'select * from foo where [pk] in ?'};
 *     </li>
 * </ul>
 * <b>NOTE:</b>When the query field is limited,
 * the query columns must contain the column of entered key.
 *
 * @author huangchengxing
 * @see MybatisPlusQueryContainerRegister
 * @see ExpressionEvaluator
 */
@RequiredArgsConstructor
public class MybatisPlusContainerProvider implements ContainerProvider {

    private final MybatisPlusQueryContainerRegister register;
    private final ExpressionEvaluator evaluator;
    private final Function<MybatisPlusContainerProvider, ExpressionContext> expressionContextFactory;

    /**
     * <p>Get data source container by expression.
     *
     * @param namespace namespace
     * @return container
     * @see MybatisPlusQueryContainerRegister#getContainer
     * @see #container
     */
    @Override
    public Container<?> getContainer(String namespace) {
        ExpressionContext context = expressionContextFactory.apply(this);
        try {
            return evaluator.execute(namespace, Container.class, context);
        } catch (Exception e) {
            throw new Crane4jException(e);
        }
    }

    /**
     * Get a container based on {@link BaseMapper#selectList}.
     *
     * @param mapperName mapper name
     * @param keyProperty key field name for query
     * @return cn.crane4j.core.container.Container<?>
     */
    public Container<?> container(String mapperName, String keyProperty) {
        return container(mapperName, keyProperty, null);
    }

    /**
     * Get a container based on {@link BaseMapper#selectList}.
     *
     * @param mapperName mapper name
     * @return container
     */
    public Container<?> container(String mapperName) {
        return container(mapperName, null, null);
    }

    /**
     * Get a container based on {@link BaseMapper#selectList}.
     *
     * @param mapperName mapper name
     * @param properties fields to query
     * @return container
     */
    public Container<?> container(String mapperName, List<String> properties) {
        return container(mapperName, null, properties);
    }

    /**
     * Get a container based on {@link BaseMapper#selectList},
     * When querying, the attribute name of the input parameter will be converted to
     * the table columns specified in the corresponding {@link TableField} annotation.
     *
     * @param mapperName mapper name
     * @param keyProperty key field name for query, if it is empty, it defaults to the field annotated by {@link TableId}
     * @param properties fields to query, if it is empty, all table columns will be queried by default.
     * @return container
     * @see TableField
     * @see TableId
     */
    public Container<?> container(
        String mapperName, @Nullable String keyProperty, @Nullable List<String> properties) {
        return register.getContainer(mapperName, keyProperty, properties);
    }
}