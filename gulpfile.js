var gulp = require('gulp');
var bs = require('browser-sync').create();


gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch([
    '*',
    'views/login/*',
    'views/dashboard/*',
    'views/employee/*'
]).on('change', bs.reload);