# webpack(learn)

```
一个前端模块打包工具 打包 js css less sass 图片等..
自动的处理浏览器兼容问题 将es6 Commjs Amd 等语法 打包为 es5 
```

安装 

```
npm i webpack@3.0.6
```

文件夹分层

```
1.src 开发文件
2.dist 最终打包文件  
```

初次打包体验

```
webpack ./src/main.js ./dist/index.js
将src下的main打包到dist中的index 其中会将main 以来的文件合并到一起
```

通过配置文件打包

```js
创建 webpack.config.js
文件内容
let path=require('path')
module.exports={
	entry:'./src/main.js',//入口
	output:{ //出口
		path:path.join(__dirname,'dist'),
		filename:'main.js'
	}
}
```

## loader

```
loader是做什么的？

众所周知，webpack中万物皆模块，但是呢webpack默认只能处理`js`模块，那要是用户 `import`一个图片，webpack处理不了，那不就很尴尬了，所以才有了loader机制，So，loader其实就是处理模块的，如果图片有 file-loader，vue文件有 vue-loader 等...

打包流程 根据入口文件查找是否有来文件(递归 查找) 将相关系的文件全部打包

rules: [
		  {
		    test: /\.css$/,
		    //css-loader 加载css
		    //style-loader 将css 加载到dom 中
		     use: ['style-loader','css-loader']//多个loader 使用顺序 从右到左 
  	}
 ]
```

```
处理less  或者 css等等 会将url(a.jpg) 当作一个依赖所以 还需要打包图片
rules 规则中用到的模块 use中可以是一个字符 直接使用模块 也可以是一个对象可以配置参数opotion
```

打包css

```
css 默认没有此模块需要安装 npm i css-loader -s
module: {
    rules: [{ test: /\.txt$/, use: 'css-loader' }],
}
```

打包less

```
npm i --save-dev less-loader less
module: {
    rules: [
     { test: /\.txt$/, use:['style-loader','css-loader']},//打包css
     { test: /\.less$/, use:['style-loader','css-loader','less-loader']},//打包less
    ]
}

```

打包图片

```
npm i --save-dev url-loader
rules
text:/\.(png|jpg|jpeg|gif)$/,
use:[
	loader:'url-loader',
	opotions:{
	
	}
]
```

