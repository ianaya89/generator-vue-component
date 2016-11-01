const path       = require('path');
const yosay      = require('yosay');
const to         = require('to-case');
const generators = require('yeoman-generator');


const libraryGenerator = generators.Base.extend({
  prompting: {
    welcome() {
      this.log(yosay(
        '\'Allo \'allo! Out of the box I include Babel, Webpack and Karma, as well as a' +
        'few other goodies, to build your own reusable Vue.js Component.'
      ));
    },

    ask() {
      return this.prompt([{
        name    : 'libraryName',
        type    : 'input',
        message : 'Library name:',
        filter  : answer => to.slug(answer),
        default : path.basename(this.destinationPath())
      }, {
        name    : 'libraryDescription',
        type    : 'input',
        message : 'Library description:'
      }, {
        name    : 'libraryVersion',
        type    : 'input',
        message : 'Library version:',
        default : '0.0.1'
      }, {
        name    : 'authorName',
        type    : 'input',
        message : 'Author name:',
        store   : true
      }, {
        name    : 'authorEmail',
        type    : 'input',
        message : 'Author email:',
        store   : true
      }]).then((answers) => {
        this.libraryName        = answers.libraryName;
        this.libraryDescription = answers.libraryDescription;
        this.libraryVersion     = answers.libraryVersion;
        this.authorName        = answers.authorName;
        this.authorEmail       = answers.authorEmail;
      });
    }
  },

  writing: {

    src() {
      this.directory('src', 'src');
    },

    img() {
      this.directory('img', 'img');
    },

    test() {
      this.directory('test', 'test');
    },

    build() {
      this.directory('build', 'build', { libraryName: this.libraryName });
    },

    docs() {
      this.directory('docs', 'docs', { libraryName: this.libraryName });
    },

    gitignore() {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    eslintrc() {
      this.fs.copy(
        this.templatePath('eslintrc.js'),
        this.destinationPath('.eslintrc.js')
      );
    },

    eslintignore() {
      this.fs.copy(
        this.templatePath('eslintignore'),
        this.destinationPath('.eslintignore')
      );
    },

    babel() {
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
    },

    karma() {
      this.fs.copy(
        this.templatePath('karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
    },

    index() {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'), {
          libraryName       : this.libraryName
        }
      );
    },

    readme() {
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'), {
          libraryName       : this.libraryName,
          libraryDescription: this.libraryDescription
        }
      );
    },

    license() {
      this.fs.copy(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE')
      );
    },

    npm() {
      this.fs.copy(
        this.templatePath('npmrc'),
        this.destinationPath('.npmrc')
      );
    },

    npmignore() {
      this.fs.copy(
        this.templatePath('npmignore'),
        this.destinationPath('.npmignore')
      );
    },

    editorconfig() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    },

    circle() {
      this.fs.copy(
        this.templatePath('circle.yml'),
        this.destinationPath('circle.yml')
      );
    },

    packageJSON() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          libraryName       : this.libraryName,
          libraryDescription: this.libraryDescription,
          libraryVersion    : this.libraryVersion,
          authorName        : this.authorName,
          authorEmail       : this.authorEmail
        }
      );
    }
  },

  install() {
    this.npmInstall();
  }
});


module.exports = libraryGenerator;
