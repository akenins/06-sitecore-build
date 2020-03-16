const autoprefixer = require('autoprefixer')
const browsersync = require('browser-sync').create()
const cssnano = require('cssnano')
const del = require('del')
const concat = require('gulp-concat')
const eslint = require('gulp-eslint')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

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
  return (
    gulp
      .src('./src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      //.pipe(plumber())
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(gulp.dest('./dist/assets/css/'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(postcss([autoprefixer(autoprefixerOptions), cssnano()]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/assets/css/'))
      .pipe(browsersync.stream())
  )
}

// TODO: Lint Scripts

// Set Terser options

const terserOptions = {
  mangle: {
    keep_fnames: true,
  },
  compress: {
    keep_fnames: true,
  },
}

// Scripts Task

function scripts() {
  return gulp
    .src('./src/scripts/source/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/assets/scripts/site/'))
  // .pipe(rename({ suffix: '.min' }))
  // .pipe(uglify())
  // .pipe(gulp.dest('./dist/assets/scripts/site/'))
}

// Watch files
function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', scss)
  gulp.watch('./src/scripts/**/*.js', scripts)
  // TODO: Add images watch
}

// Define complex tasks
const js = gulp.series(scripts)
const build = gulp.series(clean, gulp.parallel(scss, js))
const watch = gulp.parallel(watchFiles, browserSync)

// export tasks
exports.scss = scss
exports.scripts = scripts
exports.clean = clean
exports.build = build
exports.watch = watch
exports.default = build
