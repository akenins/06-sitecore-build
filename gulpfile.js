const autoprefixer = require('autoprefixer')
const browsersync = require('browser-sync').create()
const cssnano = require('cssnano')
const del = require('del')
// const eslint = require('gulp-eslint')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const webpack = require('webpack')
const gulpWebpack = require('gulp-webpack')

const Gulpicon = require('./gulp-tasks/icons')

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './dist',
    },
    port: 3000,
  })
  done()
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload()
  done()
}

// Clean assets
function clean() {
  return del(['./dist/assets/'])
}

// TODO: Optimize Images

const autoprefixerOptions = {
  expand: true,
  flatten: true,
  overrideBrowserslist: ['last 2 versions'],
}

// Sass task
function scss() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(autoprefixerOptions), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(browsersync.stream())
}

// TODO: Lint Scripts

// Scripts Task

let webpackConfig = {
  entry: {
    main: './src/scripts/source/main.js',
  },
  output: {
    path: '/dist/assets/scripts/site',
    filename: 'main.js',
    sourceMapFilename: 'main.js.map',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourcemap: true,
    //   beautify: false,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true,
    //   },
    //   compress: {
    //     screw_ie8: true,
    //   },
    //   comments: false,
    // }),
  ],
}

const handleScriptBuildError = function (err) {
  console.error('-----------------------')
  console.error('ERROR Building JS Bundle!')
  console.error(err.message)
  console.error('-----------------------')

  this.emit('end')
}

function buildWithWebpack(done) {
  return gulp
    .src('./src/scripts/source/main.js')
    .pipe(gulpWebpack(webpackConfig, webpack, done))
    .pipe(gulp.dest('./dist/assets/scripts/site'))
    .on('error', handleScriptBuildError)
}

// Handle Icons
// gulp.task('iconmin', Gulpicon.minify)
// gulp.task('icons', ['iconmin'], Gulpicon.build)

// Watch files
function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', scss)
  gulp.watch('./src/scripts/**/*.js', buildWithWebpack)
  // TODO: Add images watch
}

// Define complex tasks
const js = gulp.series(buildWithWebpack)
const build = gulp.series(clean, gulp.parallel(scss, js))
const watch = gulp.parallel(watchFiles, browserSync)
const icons = gulp.series(Gulpicon.minify, Gulpicon.build)

// export tasks
exports.build = build
exports.clean = clean
exports.icons = icons
exports.scripts = buildWithWebpack
exports.scss = scss
exports.watch = watch

exports.default = build
