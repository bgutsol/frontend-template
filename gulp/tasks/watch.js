var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', 
    ['copy:watch',
    
    'pug:watch',
    'sprite:svg:watch',
    'list-pages:watch',
    'webpack:watch',
    'sass:watch'
]);
