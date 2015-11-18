$(document).ready(function(){
    'use strict';
    // Drawer Building Blocks control
    var toHome = document.getElementById('tohome');
    var toHelp = document.getElementById('tohelp');
    var toIndex = document.getElementById('toindex');
    var toTaskList = document.getElementById('totasklist');
    var aboutApp = document.getElementById('aboutapp');
    var index = document.getElementById('index');
    var taskList = document.getElementById('tasklist');

    toHelp.addEventListener('click', function() {
        aboutApp.className = 'current skin-dark';
        aboutApp.setAttribute('data-position', 'current');
        index.setAttribute('data-position', 'right');
        taskList.setAttribute('data-position', 'left');
    });

    toHome.addEventListener('click', function() {
        aboutApp.className = 'left skin-dark';
        aboutApp.setAttribute('data-position', 'left');
        index.setAttribute('data-position', 'current');
        taskList.setAttribute('data-position', 'right');
    });

    // Change views
    toTaskList.addEventListener('click', function() {
        taskList.className = 'current skin-dark';
        taskList.setAttribute('data-position', 'current');
        index.setAttribute('data-position', 'right');
        aboutApp.setAttribute('data-position', 'right');
    });

    toIndex.addEventListener('click', function() {
        taskList.className = 'right skin-dark';
        taskList.setAttribute('data-position', 'right');
        index.setAttribute('data-position', 'current');
        aboutApp.setAttribute('data-position', 'left');
    });

//Google Calendar, Live Calendar and CalDAV support
//document.querySelector('#registerGoogle').addEventListener(
  //  'click', function () {
  //      document.querySelector('#googlecalendar-section')
  //              .setAttribute('class', 'visible');
  //  });

//document.querySelector('#cancelgoogle').addEventListener
  //  'click', function () {
  //      document.querySelector('#googlecalendar-section')
  //              .setAttribute('class', 'notvisible');
  //  }); 
});
