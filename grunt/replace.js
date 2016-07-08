//https://github.com/yoniholmes/grunt-text-replace
module.exports = {
	readme_txt: {
		src: [ 'readme.txt' ],
		overwrite: true,
		replacements: [{
			from: /Tags: (.*)/,
			to: "Tags: <%= pkg.tags %>"
		},{
			from: /Tested up to: (.*)/,
			to: "Tested up to: <%= pkg.upto %>"
		},{
			from: /Stable tag: (.*)/,
			to: "Stable tag: <%= pkg.version %>"
		},]
	},
	main_bump: {
		src: [ '<%= pkg.pot.src %>' ],
		overwrite: true,
		replacements: [{
			from: / Version:\s*(.*)/,
			to: " Version: <%= pkg.version %>"
		},{
			from: / @version\s*(.*)/,
			to: " @version <%= pkg.version %>"
		}]
	}
};
