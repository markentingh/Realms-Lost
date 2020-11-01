var gulp = require('gulp'),
    concat = require('gulp-concat');

var paths = {
    scripts:'js/'
};
paths.working = {
    js: {
        engine:[
            paths.scripts + 'rnd.js',
            paths.scripts + 'nav.js',
            paths.scripts + 'world.js',
            paths.scripts + 'character.js',
            paths.scripts + 'party.js',
            paths.scripts + 'engine.js'
        ]
    }
};

paths.compiled = {
    js:'dist/rl.js'
}

gulp.task('js', function () {
    var p = gulp.src(paths.working.js.engine, { base: '.' })
        .pipe(concat(paths.compiled.js));
    return p.pipe(gulp.dest('.', { overwrite: true }));
});

//watch task
gulp.task('watch', function () {
    //watch platform JS
    gulp.watch(paths.working.js.engine, gulp.series('js'));
});