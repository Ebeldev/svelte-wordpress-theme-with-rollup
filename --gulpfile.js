// This is the code used in video "How To Add Svelte To Your Site?"
// Check out the video here: https://www.youtube.com/watch?v=ZL7mKFQHSAY

const gulp = require('gulp')
const sass = require('gulp-sass')
const browsersync = require('browser-sync').create()

const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const url = 'http://sveltesite.test/'

function pack () {
  const mode = process.env.NODE_ENV || 'development'

  return gulp.src('svelte/src/main.js')
    .pipe(webpackStream({
      output: {
        filename: 'svelteBundle.js'
      },
      module: {
        rules: [
          {
            test: /\.svelte$/,
            exclude: /node_modules/,
            use: 'svelte-loader'
          }
        ]
      },
      mode
    }, webpack))
    .pipe(gulp.dest('./svelte/dist/'))
}

function scss () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browsersync.stream({ match: '**/*.css' }))
}

function browserSync (done) {
  browsersync.init({
    // server: {
    //   baseDir: 'wootax.test'
    // },
    proxy: url,
    injectChanges: true,
    // online: true
    ghostMode: false,
    notify: false,
    port: 3000
  })
  done()
}

function watchFiles () {
  gulp.watch('./scss/**/*.scss', scss)
  gulp.watch(['./svelte/dist/svelte.js', './svelte/src/**/*.svelte', './svelte/src/**/*.js']).on('change', gulp.series(pack, browsersync.reload))
  gulp.watch(['./**/*.html']).on('change', browsersync.reload)
}

// Define tasks
const watch = gulp.parallel(watchFiles, browserSync)

// Export tasks
exports.watch = watch
exports.scss = scss
exports.pack = pack
