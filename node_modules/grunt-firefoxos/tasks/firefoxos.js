'use strict';

module.exports = function (grunt) {
  var ffos = require('node-firefoxos-cli');
  var path = require('path');

  grunt.registerMultiTask('ffospush', 'Pushes an app to the device',
  function () {
    var done = this.async();
    var src = path.join(process.cwd(), this.data.zip);

    ffos.installPackagedApp(this.data.appId, src, function (err) {
      if (err) {
        console.log('ERROR installing app'.red);
      }
      else {
        console.log('App installed');
      }
      done();
    });
  });

  grunt.registerTask('ffosreset', 'Resets B2G', function () {
    var done = this.async();
    ffos.resetB2G(function () {
      console.log('B2G process reseted');
      done();
    });
  });

  grunt.registerTask('ffoslog', 'Outputs the log', function () {
    this.async();
    ffos.logcat();
  });
};

