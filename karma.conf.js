module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    plugins: ['karma-jasmine', 'karma-browserify', 'karma-spec-reporter', 'karma-phantomjs-launcher'],
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.js': [ 'browserify' ]
    },
    autoWatch: true,
  });
};
