# grunt-firefoxos

Firefox OS tasks for [Grunt](http://gruntjs.com/).

You may also be interested in
[generator-firefoxos](https://github.com/pdi-innovation/generator-firefoxos),
**a Firefox OS app generator** for [Yeoman](http://www.yeoman.io).

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to
check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and
use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
$ npm install grunt-firefoxos --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-firefoxos');
```

## The tasks

### Install an app (`ffospush`)

This task will push the app to a Firefox OS device, installing it like
if it were an app from the Marketplace.

```js
grunt.initConfig({
  ffospush: {
    app: {
      appId: 'your-app-id', // unique app identifier
      zip: 'application.zip' // zip with your app
    }
  },
});
```

Then run the task with:

```shell
$ grunt ffospush
```

Note that you can have several targets for this task:

```js
grunt.initConfig({
  ffospush: {
    rc: {
      appId: 'your-app-rc',
      zip: 'application-rc.zip'
    },
    stable: {
      appId: 'your-app-stable',
      zip: 'application-stable.zip'
    }
  }
});
```

### Reboot the device (`ffosreset`)

You can reboot B2G with `ffosreset`. Note that this task does not have
targets or config options.

Usage:

```shell
$ grunt ffosreset
```

### Output the log (`ffoslog`)

This will output the device's log (the content from `adb logcat`). This
task does not have targets or config options.


Usage:

```shell
$ grunt ffoslog
```

## Release History

- **26-June-2013**: First version.

