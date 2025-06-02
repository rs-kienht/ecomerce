import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import { deleteAsync } from 'del';
import browserSync from 'browser-sync';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify'; // Thêm để minify JS
import terser from 'gulp-terser'; // Thêm alternative cho uglify (hỗ trợ ES6+)
import connectSSI from 'connect-ssi';

const paths = {
  scss: 'src/assets/scss/**/*.scss',
  js: 'src/assets/js/**/*.js',
  cssOutput: 'htdocs/assets/css',
  jsOutput: 'htdocs/assets/js',
};

const server = browserSync.create();
const compileSass = gulpSass(sass);

async function clean() {
  await deleteAsync(['htdocs/assets/css', 'htdocs/assets/js']);
}

function styles() {
  return gulp.src(paths.scss)
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({
      compatibility: 'ie8',
      level: {
        1: {
          specialComments: 0,
          removeEmpty: true,
          removeWhitespace: true
        },
        2: {
          mergeMedia: true,
          removeEmpty: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          removeDuplicateRules: true,
          removeUnusedAtRules: false
        }
      }
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.cssOutput))
    .pipe(server.stream());
}


async function scripts() {
  const webpackConfig = (await import('./webpack.config.js')).default;
  return gulp.src('src/assets/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(webpackStream(webpackConfig, webpack))
    // Lưu phiên bản không minify
    .pipe(gulp.dest(paths.jsOutput))
    // Tạo phiên bản minify với terser (hỗ trợ ES6+)
    .pipe(terser({
      compress: {
        drop_console: true,    // xóa console.log
        drop_debugger: true,   // xóa debugger statements
        pure_funcs: ['console.log'] // xóa specific functions
      },
      format: {
        comments: false,      // xóa tất cả comments
      },
      mangle: true             // rút gọn tên biến
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.jsOutput))
    .pipe(server.stream());
}

function watchFiles() {
  gulp.watch(paths.scss, styles);
  gulp.watch(paths.js, scripts);
  gulp.watch('htdocs/**/*.html').on('change', server.reload);
}

function serve(done) {
  server.init({
    server: {
      baseDir: 'htdocs',
      middleware: connectSSI({
        baseDir: 'htdocs',
        ext: '.html',
      }),
    },
    port: 3000,
    open: true,
  });
  done();
}

// Task riêng cho production build
function productionBuild() {
  return gulp.series(
    clean,
    gulp.parallel(styles, scripts)
  );
}

// Task mặc định cho development
const build = gulp.series(
  clean,
  gulp.parallel(styles, scripts),
  gulp.parallel(watchFiles, serve)
);

export default build;
export const production = productionBuild();
