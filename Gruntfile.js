module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['src/ng-bs-daterangepicker.js', 'test/**/*.js']
    },

    karma: {
      unit: {
        options: {
          basePath: './',
          frameworks: ['jasmine'],
          browsers: ['PhantomJS'],
          autoWatch: true,
          singleRun: true,
          files: [
            'src/components/jquery/dist/jquery.min.js',
            'src/components/angular/angular.js',
            'src/components/angular-mocks/angular-mocks.js',
            'src/components/bootstrap/dist/js/bootstrap.js',
            'src/components/moment/min/moment.min.js',
            'src/components/bootstrap-daterangepicker/daterangepicker.js',
            'src/ng-bs-daterangepicker.js',
            'test/**/*.js']
        }
      }
    },

    uglify: {
       options: {
          preserveComments: 'some',
          sourceMap: 'dist/ng-bs-daterangepicker.min.js.map',
          sourceMappingURL: 'ng-bs-daterangepicker.min.js.map',
          report: 'min'
       },
       dist: {
          files: {
             'dist/ng-bs-daterangepicker.min.js': ['src/ng-bs-daterangepicker.js']
          }
       }
     }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'karma']);
};
