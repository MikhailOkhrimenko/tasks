module.exports = function (grunt) {

    grunt.initConfig({
        // gettext - localization
        nggettext_extract: {
            pot: {
                files: {
                    'app/lng/po/views.pot': ['**/*.html']
                }
            }
        },
        nggettext_compile: {
            all: {
                options: {
                    module: 'mainApp'
                },
                files: {
                    'app/js/Main/translation/translations.js': ['**/*.po']
                }
            }
        },
        // less
        less: {
            development: {
                options: {
                    compress: true,
                    optimization: 2
                },
                files: {
                    "app/css/style.css": "app/less/style.less" // destination file and source file
                }
            }
        },
        // server localhost
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['**/*']
            },
            //watch less
            styles: {
                files: ['app/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: false,
                    middleware: function (connect) {
                        return [
                            connect.static('.'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            )
                            //connect.static(config.appConfig.app)
                        ];
                    }
                }
            }
        },
        //Build project
        clean: ['build'],
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./app",
                    removeCombined: true,
                    mainConfigFile: "./app/boot.js",
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    out: "build/js/app.build.js",
                    name: 'boot'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-angular-gettext');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', []);
    grunt.registerTask('gettext', ['nggettext_extract']);
    grunt.registerTask('gettext-compile', ['nggettext_compile']);
    grunt.registerTask('less-compile', ['less']);
    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);
    grunt.registerTask('build', [
        'clean',
        'requirejs'
    ]);

};