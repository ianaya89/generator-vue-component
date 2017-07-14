/* global describe before it */

const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')

describe('generator-vue-component:app', () => {
  before(() =>
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true }).toPromise()
  )

  it('creates files', () => {
    assert.file([
      'src/HelloWorld.vue',
      'src/index.js',
      'src/assets/vue.png',
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      '.npmignore',
      'LICENSE',
      'index.html',
      'favicon.ico',
      'package.json',
      'README.md',
      'docs/App.vue',
      'docs/main.js',
      'webpack.config.js'
    ])
  })
})
