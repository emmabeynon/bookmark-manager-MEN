module.exports = function(grunt) {

  grunt.initConfig({
      jshint: {
        all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
      },
      watch: {
        scripts: {
          files: ['src/**/*.js', 'spec/**/*.js'],
          tasks: ['jshint'],
          options: {
            event: ['all'],
          },
        },
      },
      webdriver: {
        test: {
          configFile: './wdio.conf.js'
        }
      },
      nodemon: {
        dev: {
          script: 'app.js'
        }
      },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['jshint'], ['webdriver'], ['nodemon']);
};
