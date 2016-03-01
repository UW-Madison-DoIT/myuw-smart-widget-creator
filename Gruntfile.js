module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },
    run: {
      build_wc: {
        cmd: 'npm',
        args: [
          'run',
          'rebuild-wc'
        ],
        options: {
          wait: true
        }
      },
      run_wc: {
        cmd : 'npm',
        args: [
          'run','wc'
        ],
        options: {
          wait: false
        }
      }
    },

    watch: {
     files: ['app/**/*'],
     tasks: ['run:build_wc'],
   }
  });

  grunt.registerTask('serve', 'Compile static and watch for change so it can recompile', function(){
    grunt.task.run([
      'run:run_wc',
      'watch'
    ]);
  })
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
  grunt.registerTask('default', ['processhtml']);
};
