package cn.crane4j.extension.spring;

import cn.crane4j.core.support.ParameterNameFinder;
import cn.crane4j.core.support.expression.ExpressionContext;
import cn.crane4j.core.support.expression.ExpressionEvaluator;
import cn.crane4j.core.support.expression.MethodBaseExpressionExecuteDelegate;
import org.checkerframework.checker.nullness.qual.NonNull;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.springframework.context.EmbeddedValueResolverAware;
import org.springframework.util.StringValueResolver;

import java.lang.reflect.Method;
import java.util.Objects;
import java.util.function.Function;

/**
 * Calculator for executing an expression with a method call as the context.
 *
 * @author huangchengxing
 */
public class ResolvableExpressionEvaluator
    extends MethodBaseExpressionExecuteDelegate implements EmbeddedValueResolverAware {

    /**
     * handler
     */
    private StringValueResolver resolver;

    /**
     * Create an {@link ResolvableExpressionEvaluator} instance.
     *
     * @param parameterNameDiscoverer parameter name discoverer
     * @param  expressionEvaluator expression evaluator
     * @param contextFactory context factory
     */
    public ResolvableExpressionEvaluator(
        ParameterNameFinder parameterNameDiscoverer,
        ExpressionEvaluator expressionEvaluator,
        Function<Method, ExpressionContext> contextFactory) {
        super(parameterNameDiscoverer, expressionEvaluator, contextFactory);
    }

    /**
     * <p>Execute the expression in the specified above and return the execution result.<br />
     * Supports input of el expressions or {@code "${}"} format configuration file access syntax.
     *
     * @param expression expression
     * @param resultType result type
     * @param execution execution
     * @return execution result
     */
    @Override
    @Nullable
    public <T> T execute(String expression, Class<T> resultType, MethodExecution execution) {
        ExpressionContext context = resolveContext(execution);
        if (Objects.nonNull(resolver)) {
            expression = resolver.resolveStringValue(expression);
        }
        return expressionEvaluator.execute(expression, resultType, context);
    }

    /**
     * Set the StringValueResolver to use for resolving embedded definition values.
     *
     * @param resolver handler
     */
    @Override
    public void setEmbeddedValueResolver(@NonNull StringValueResolver resolver) {
        this.resolver = resolver;
    }
}
