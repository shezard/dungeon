module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    reporters: ['spec', 'coverage'],
    browsers: ['PhantomJS'],
    plugins: ['karma-jasmine', 'karma-browserify', 'karma-spec-reporter', 'karma-phantomjs-launcher', 'karma-coverage'],
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    autoWatch: true,
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    browserify: {
      debug: true,
      transform: [['babelify', {
        presets: ['es2015', 'react']
      }], 'browserify-istanbul']
    }
  });
};
