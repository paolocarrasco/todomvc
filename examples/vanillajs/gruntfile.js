module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.initConfig({
    jasmine: {
      src: ['js/controller.js'],
      options: {
        specs: [
          'test/**/*Spec.js'
        ]
      }
    },
    eslint: {
        target: ['js/*.js']
    }
  });

  grunt.registerTask('default', [
    'eslint',
    'jasmine'
  ]);
};
