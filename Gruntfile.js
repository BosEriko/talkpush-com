module.exports = function(grunt){

    grunt.initConfig({
      concat: {
        js: {
          src: ['./public/scripts/jquery-3.1.0.min.js',
                './public/scripts/app.js',
                './public/scripts/aos.js',
                './public/scripts/intlTelInput.min.js',
                './public/scripts/call-candidate.js',
                './public/scripts/about.js'],
          dest: './public/dist/_app.js',
        },
        css: {
          src: ['./public/styles/normalize.css',
                './public/styles/aos.css',
                './public/styles/base.css'],
          dest: './public/dist/_app.css',
        },
      },
      watch: {
          js: {
              files: ['./public/scripts/**/*.js'],
              tasks: ['concat:js'],
          },
          css: {
              files: ['./public/styles/**/*.css'],
              tasks: ['concat:css'],
          },
      },
    })

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);
    
}
