module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			js: {
				src: [
					'./public/scripts/jquery-3.1.0.min.js',
					'./public/scripts/app.js',
					'./public/scripts/aos.js',
					'./public/scripts/typed.js',
					'./public/scripts/intlTelInput.min.js',
					'./public/scripts/call-candidate.js',
					'./public/scripts/accelerate-form.js'
				],
				dest: './public/dist/_app.js'
			},
			css: {
				src: [
					'./public/styles/normalize.css', './public/styles/aos.css', './public/styles/base.css'
				],
				dest: './public/dist/_app.css'
			}
		},
		watch: {
			js: {
				files: ['./public/scripts/**/*.js'],
				tasks: ['concat:js']
			},
			css: {
				files: ['./public/styles/**/*.css'],
				tasks: ['concat:css']
			},
			sass: {
				files: ['./public/styles/**/*.sass'],
				tasks: ['sass-concat']
			},
			pug: {
				files: ['./public/**/*.pug'],
				tasks: ['pug']
			}
		},
		sass: {
			dist: {
				files: {
					'./public/styles/base.css': './public/styles/base.sass'
				}
			}
		},
		pug: {
			compile: {
				options: {
					data: {
						pretty: false
					}
				},
				files: {
					'./public/pricing.html': './public/pug/_pricing.pug',
					'./public/about.html': './public/pug/about.pug',
					'./public/accelerate.html': './public/pug/accelerate.pug',
					'./public/career-bot-demo.html': './public/pug/career-bot-demo.pug',
					'./public/chatbot.html': './public/pug/chatbot.pug',
					'./public/customers.html': './public/pug/customers.pug',
					'./public/index.html': './public/pug/index.pug',
					'./public/jobs.html': './public/pug/jobs.pug',
					'./public/privacy.html': './public/pug/privacy.pug',
					'./public/terms.html': './public/pug/terms.pug',
					// Augmented Recruiters
					'./public/augmented-recruiter/angeni.html': './public/augmented-recruiter/pug/angeni.pug',
					'./public/augmented-recruiter/ping.html': './public/augmented-recruiter/pug/ping.pug',
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-force-task');
	grunt.registerTask('sass-concat', ['force:sass', 'concat:css']);
	grunt.registerTask('default', ['concat', 'watch', 'sass-concat', 'pug']);

}
