# generator-vue-component

> 📦 Yeoman generator to build your own [Vue.js](http://vuejs.org/) components

[![bitHound Overall Score](https://www.bithound.io/github/ianaya89/generator-vue-component/badges/score.svg)](https://www.bithound.io/github/ianaya89/generator-vue-component)
[![bitHound Dependencies](https://www.bithound.io/github/ianaya89/generator-vue-component/badges/dependencies.svg)](https://www.bithound.io/github/ianaya89/generator-vue-component/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/ianaya89/generator-vue-component/badges/devDependencies.svg)](https://www.bithound.io/github/ianaya89/generator-vue-component/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/ianaya89/generator-vue-component/badges/code.svg)](https://www.bithound.io/github/ianaya89/generator-vue-component)

<p align="center">
  <img src="generators/app/templates/src/assets/vue.png" alt="yo" title="yo"/>
</p>

## Support
- Vue.js 2 => `vue-esc@>=2.0.0` [master]
- Vue.js 1 => `vue-esc@1.0.0`


## Installation

1. First, install [Yeoman](http://yeoman.io) and generator-vue-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-vue-component
```

2. Create your project directory and access it.

```bash
$ mkdir my-awesome-component
$ cd my-awesome-component
```

3. Then generate your new project:

```bash
yo vue-component
```

## Scaffolding

```
└───docs/
    ├───App.vue
    ├───main.js
└───src/
    ├───assets/
    └──────vue.png
    ├───HelloWorld.vue
    ├───index.js
├───.babelrc
├───.editorconfig
├───.eslintignore
├───.eslintrc.
├───.gitignore
├───.npmignore
├───LICENSE
├───package.json
├───README.md
├───webpack.config.js
```

## Development Setup

```bash
# install dependencies
$ npm install

# dev mode
$ npm run dev

# build component and get production release
$ npm run build
```

## License
[MIT License](https://github.com/ndelvalle/vue-esc/blob/master/LICENSE)

## Style
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

**⌨️ with ❤️ by [@ianaya89](https://twitter.com/ianaya89)**
