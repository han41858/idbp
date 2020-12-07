module.exports = function (config) {
	config.set({
		frameworks : ['jasmine', 'karma-typescript'],
		plugins : [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-typescript')
		],
		client : {
			clearContext : false // leave Jasmine Spec Runner output visible in browser
		},
		files : [
			'src/*.ts',
			'spec/*.ts'
		],
		preprocessors : {
			'**/*.ts' : 'karma-typescript'
		},
		reporters : ['progress', 'kjhtml', 'karma-typescript'],
		browsers : ['Chrome'],
		karmaTypescriptConfig : {
			tsconfig : './tsconfig.spec.json'
		}
	});
};
