Команда для установки всех пакетов:
npm i gulp gulp-sass sass gulp-file-include gulp-clean gulp-server-livereload gulp-sourcemaps gulp-plumber gulp-notify gulp-group-css-media-queries --save-dev  

Описание пакетов:  
gulp - собственно Gulp  
gulp-sass - Сборка SASS / SCSS  
sass - Необходим для сборки SASS / SCSS  
gulp-file-include - Подключение файлов друг в друга. HTML include  
gulp-clean - Удаление файлов  
gulp-server-livereload - Сервер с автообновлением страницы  
gulp-sourcemaps - Исходные карты для CSS  
gulp-plumber - Фикс ошибок при сборке  
gulp-notify - Нотификации  
gulp-group-css-media-queries - Группировка CSS медиа запросов  

----------------------------------------------------------------------  

gulp.task() - определить задачу  
gulp.src() - взять исходные файлы (создать поток)  
pipe() - "закинуть в трубу" внутри которой применить плагин для обрботки файлов  
gulp.dest() - сохранить получившийся результат  
gulp.parallel() - запустить несколько задач параллельно  
gulp.series() - запустить несколько задач последовательно  
gulp.watch() - следить за файлами  

