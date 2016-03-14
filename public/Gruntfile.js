module.exports = function(grunt){

	// start up tasks
	grunt.initConfig({

		watch:{			
			style: {
				files:"css/src/**/*.*",
				tasks:["compileStyle"],
				options:{
					livereload:true
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			lib: {
				files: {
					'css/temp/lib.css': [
					'bower_components/bootstrap/dist/css/bootstrap.min.css', 
					'bower_components/font-awesome/css/font-awesome.min.css',
					'css/src/w3.css'					
					]
				}
			},
			app: {
				files: {
					'css/temp/style.css': [
					'css/src/style.css'					
					]
				}
			}
		},

		concat:{				
		    css:{
		    	options:{
		    		sourceMap: true
		    	},
		    	src:[
		    		'css/temp/lib.css',
		    		'css/temp/style.css'		    		
		    	],
		    	dest: 'css/dist/style.css'
		    },
		    jslibs:{
		    	options:{
		    		sourceMap: true,
		    		separator: ';'
		    	},
		    	src:[
		    		'js/templibs/jquery.min.js',
					'js/templibs/bootstrap.min.js',
					'js/templibs/moment.min.js',
					'js/templibs/lodash.min.js'
		    	],
		    	dest: 'js/dist/lib.min.js'
		    }
		},


		copy: {
			font:{
				files:[
					{
					expand: true, 
					src: ['./*'], 
					dest: 'css/fonts', 
					filter: 'isFile',
					cwd: 'bower_components/font-awesome/fonts',
					}
				]
			}
		},
		
		uglify: {			
			jslibs:{
				files:{
					'js/templibs/jquery.min.js':['bower_components/jquery/dist/jquery.min.js'],					
					'js/templibs/bootstrap.min.js':['bower_components/bootstrap/dist/js/bootstrap.min.js'],										
					'js/templibs/moment.min.js':['bower_components/moment/min/moment.min.js'],					
					'js/templibs/lodash.min.js':['bower_components/lodash/dist/lodash.min.js']					
				}
			},			
		}
	});

	
	// load up tasks

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks('grunt-contrib-uglify');	

	// register some custom tasks
	grunt.registerTask("build", [
		'uglify:jslibs',
		'concat:jslibs',
		'cssmin:lib',
		'cssmin:app',
		'concat:css',
		'copy'
	]);

	grunt.registerTask("compileStyle", [
		'cssmin:app',
		'concat'		
	]);

};