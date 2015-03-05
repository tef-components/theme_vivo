module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      default: {
        options: {
          optimization: 2
        },
        files: {
          'css/theme.movistar.css': 'less/theme.less'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'css/*.css'
      },
    },

    concat: {
      default: {
       src: [
          '../icons/icons.css',
          'css/theme.movistar.css',
        ],
        dest: 'css/theme.movistar.css'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/theme.movistar.min.css': 'css/theme.movistar.css'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'less',
    'autoprefixer',
    'concat',
    'cssmin'
  ]);
};
