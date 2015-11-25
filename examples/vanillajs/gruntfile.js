module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
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
    },
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['eslint', 'jasmine']
      }
    }
  });

  grunt.registerTask('default', [
    'eslint',
    'jasmine'
  ]);
};
