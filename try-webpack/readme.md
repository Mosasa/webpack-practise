webpack 是一个打包(build)工具
why 打包？
  常规的(落后的)开发方式， JQery html css 交给后端上线
  MVVM 开发时代， 一切皆可打包

webpack 将现代js开发中的各种新型有用的技术， 集合打包；
打包前，无法运行 （js，es6， module， stylus 不支持浏览器直接执行， .hbs 模版编译，.vue）
打包之后，在目标容器上运行。

静态资源（等待打包的资源） =打包📦>  目标项目