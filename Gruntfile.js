module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      dev: {
        dest: 'app/',
        js_dest: 'app/js',
        css_dest: 'app/css'
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          hostname: 'localhost',
          port: 9001,
          base: 'app'
        }
      }
    },
    open : {
      dev : {
        path: 'http://localhost:9001/',
        app: '/Applications/Google Chrome.app'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('server', ['connect', 'open:dev']);

};