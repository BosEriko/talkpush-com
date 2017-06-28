module.exports = function(grunt){

    grunt.initConfig({
      concat: {
        dist: {
          src: ['./public/scripts/jquery-3.1.0.min.js',
                './public/scripts/app.js',
                './public/scripts/aos.js',
                './public/scripts/call-candidate.js',
                './public/scripts/about.js'],
          dest: './public/scripts/_app.js',
        },
      },
    })

    grunt.loadNpmTasks('grunt-contrib-concat');

}
