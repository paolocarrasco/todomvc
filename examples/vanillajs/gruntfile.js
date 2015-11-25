module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    jasmine: {
      src: 'js/**/*.js',
      options: {
        specs: [
          'test/**/*Spec.js'
        ]
      }
    }
  });
};
