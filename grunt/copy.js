//https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
	main: {
		src: [
			'**',
			'!node_modules/**',
			'!build/**',
			'!bin/**',
			'!scss/**',
			'!grunt/**',
			'!.git/**',
			'!Gruntfile.js',
			'!livereload.js',
			'!package.json',
			'!.gitignore',
			'!.gitmodules',
			'!.tx/**',
			'!**/Gruntfile.js',
			'!**/package.json',
			'!**/README.md',
			'!**/*~'
			],
		dest: 'build/<%= pkg.name %>/'
	}
};