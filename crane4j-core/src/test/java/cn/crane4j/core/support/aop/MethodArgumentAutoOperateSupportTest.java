package cn.crane4j.core.support.aop;

import cn.crane4j.annotation.ArgAutoOperate;
import cn.crane4j.annotation.Assemble;
import cn.crane4j.annotation.AutoOperate;
import cn.crane4j.annotation.Mapping;
import cn.crane4j.core.container.LambdaContainer;
import cn.crane4j.core.support.Crane4jGlobalConfiguration;
import cn.crane4j.core.support.ParameterNameFinder;
import cn.crane4j.core.support.SimpleAnnotationFinder;
import cn.crane4j.core.support.SimpleCrane4jGlobalConfiguration;
import cn.crane4j.core.support.SimpleParameterNameFinder;
import cn.crane4j.core.support.auto.AutoOperateAnnotatedElementResolver;
import cn.crane4j.core.support.auto.MethodBasedAutoOperateAnnotatedElementResolver;
import cn.crane4j.core.support.expression.MethodBaseExpressionExecuteDelegate;
import cn.crane4j.core.support.expression.OgnlExpressionContext;
import cn.crane4j.core.support.expression.OgnlExpressionEvaluator;
import cn.crane4j.core.util.ReflectUtils;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.Collection;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * test for {@link MethodArgumentAutoOperateSupport}
 *
 * @author huangchengxing
 */
@SuppressWarnings("unused")
public class MethodArgumentAutoOperateSupportTest {

    private MethodArgumentAutoOperateSupport support;

    @Before
    public void init() {
        Crane4jGlobalConfiguration configuration = SimpleCrane4jGlobalConfiguration.create();
        ParameterNameFinder parameterNameFinder = new SimpleParameterNameFinder();
        MethodBaseExpressionExecuteDelegate expressionExecuteDelegate = new MethodBaseExpressionExecuteDelegate(
            parameterNameFinder, new OgnlExpressionEvaluator(), method -> new OgnlExpressionContext()
        );
        AutoOperateAnnotatedElementResolver resolver = new MethodBasedAutoOperateAnnotatedElementResolver(configuration, configuration.getTypeResolver());
        support = new MethodArgumentAutoOperateSupport(resolver, expressionExecuteDelegate, parameterNameFinder, new SimpleAnnotationFinder());

        configuration.registerContainer(LambdaContainer.<Integer>forLambda(
            "test", ids -> ids.stream().map(id -> new Foo(id, "name" + id))
                .collect(Collectors.toMap(Foo::getId, Function.identity()))
        ));
    }

    @Test
    public void beforeMethodInvoke() {
        Method method = ReflectUtils.getMethod(this.getClass(), "method", Result.class, Object.class);
        Assert.assertNotNull(method);
        Result<Foo> foo = new Result<>(new Foo(1));
        support.beforeMethodInvoke(method, new Object[]{ foo });
        Assert.assertEquals("name1", foo.getData().getName());

        support.beforeMethodInvoke(method, null);
    }

    @ArgAutoOperate(
        @AutoOperate(value = "arg0", type = Foo.class, on = "data", condition = "#arg0 != null")
    )
    private Result<Collection<Foo>> method(Result<Collection<Foo>> result, Object noneAnnotatedParam) {
        return result;
    }

    @Getter
    @RequiredArgsConstructor
    private static class Result<T> {
        private final T data;
    }

    @AllArgsConstructor
    @RequiredArgsConstructor
    @Data
    private static class Foo {
        @Assemble(container = "test", props = @Mapping("name"))
        private final Integer id;
        private String name;
    }
}
