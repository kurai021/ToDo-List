$(document).ready(function(){
// Drawer Building Blocks control

document.querySelector('#tohelp').addEventListener('click', function () {
    document.querySelector('#aboutapp').className = 'current';
    document.querySelector('#aboutapp').className = 'skin-dark';
    document.querySelector('#aboutapp').setAttribute('data-position', 'current');
    document.querySelector('#index').setAttribute('data-position', 'right');
    document.querySelector('#tasklist').setAttribute('data-position', 'left');
});

document.querySelector('#tohome').addEventListener('click', function () {
    document.querySelector('#aboutapp').className = 'left';
    document.querySelector('#aboutapp').className = 'skin-dark';
    document.querySelector('#aboutapp').setAttribute('data-position', 'left');
    document.querySelector('#index').setAttribute('data-position', 'current');
    document.querySelector('#tasklist').setAttribute('data-position', 'right');
});

// Change views
document.querySelector('#totasklist').addEventListener('click', function () {
    document.querySelector('#tasklist').className = 'current';
    document.querySelector('#tasklist').className = 'skin-dark';
    document.querySelector('#tasklist').setAttribute('data-position', 'current');
    document.querySelector('#index').setAttribute('data-position', 'right');
    document.querySelector('#aboutapp').setAttribute('data-position', 'right');
    
});

document.querySelector('#toindex').addEventListener('click', function () {
    document.querySelector('#tasklist').className = 'right';
    document.querySelector('#tasklist').className = 'skin-dark';
    document.querySelector('#tasklist').setAttribute('data-position', 'right');
    document.querySelector('#index').setAttribute('data-position', 'current');
    document.querySelector('#aboutapp').setAttribute('data-position', 'left');
});

//Google Calendar, Live Calendar and CalDAV support
document.querySelector('#registerGoogle').addEventListener('click', function () {
    document.querySelector('#googlecalendar-section').setAttribute('class', 'visible');
});

document.querySelector('#cancelgoogle').addEventListener('click', function () {
    document.querySelector('#googlecalendar-section').setAttribute('class', 'notvisible');
}); 
});