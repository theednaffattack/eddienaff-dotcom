/*
	== HOW TO ORGANIZE YOUR GULP.JS DEVELOPMENT BUILDS FOR MULTIPLE ENVIRONMENTS ==
	
	From: https://www.freshconsulting.com/how-to-organize-your-gulp-js-development-builds-for-multiple-environments/
	Date Implemented: 3/10/2016
	Date Edited: --

*/


var env = gutil.env.env || 'development';
var reqDir = require('require-dir');
var tasks = reqDir('tasks/');

/*

	== Remove Hard Coded Paths and Put them into a Separate Object ==

	The first part of the config file is to put all your path information into a
	single object. Why? So you can see at a glance where all your source and
	destination files and folders are located. Also, it makes it easy to change
	the build configuration later if you decide to move files around:

*/

var paths = {
	src: {
		js: 'app.js', constants: 'constants.js', html: 'index.html', css: 'style.css'
	}, dest: {
		js: 'dist/', constants: 'dist/', html: 'dist/', css: 'dist/'
	}
};

/* 

	== Store Application Constants for Each Environment in Their Own Objects ==

	The constants are static variables injected into your application. This may be
	a global variable that gets added to your compiled javascript, or, in the case
	of a project Fresh recently worked on, an Angular constant. These constants
	will typically hold variables set during the build process, such as the API
	host. We’ll have an object containing the constants we want for each environment:

*/
var constants = {
    default: {
        apiHost: ''
    },
    development: {
        apiHost: 'http://localhost:9050'
    },
    staging: {
        apiHost: 'http://staging.example.com/api/'
    },
    production: {
        apiHost: 'http://example.com/api/'
    }
};

/*

	== Create an Object for Toggling Plugins ==

	Next, create an object to specify which plugins to toggle on or off for each
	environment build. In our experience, it’s easier to just leave the plugins off
	by default. We can then opt-in to specific plugins based on environment. This
	is used in conjunction with the gulp-if plugin to check each plugin’s run value
	in each task. Alternatively, we can pipe through to gulp-util noop function:

*/

var run = {
    default: {
        js: {
            uglify: false
        },
        css: {
            cssnano: false
        }
    },
    development: {
        js: {
            uglify: false
        },
        css: {
            cssnano: false
        }
    },
    staging: {
        js: {
            uglify: true
        },
        css: {
            cssnano: true
        }
    },
    production: {
        js: {
            uglify: true
        },
        css: {
            cssnano: true
        }
    }
};

/*
	==Store Plugin Options Into Its Own Object==

	We extract our plugin configuration options out of the gulp pipes and into a
	separate object. Why? It makes our gulp task dynamic by allowing us to pass in
	different options to the plugins, allowing different options per environment, 
	per plugin. The result: our code stays DRY because we don’t need to create
	duplicate tasks per environment. We simply alter the config objects that get
	passed into the plugins:

 */
var plugin = {
    default: {
        js: {
            uglify: {
                mangle: true
            }
        }
    },
    development: {
        js: {
            uglify: {
                mangle: false
            }
        }
    },
    staging: {
        js: {
            uglify: {
                mangle: true
            }
        }
    },
    production: {
        js: {
            uglify: {
                mangle: true
            }
        }
    }
};

/*

	== Merge Environment-Specific Options with Default Options ==

	Here is where we merge the environment-specific run config with the default run
	config, and the environment-specific plugin options with our default plugin
	options. We’ll also merge our environment-specific constants with our default
	constants. For convenience, we’ll employ the lodash utility library for its
	merge function. Lodash also allows a deep merge of the environment-specific
	objects with the default objects. Finally, we’ll attach these objects to
	module.exports, which will give our tasks access to the config:

*/

var runOpts = _.merge({}, run.default, run[env]);
var pluginOpts = _.merge({}, plugin.default, plugin[env]);
var constantsOpts = _.merge({}, constants.default, constants[env]);

module.exports.paths = paths;
module.exports.constants = constantsOpts;
module.exports.run = runOpts;
module.exports.plugin = pluginOpts;

/*

	== Use the Config Object in Tasks ==

	Now that you have your configuration objects exported, you can use them in
	tasks. Check the run values to determine if the stream should be piped to the
	corresponding plugin. If the run value is false, it will be piped through. You
	can pass in the plugin options to the corresponding plugins:

*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var config = require('./config');

gulp.task('js', function() {
    return gulp
        .src(config.paths.src.js)
        .pipe(config.run.js.uglify ? uglify(config.plugin.js.uglify) : gutil.noop())
        .pipe(gulp.dest(config.paths.dest.js));
});

/*

	== Auto-generate the Constants File ==

	To get the constants into the application, you can generate a file using the
	gulp-file plugin. Read in the constants object from the configuration and
	generate the code for the constants file. The benefit of this is that any time
	you add a new constant, all you have to do is add it to the config and the
	constants module will automatically be generated:

*/

var gulp = require('gulp');
var file = require('gulp-file');
var config = require('./config');

gulp.task('constants', function() {
    var constantsObjString, codeString, key, value;
    constantsObjString = '{';
    for (key in config.constantsOpts) {
        value = config.constantsOpts[key];
        if (typeof value === 'string') {
            value = '\'' + value + '\'';
        }
        constantsObjString += '\n ' + key + ': ' + value + ',';
    }
    // Remove the last comma
    constantsObjString = constantsObjString.substring(0, constantsObjString.length - 1);
    constantsObjString += '\n }';
    codeString = ';(function(){' +
        '\n angular.module(\'Constants\', [])' +
        '\n .constant(\'Constants\', ' + constantsObjString + ');' +
        '\n})();';
    return file('constants.js', codeString, { src: true })
        .pipe(gulp.dest(config.paths.dest.js));
});

/*

	== Run Your Build ==

	Now you can pass in the environment for your build. The script will set the
	configuration for all your tasks based on the environment passed in. If no
	environment is passed in, it will default to development, or whatever you’ve set
	as the default:

	gulp build --env=production

*/
