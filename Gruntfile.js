module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: 'app',
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		less: {
			development: {
				files: {
					'<%= app %>/assets/css/styles.css': '<%= app %>/assets/less/styles.less'
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9000,
					base: '<%= app %>',
					open: true,
					livereload: true
				}
			}
		},
		wiredep: {
			task: {
				src: [
					'<%= app %>/*.html'
				],
				exclude: [
					'bootstrap-css/js'
				]
			}
		},
		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['less']
			},
			less: {
				files: '<%= app %>/assets/less/*.less',
				tasks: ['less']
			},
			livereload: {
				files: ['<%= app %>/**/*.html', '<%= app %>/assets/css/**/*.css','<%= app %>/**/*.js'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('bower-install', ['wiredep']);
	grunt.registerTask('default', ['bower-install', 'less', 'connect', 'watch']);
};
