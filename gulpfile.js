import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassPackage from "gulp-sass";
import * as sassCompiler from "sass";
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
// import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import webpack from 'webpack-stream';

const sass = sassPackage(sassCompiler);

gulp.task('server', () => {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', () => {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/*.js", gulp.parallel('scripts'));
});

gulp.task('html', () => {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', () => {
    console.log('Copying JavaScript files...');
    return gulp.src("src/js/**/*.js")
        .pipe(webpack().on("error", () => {
            this.emit("end");
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// gulp.task('fonts', () => {
//     return gulp.src("src/fonts/**/*")
//         .pipe(gulp.dest("dist/fonts"));
// });

// gulp.task('icons', () => {
//     return gulp.src("src/icons/**/*")
//         .pipe(gulp.dest("dist/icons"));
// });

// gulp.task('images', () => {
//     return gulp.src("src/img/**/*")
//         // .pipe(imagemin())
//         .pipe(gulp.dest("dist/img"));
// });

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'html'));
