'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash/assign');

var Server = require('karma').Server;

// add custom browserify options here
var customOpts = {
  entries: ['./src/index.js'],
  transform: [['babelify', {
    presets: ['es2015', 'react']
  }]],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = browserify(opts);

if(!process.env.TRAVIS) {
  b = watchify(b);
}

gulp.task('build-js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist/assets/js'));
}

gulp.task('build-html', function() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-fonts', function() {
  gulp.src('./src/fonts/**/**.**')
    .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('build', ['build-html', 'build-js', 'build-fonts']);

gulp.task('default', ['build', 'test']);
