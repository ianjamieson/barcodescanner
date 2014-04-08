module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      dev: {
        dest: 'app/',
        js_dest: 'app/js',
        css_dest: 'app/css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};