// https://www.linkedin.com/pulse/use-npm-instead-bower-gulp-grunt-visual-studio-aspnet-naghizadeh/

var directory = "wwwroot/lib/";

var copy = require('recursive-copy');
var del = require('del');
var baseSrc = "node_modules/";

process.once('beforeExit', function () {
    eval(process.argv[2]);
});

function copyLib() {

    var fs = require('fs')
    var json = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
    var deps = json.dependencies
    var src = "";
    var dest = "";
    //glob/minimatch for filter
    var options = {
        overwrite: true,
        expand: false,
        dot: false,
        junk: false,
        filter: [
//            '**/*'
            '**/*.js',
            '**/*.css',
            '**/*.eot',
            '**/*.svg',
            '**/*.svg',
            '**/*.woff',
            '**/*.woff2',
            '**/*.png',
            '!**/src/**',
            '!**/examples/**',
            '!**/demo/**',
            '!**/nuget/**',
            '!**/test/**',
            '!**/cross - domain/**',
            '!**/doc/**',
            '!**/grunt/**',
            '!**/gulpfile.js',
            '!**/gruntfile.js',
            '!**/Gulpfile.js',
            '!**/Gruntfile.js'
        ]
    };
    for (var prop in deps) {
        console.log("Prepping Scripts for: " + prop);
        src = baseSrc + prop + "/"
        dest = directory + prop + "/"
        copy(src, dest, options, function (error, results) {
            if (error) {
                console.error('Copy failed: ' + error);
            } else {
                console.info('Copied ' + results.length + ' files');
            }
        });
    }
};

function cleanLib() {
    return del("wwwroot/lib/");
};