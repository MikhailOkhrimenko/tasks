module.exports = function (grunt) {

    grunt.initConfig({
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

    grunt.registerTask('default', []);
    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);

};