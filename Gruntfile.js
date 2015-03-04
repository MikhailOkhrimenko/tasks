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
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./app",
                    removeCombined: true,
                    mainConfigFile: "./app/boot.js",
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    out: "build/app/js/app.build.min.js",
                    name: 'boot'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'app/views/*/**',
                            //'app/css/**',
                            'favicon.png',
                            'index.html'
                        ],
                        dest: 'build/'
                    },
                    {
                        expand: false,
                        src: 'bower_components/requirejs/require.js',
                        dest: 'build/app/lib/js/require.js'
                    }
                ]
            },
            css:
                {
                    expand: true,
                    cwd: '.tmp/concat',
                    src: '**/*',
                    dest: 'build/'
                }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/app/img'
                }]
            }
        },
        useminPrepare: {
            html: ['build/index.html'],
            options: {
                root: '.',
                dest: 'build'
            }
        },
        usemin: {
            html: ['build/index.html'],
            options: {
                root: '.',
                dest: 'build'
            }
        },
        replace: {
            appbuildjs: {
                src: ['build/index.html'],
                overwrite: true,
                replacements: [
                    {
                        from: 'bower_components/requirejs/require.js',
                        to: 'app/lib/js/require.js'
                    },
                    {
                        from: 'app/boot',
                        to: 'app/js/app.build.min'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                        'build/index.html': 'build/index.html',
                        'build/app/views/Auth/login.html': 'build/app/views/Auth/login.html',
                        'build/app/views/signUp/signup.html': 'build/app/views/signUp/signup.html',
                        'build/app/views/signUp/terms.html': 'build/app/views/signUp/terms.html',
                        'build/app/views/Tasks/tasks.html': 'build/app/views/Tasks/tasks.html'
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'zipped-build/site.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'build/',
                        src: ['**']
                    }
                ]
            }
        },
        clean: [
            'build',
            '.tmp'
        ]
        // End build
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-angular-gettext');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', []);
    grunt.registerTask('gettext', ['nggettext_extract']);
    grunt.registerTask('gettext-compile', ['nggettext_compile']);
    grunt.registerTask('less-compile', ['less']);
    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);
    grunt.registerTask('build', [
        'requirejs',
        'copy:main',
        'imagemin',
        'useminPrepare',
        'concat',
        //'cssmin',
        'usemin',
        'copy:css',
        'replace',
        'htmlmin',
        'compress',
        'clean'
    ]);

};