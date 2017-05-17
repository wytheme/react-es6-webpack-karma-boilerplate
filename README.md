#

注意：这个项目主要面向于 **React 0.14.x**

WARNING: the project is aim to **React 0.14.x**

## QA

1. 此类WARNING信息可以无视，react-compat.js会优先选择react v15的相关模块，没有才会用v0.14相关模块，所以node-module不要添加react-test-renderer之类的模块

```
WARNING in ./~/enzyme/build/react-compat.js
Module not found: Error: Cannot resolve module 'react-dom/test-utils' in /node_modules/enzyme/build
 @ ./~/enzyme/build/react-compat.js 132:20-51

WARNING in ./~/enzyme/build/react-compat.js
Module not found: Error: Cannot resolve module 'react-test-renderer/shallow' in /node_modules/enzyme/build
```

2. 原先的业务逻辑中存在 script 引入的标签，在karma里面如何引入

```js
module.exports = function (config) {
    config.set({
        // 依赖框架
        frameworks: ['jasmine'],
        files: [
            {
                pattern: './demo/javascript/dist/browser-polyfill.min.js',
                included: true,	// 类似 script 的方式引入
            },
        ]，

		// 注意： preprocessors 不要处理 browser-polyfill 相关的文件
		preprocessors: {
		    'demo/javascript/src/**/*.js': ['webpack']
		}
	})
}
```

3. css和图片等静态资源如何引入

借助 karma 的proxies，默认karma会将静态资源放到 /base/ 下面，所以资源路径需要通过proxy代理到对应的目录
```
proxies: {
    "/dist/": "/base/dist/",
},
```

4. phantomjs 需要添加promise ployfill

可以在 setup.js 中引入

`require('es6-promise').polyfill();`


5. Sourcemap support

IF: TypeError: Cannot read property 'text' of undefined #167

- https://github.com/karma-runner/karma-coverage/issues/167
- https://github.com/karma-runner/karma-coverage/issues/157
- https://github.com/webpack-contrib/istanbul-instrumenter-loader/issues/32

BETTOR WAY:

- [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter)


-----

# Use [create-react-app](https://github.com/facebookincubator/create-react-app) instead

Boilerplate for kick starting a project with the following technologies:
* [React](https://github.com/facebook/react)
* [ES6 with Babel](http://babeljs.io)
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
* [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for tweaking React components in real time.
* [Karma](http://karma-runner.github.io/0.13/index.html) for running unit tests.

The various webpack options used have been explained in detailed as comments in the config file. Should help with understanding the nitty-gritty :)

Based on [react-es6-webpack-boilerplate](https://github.com/vasanthk/react-es6-webpack-boilerplate).

### Usage

```
npm install
npm start
# Open http://localhost:5000
```

### Linting

ESLint with React linting options have been enabled.

```
npm run lint
```

### Testing

Start Karma test runner.

This will run the tests only one, ideal for CI (travis and such).
```
npm test
```

This will auto watch all files for changes and rerun the tests. Ideal for development.
```
npm run test_watch
```
