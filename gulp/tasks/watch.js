const gulp = require('gulp'),
	    conf = require('../config');

module.exports = function () {

	gulp.watch(conf.src.jswatch,[
		'dev'
	]);
};
