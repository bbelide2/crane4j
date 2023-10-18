(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{310:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置属性映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置属性映射"}},[t._v("#")]),t._v(" 配置属性映射")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://img.xiajibagao.top/image-20230220182129822.png",alt:"image-20230220182129822"}}),t._v(" "),s("p",[t._v("当你通过 key 从容器中获取到对应的数据后，属性配置将决定它们之间将如何映射字段值。")]),t._v(" "),s("p",[t._v("对应到代码中有点像 "),s("code",[t._v("MapStruct")]),t._v("，一个 "),s("code",[t._v("@Mapping")]),t._v(" 表示一组字段间的映射关系，一个 "),s("code",[t._v("@Assemble")]),t._v(" 会有包含多个 "),s("code",[t._v("@Mapping")]),t._v(" 注解。")]),t._v(" "),s("p",[t._v("该注解属性如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("指向")]),t._v(" "),s("th",[t._v("为空时指向")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("src")])]),t._v(" "),s("td",[t._v("数据源对象的属性")]),t._v(" "),s("td",[t._v("指向数据源对象本身")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ref")])]),t._v(" "),s("td",[t._v("带填充对象的属性")]),t._v(" "),s("td",[t._v("指向 key 字段")])])])]),t._v(" "),s("p",[t._v("不同的 "),s("code",[t._v("src")]),t._v(" 与 "),s("code",[t._v("ref")]),t._v(" 组合将会产生不同的效果。")]),t._v(" "),s("h2",{attrs:{id:"_1-属性到属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-属性到属性"}},[t._v("#")]),t._v(" 1.属性到属性")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("src")]),t._v(" 与 "),s("code",[t._v("ref")]),t._v(" 皆不为空时表示两个将 a 的属性值映射到 b 的属性值。比如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// student.studentName -> studentVO.name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentClassName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"className"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// student.studentClassName -> studentVO.className")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述示例中，我们通过"),s("code",[t._v("@Assemble")]),t._v("注解指定了数据源容器和字段映射。其中，"),s("code",[t._v("props")]),t._v(" 属性中使用了 "),s("code",[t._v("@Mapping")]),t._v(" 注解配置了两个映射属性，分别：")]),t._v(" "),s("ul",[s("li",[t._v("将"),s("code",[t._v("Student.studentName")]),t._v("映射到"),s("code",[t._v("StudentVO.name")]),t._v("；")]),t._v(" "),s("li",[t._v("将"),s("code",[t._v("Student.studentClassName")]),t._v("映射到"),s("code",[t._v("StudentVO.className")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-同名属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-同名属性"}},[t._v("#")]),t._v(" 1.1.同名属性")]),t._v(" "),s("p",[t._v("另外，如果 "),s("code",[t._v("src")]),t._v(" 和 "),s("code",[t._v("ref")]),t._v(" 指定的字段名称相同，可以直接在"),s("code",[t._v("value")]),t._v("中同时指定。比如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// student.name -> studentVO.name")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_1-2-自动类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-自动类型转换"}},[t._v("#")]),t._v(" 1.2.自动类型转换")]),t._v(" "),s("p",[t._v("当两边的属性类型不同时，将会自动进行类型转换，该功能依赖 "),s("code",[t._v("ConverterManager")]),t._v(" 实现，具体参见后文 “"),s("RouterLink",{attrs:{to:"/advanced/type_converter.html"}},[t._v("类型转换")]),t._v("” 一节。")],1),t._v(" "),s("h2",{attrs:{id:"_2-对象到属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-对象到属性"}},[t._v("#")]),t._v(" 2.对象到属性")]),t._v(" "),s("p",[t._v("当在 "),s("code",[t._v("@Mapping")]),t._v(" 注解中不指定 "),s("code",[t._v("src")]),t._v(" 时，表示直接将整个数据源对象映射到目标对象的属性上。比如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// student -> studentVO.student")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述示例中，根据 "),s("code",[t._v("id")]),t._v(" 查找到 "),s("code",[t._v("Student")]),t._v(" 对象后，直接将该 "),s("code",[t._v("Student")]),t._v(" 对象赋值给"),s("code",[t._v("StudentVO.student")]),t._v(" 字段。")]),t._v(" "),s("p",[t._v("这种配置通常适用于对象的组装，或者当数据源对象本身就是某个字典值或枚举值的情况。")]),t._v(" "),s("h2",{attrs:{id:"_3-属性到键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-属性到键"}},[t._v("#")]),t._v(" 3.属性到键")]),t._v(" "),s("p",[t._v("当在 "),s("code",[t._v("@Mapping")]),t._v(" 注解中不指定引用字段 "),s("code",[t._v("ref")]),t._v(" 时，表示直接将 "),s("code",[t._v("src")]),t._v(" 指向的属性值映射到 "),s("code",[t._v("key")]),t._v(" 字段上。比如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gender.name -> studentVO.gender")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" gender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述示例中，根据 "),s("code",[t._v("StudentVO.sex")]),t._v(" 查找到性别字典对象 "),s("code",[t._v("Gender")]),t._v(" 后，将其对应的 "),s("code",[t._v("Gender.name")]),t._v(" 映射回 "),s("code",[t._v("StudentVO.sex")]),t._v(" 字段。")]),t._v(" "),s("p",[t._v("这种配置适用于将字典值或枚举值映射回目标对象的字段上。")]),t._v(" "),s("h2",{attrs:{id:"_4-对象到键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-对象到键"}},[t._v("#")]),t._v(" 4.对象到键")]),t._v(" "),s("p",[t._v("当在 "),s("code",[t._v("@Mapping")]),t._v(" 注解中不指定引用字段 "),s("code",[t._v("ref")]),t._v(" ，且不指定 "),s("code",[t._v("src")]),t._v(" 时，表示整个数据源对象映射到目标对象的 "),s("code",[t._v("key")]),t._v(" 字段上。比如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 假设通过 gender 获得的数据为 Map<String, String> 格式，比如 {key = "male", value = "男"}')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sexgender\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这种情况比较罕见。")]),t._v(" "),s("h2",{attrs:{id:"_5-批量映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-批量映射"}},[t._v("#")]),t._v(" 5.批量映射")]),t._v(" "),s("p",[t._v("在一些情况下，从数据源容器获得的一个键值将对应一批数据源对象（比如一对多或者多对多装配），在这种情况下，字段映射将变为"),s("strong",[t._v("批量映射")]),t._v("模式。")]),t._v(" "),s("p",[t._v("具体而言，对于集合或数组中的每个数据源对象，我们会从中获取指定的  "),s("code",[t._v("src")]),t._v("  属性值，并将所有属性值组装为集合，然后将该集合赋值给目标对象中的  "),s("code",[t._v("ref")]),t._v("  属性。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teacher"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manyToManyAssembleOperationHandler"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [teacher, teacher...] -> [teacher.name, teacher.name...] -> studentVO.teacherNames")]),t._v("\n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teacherNames"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" teacherIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以逗号分隔的字符串，例如：1, 2, 3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" teacherNames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述示例中，根据 "),s("code",[t._v("teacherIds")]),t._v(" 字段字符串中通过逗号分隔的多个键值，查询关联的多个 "),s("code",[t._v("Teacher")]),t._v(" 对象，然后将 "),s("code",[t._v("Teacher")]),t._v(" 对象集合的 "),s("code",[t._v("name")]),t._v(" 属性映射为 "),s("code",[t._v("List<String>")]),t._v(" 并赋值给 "),s("code",[t._v("StudentVO.teacherNames")]),t._v(" 字段。")]),t._v(" "),s("p",[t._v("该字段映射遵循普通字段映射的语义，例如对象映射：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teacher"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manyToManyAssembleOperationHandler"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teachers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" teacherIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以直接是集合或者数组")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Teacher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" teachers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在批量映射的情况下，返回的对象可以是数据源对象或数据源对象的属性集合。")]),t._v(" "),s("p",[t._v("该功能需要配合装配处理器 "),s("code",[t._v("AssembleOperationHandler")]),t._v(" 使用，具体参见后文 “"),s("RouterLink",{attrs:{to:"/basic/assemble_operation_handler.html"}},[t._v("一对一&多对多")]),t._v("” 一节。")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("ul",[s("li",[t._v("如果用户传入的字符串是 "),s("code",[t._v("id1, id2, id3...")]),t._v(" 这样的格式，分割后的值默认保持为 "),s("code",[t._v("String")]),t._v(" 类型。用户需要确保目标容器能够接受 "),s("code",[t._v("String")]),t._v(" 类型的键；")]),t._v(" "),s("li",[t._v("如果分隔符不是逗号 "),s("code",[t._v(",")]),t._v("，或者有其他拆分规则，用户可以为 "),s("code",[t._v("ManyToManyAssembleOperationHandler")]),t._v(" 设置自定义的字符串分割器；")])])]),t._v(" "),s("h2",{attrs:{id:"_6-属性映射模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-属性映射模板"}},[t._v("#")]),t._v(" 6.属性映射模板")]),t._v(" "),s("p",[t._v("为了保持代码的整洁性，我们可以将字段映射配置抽取为独立的模板。比如，现有如下配置：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentClassName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"className"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentTeacherName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teacherName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" teacherName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们可以创建一个模板类 "),s("code",[t._v("StudentMappingTemplate")]),t._v("，将 "),s("code",[t._v("props")]),t._v(" 中的映射配置移到模板类中：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@MappingTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentClassName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"className"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentTeacherName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teacherName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentMappingTemplate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后，在 "),s("code",[t._v("@Assemble")]),t._v(" 注解中使用 "),s("code",[t._v("propTemplates")]),t._v(" 引入模板：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"studentTeacherAge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"teacherAge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        propTemplates "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentMappingTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" teacherName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" teacherAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过模板引入的字段映射配置与通过 "),s("code",[t._v("@Assemble.props")]),t._v(" 声明的配置效果相同，并且两者可以同时存在。")]),t._v(" "),s("p",[t._v("字段映射规则按照"),s("strong",[t._v("就近原则")]),t._v("执行。即离 "),s("code",[t._v("StudentVO")]),t._v(" 越近，且排序靠前的字段优先完成映射，后面的映射字段会覆盖已有的值。")]),t._v(" "),s("h2",{attrs:{id:"_7-链式操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-链式操作符"}},[t._v("#")]),t._v(" 7.链式操作符")]),t._v(" "),s("p",[s("code",[t._v("crane4j")]),t._v(" 支持在 "),s("code",[t._v("@Mapping")]),t._v(" 注解中，通过类似 js 的链式操作符的方式来访问或设置嵌套对象的属性。")]),t._v(" "),s("p",[t._v("例如，我们有一个 "),s("code",[t._v("Foo")]),t._v(" 类如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FooVO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nested.name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NestedFoo")]),t._v(" nested"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NestedFoo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们声明了一个装配操作，假设 "),s("code",[t._v("foo")]),t._v(" 容器返回的数据源对象是 "),s("code",[t._v("Foo")]),t._v("，则上述示例表示，获取到 "),s("code",[t._v("Foo")]),t._v(" 对象后，将 "),s("code",[t._v("Foo.name")]),t._v(" 映射到 "),s("code",[t._v("FooVO")]),t._v(" 对象中 "),s("code",[t._v("nested")]),t._v(" 属性中的嵌套对象 "),s("code",[t._v("NestedFoo")]),t._v(" 的 "),s("code",[t._v("name")]),t._v(" 属性。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("该功能是通过 "),s("code",[t._v("ChainAccessiblePropertyOperator")]),t._v(" 类实现的。如果用户替换了默认的 "),s("code",[t._v("PropertyOperator")]),t._v("，则需要手动使用 "),s("code",[t._v("ChainAccessiblePropertyOperator")]),t._v(" 对用户的实现进行包装。")]),t._v(" "),s("p",[t._v("具体参见后文 “"),s("RouterLink",{attrs:{to:"/advanced/reflection_factory.html"}},[t._v("反射工厂")]),t._v("” 部分内容。")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);