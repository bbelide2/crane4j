# 缓存

在 `crane4j` 中，每个缓存对应一个 `Cache` 对象，用于提供缓存的读写功能。数据源容器通过持有 `Cache` 对象来实现对缓存的操作。所有的 `Cache` 对象都由全局的缓存管理器 `CacheManager` 进行管理。

缓存管理器 `CacheManager` 负责创建、配置和管理缓存对象。它提供了一组接口和方法，用于获取、创建、删除和管理缓存。通过 `CacheManager`，我们可以对缓存进行统一的管理和控制。

下图展示了 `Cache`、数据源容器和缓存管理器之间的关系：

![缓存结构](https://img.xiajibagao.top/image-20230225011748030.png)

在这个结构中，数据源容器通过 `Cache` 对象与缓存进行交互，而 `Cache` 对象则由缓存管理器 `CacheManager` 管理和配置。

:::tip

在目前的版本中，由于缺乏 redis 支持，以及缺少细粒度控制缓存过期时间等原因，缓存的实用价值依然有限，在后续版本将会进一步完善它。

:::

## 1.CacheManager

在 `crane4j` 中，缓存功能由缓存管理器 `CacheManager` 和具体的缓存对象 `Cache` 共同完成。缓存管理器负责管理缓存对象的创建和销毁，而缓存对象提供具体的读写功能。

`crane4j` 默认提供了两种缓存管理器实现：

- `ConcurrentMapCacheManager`：基于 `WeakConcurrentMap` 实现的缓存对象，无法设置过期策略，只能依赖 JVM 自动回收缓存。它是默认的缓存管理器；
- `GuavaCacheManager`：基于 `Guava` 的 `Cache` 实现的缓存对象，支持配置过期时间和并发等级等选项；

要替换默认的缓存管理器，可以在配置类中声明一个 `GuavaCacheManager` 实例，并将其作为 Bean 注册到 Spring 上下文中。通过自定义的 `GuavaCacheManager`，可以配置自定义的缓存过期时间和并发级别等参数。

在使用缓存时，可以通过缓存管理器 `CacheManager` 创建和获取缓存对象 `Cache`，然后使用 `Cache` 对象进行缓存的读写和销毁操作。

```java
// 获取名为 "foo" 的缓存对象
Cache<String> cache = cacheManager.getCache("foo");

// 使用缓存对象进行读写操作
cache.get("cacheKey");
cache.put("cacheKey", "cacheValue");

// 销毁名为 "foo" 的缓存对象
cacheManager.removeCache("foo");
```

需要注意的是，销毁缓存对象后，之前获取到的缓存对象仍然可以使用，但是数据可能已被清空。可以通过 `Cache.isExpired()` 方法判断缓存是否已过期。

缓存管理器和缓存对象一般不直接使用，而是与缓存容器等机制结合使用，以实现更高级的缓存功能。

## 2.结合数据源容器使用

在 `crane4j` 中，数据源缓存容器基于缓存容器包装类 `CacheableContainer` 实现，它可以包装任何容器，使其具备缓存功能。

下面是创建数据源缓存容器的示例代码：

```java
// 1、创建一个原始容器
Container<String> original = LambdaContainer.forLambda("original", keys -> {
    return Collections.emptyMap();
});
///2、获取缓存管理器
CacheManager cacheManager = StringUtils.getBean(CacheManager.class);
// 3、基于原始容器与缓存对象，构建带有缓存功能的容器
CacheableContainer<String> container = new CacheableContainer<>(original, cacheManager, "cacheName");
```

在上述示例中，通过 `LambdaContainer` 创建了一个原始容器 `original`，然后使用缓存管理器 `CacheManager` 和指定的缓存对象名称 `"cacheName"`，构建了带有缓存功能的容器 `container`。

容器缓存的粒度是 key 级别，即第一次查询 a、b，则会对 a、b 进行查询并缓存。第二次查询 a、b、c 时，只会查询 c 并将其增量添加到缓存中，而 a、b 则直接从缓存中获取。

## 3.配置缓存容器

在 `crane4j` 中，你可以通过三种方式将一个普通容器配置为缓存容器。

### 3.1.手动替换

可以获取全局配置类 `Crane4jGlobalConfiguration`，然后使用 `replaceContainer` 方法将原始的容器替换为包装后的缓存容器。

示例代码如下：

```java
Crane4jGlobalConfiguration configuration = StringUtils.getBean(Crane4jGlobalConfiguration.class);
CacheManager cacheManager = StringUtils.getBean(CacheManager.class);

// 将原始容器包装并替换为缓存容器
configuration.compute("namespace", container -> {
    return new CacheableContainer<>((Container<Object>) container, cacheManager, "cacheName");
});
```

在上述示例中，使用 `Crane4jGlobalConfiguration` 获取全局配置类实例，然后通过 `replaceContainer` 方法将指定命名空间的原始容器替换为缓存容器。需要传入原始容器、缓存管理器和缓存对象的名称。

### 3.2.添加注解

如果使用 `@ContainerMethod` 声明的方法容器，可以在方法上添加 `@ContainerCache` 注解或 `@CacheContainerMethod` 组合注解，将方法容器声明为可缓存容器。

示例代码如下：

```java
@ContainerCache // 声明该方法容器为可缓存容器
@ContainerMethod(resultType = Foo.class)
public List<Foo> oneToManyMethod(List<String> args) {
    return args.stream().map(key -> new Foo(key, key)).collect(Collectors.toList());
}
```

或者使用 `@CacheContainerMethod` 组合注解：

```java
@CacheContainerMethod(resultType = Foo.class)
public List<Foo> oneToManyMethod(List<String> args) {
    return args.stream().map(key -> new Foo(key, key)).collect(Collectors.toList());
}
```

方法容器创建后，会自动包装为缓存容器。

### 3.3.配置文件

可以在配置文件中声明要将哪些容器包装为缓存容器。

示例配置如下（YAML 格式）：

```yaml
crane4j:
  cache-containers:
    cache-name: container-namespace
```

上述配置中，声明了将命名空间为 `container-namespace` 的容器包装为缓存容器，并使用了指定的缓存名称 `cache-name`。