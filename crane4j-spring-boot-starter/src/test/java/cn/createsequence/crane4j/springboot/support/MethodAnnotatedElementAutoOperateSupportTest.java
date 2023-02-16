package cn.createsequence.crane4j.springboot.support;

import cn.createsequence.crane4j.core.executor.DisorderedBeanOperationExecutor;
import cn.createsequence.crane4j.springboot.annotation.AutoOperate;
import cn.createsequence.crane4j.springboot.config.Crane4jAutoConfiguration;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Method;
import java.util.function.Predicate;

/**
 * test for {@link MethodAnnotatedElementAutoOperateSupport}
 *
 * @author huangchengxing
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Crane4jAutoConfiguration.class)
public class MethodAnnotatedElementAutoOperateSupportTest {

    @Autowired
    private ApplicationContext applicationContext;
    @Autowired
    private MethodBaseExpressionEvaluator methodBaseExpressionEvaluator;

    private MethodAnnotatedElementAutoOperateSupport support;

    @Before
    public void init() {
        support = new MethodAnnotatedElementAutoOperateSupport(
            applicationContext, methodBaseExpressionEvaluator
        );
    }

    @Test
    public void checkSupport() {
        Method method = getMethod();
        Predicate<String> predicate = exp -> support.checkSupport(new Object[]{1, 2}, new Foo(3), method, exp);
        Assert.assertTrue(predicate.test("(#a + #b) == #result.getTotal()"));
        Assert.assertFalse(predicate.test("(#a + #b) != #result.getTotal()"));
        Assert.assertTrue(predicate.test(""));
    }

    @Test
    public void resolveElement() {
        Method method = getMethod();
        AutoOperate annotation = method.getAnnotation(AutoOperate.class);
        MethodAnnotatedElementAutoOperateSupport.ResolvedElement element = support.resolveElement(method, annotation);
        Assert.assertEquals(method, element.getElement());
        Assert.assertSame(2, element.getExtractor().invoke(new Foo(2)));
        Assert.assertEquals(1, element.getGroups().size());
        Assert.assertTrue(element.getGroups().contains("a"));
        Assert.assertEquals(Foo.class, element.getBeanOperations().getTargetType());
        Assert.assertEquals(DisorderedBeanOperationExecutor.class, element.getExecutor().getClass());
        element.execute(new Foo(2));
    }

    private Method getMethod() {
        Method method = ReflectionUtils.findMethod(getClass(), "compute", Integer.class, Integer.class);
        Assert.assertNotNull(method);
        return method;
    }

    @AutoOperate(type = Foo.class, includes = {"a", "b"}, excludes = {"b", "c"}, condition = "'true'", on = "total")
    private Foo compute(Integer a, Integer b) {
        return new Foo(a + b);
    }

    @Getter
    @RequiredArgsConstructor
    private static class Foo {
        private final Integer total;
    }
}