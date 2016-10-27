const path             = require('path');
const gulp             = require('gulp');
const nsp              = require('gulp-nsp');
const mocha            = require('gulp-mocha');
const plumber          = require('gulp-plumber');
const istanbul         = require('gulp-istanbul');
const coveralls        = require('gulp-coveralls');
const excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('static', () =>
  gulp.src('**/*.js')
    .pipe(excludeGitignore())
);

gulp.task('nsp', (cb) => {
  nsp({ package: path.resolve('package.json') }, cb);
});

gulp.task('pre-test', () =>
  gulp.src('generators/index.js')
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
);

gulp.task('test', ['pre-test'], (cb) => {
  let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', (err) => {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', () => {
      cb(mochaErr);
    });
});

gulp.task('watch', () => {
  gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
});

gulp.task('coveralls', ['test'], () => {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static', 'test', 'coveralls']);
