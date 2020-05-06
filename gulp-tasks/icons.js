const gulp = require('gulp')
const pkg = require('../package.json')
const imagemin = require('gulp-imagemin')
const gulpicon = require('gulpicon/tasks/gulpicon')
const glob = require('glob')
const changed = require('gulp-changed')

const iconGlob = glob.sync(`${pkg.config.icons}/source/*.svg`)

const iconOptions = {
  corsEmbed: true,
  dest: `${pkg.config.icons}`,
  cssprefix: '.icon-',
  defaultHeight: '64px',
  defaultWidth: '64px',
  enhanceSVG: true,
  loadersnippet: 'grunticon.js',
  optimizationLevel: 5,
}

const minify = function () {
  return gulp
    .src(`${pkg.config.icons}/source/raw/*.svg`)
    .pipe(changed(`${pkg.config.icons}/source`))
    .pipe(imagemin())
    .pipe(gulp.dest(`${pkg.config.icons}/source`))
}

module.exports = { minify, build: gulpicon(iconGlob, iconOptions) }
