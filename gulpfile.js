var gulp = require('gulp'),
    concat = require('gulp-concat');

var paths = {
    scripts:'js/',
    utility:'js/utility/',
    names: 'js/names/',
    conversations:'js/conversations/'
};
paths.working = {
    js: {
        engine:[
            paths.names + 'names.js',
            paths.names + 'countries.js',
            paths.utility + 'rnd.js',
            paths.utility + 'str.js',
            paths.conversations + 'menu.js',
            paths.conversations + 'debug.js',
            paths.conversations + 'start.js',
            paths.scripts + 'world.js',
            paths.scripts + 'character.js',
            paths.scripts + 'party.js',
            paths.scripts + 'story.js',
            paths.scripts + 'game.js',
            paths.scripts + 'chat.js'
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