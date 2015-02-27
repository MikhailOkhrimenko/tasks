module.exports = function (grunt) {

    grunt.initConfig({
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
                    'app/js/translation/translations.js': ['**/*.po']
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['**/*']
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
                            ),
                            //connect.static(config.appConfig.app)
                        ];
                    }
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('default', []);
    grunt.registerTask('gettext', [
        'nggettext_extract'
    ]);
    grunt.registerTask('gettext-compile', [
        'nggettext_compile'
    ]);
    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);

};