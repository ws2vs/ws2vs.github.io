const gulp = require('gulp');
const webpack = require('webpack-stream');
const getWebpackConfig = require('./webpack.config');
const del = require('del');

gulp.task('setNodeEnvToPrd', () => {
    return process.env.NODE_ENV = 'production';
});

gulp.task('setNodeEnvToDev', () => {
    return process.env.NODE_ENV = 'development';
});

gulp.task('clean', () => {
    return del.sync(['dist/**']);
});

gulp.task('copyCss', () => {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('dist/'));
});

gulp.task('pack', ['clean', 'copyCss'], () => {
    return gulp.src('src/index.js')
        .pipe(webpack(getWebpackConfig()))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['setNodeEnvToPrd', 'pack']);
gulp.task('watch', ['setNodeEnvToDev', 'pack']);

gulp.task('default', ['build']);