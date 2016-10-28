# generator-babel-webpack-karma

> Yeoman generator to build npm client side libraries using babel, webpack & karma

<p style="text-align: center">
  <img src="img/vue.png" alt="vue" title="vue"/>
</p>


### Installation

First, install [Yeoman](http://yeoman.io) and generator-babel-webpack-karma using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-babel-webpack-karma
```

Then generate your new project:

```bash
yo babel-webpack-karma
```

### Scaffolding

```
└───build/
    ├───utils.js
    ├───webpack.build.js
    ├───webpack.build.min.js
    ├───webpack.config.js
└───docs/
    ├───App.vue
    ├───main.js
└───src/
    ├───HelloWorld.vue
    ├───index.js
└───test/
    ├───index.js
    ├───spec/
    │   └───index.spec.js
├───.babelrc
├───.editorconfig
├───.eslintignore
├───.eslintrc.js
├───.gitignore
├───.npmignore
├───.npmrc
├───circle.yml
├───karma.conf.js
├───LICENSE
├───package.json
├───README.md
```

### Development Setup

```bash
# install dependencies
$ npm install

# build docs (just first time)
$ npm run docs

# dev mode
$ npm run dev

# test
$ npm run test

# build component and get production release
$ npm run build

# build component and docs
$ npm run build-all
```


### Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Ignacio Anaya](https://twitter.com/ianaya89)
