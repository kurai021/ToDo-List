// create an instance of a db object for us to store the IDB data in
var db;

// create a blank instance of the object that is used to transfer data into
// the IDB. This is mainly for reference
var newItem = [
    {
        taskTitle: '',
        hours: 0,
        minutes: 0,
        day: 0,
        month: '',
        year: 0,
        notified: 'no'
    }
];

// all the variables we need for the app
var taskList = document.getElementById('task-list');

var taskForm = document.getElementById('task-form');
var title = document.getElementById('title');

var hours = document.getElementById('deadline-hours');
var minutes = document.getElementById('deadline-minutes');
var day = document.getElementById('deadline-day');
var month = document.getElementById('deadline-month');
var year = document.getElementById('deadline-year');
var priority = document.getElementById('priority');

var submit = document.getElementById('submit');
var mozL10n = 'mozL10n' in navigator ? navigator.mozL10n.get : function() {};

window.onload = function () {
    'use strict';
    var idb;
    console.log(mozL10n('AppIni'));
    // In the following line, you should include the prefixes of
    // implementations you want to test.
    idb = window.indexedDB ||
          window.mozIndexedDB ||
          window.webkitIndexedDB ||
          window.msIndexedDB;
    // DON'T use 'var indexedDB = ...' if you're not in a function.
    // Moreover, you may need references to some window.IDB* objects:
    window.IDBTransaction = window.IDBTransaction ||
                            window.webkitIDBTransaction ||
                            window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange ||
                         window.webkitIDBKeyRange ||
                         window.msIDBKeyRange;
    // (Mozilla has never prefixed these objects => no window.mozIDB*)


    // Let us open our database
    var request = idb.open('toDoList', 4);

    // Gecko-only IndexedDB temp storage option:
    // var request = idb.open('toDoList',
    //                        {version: 4, storage: 'temporary'});

    // these two event handlers act on the db being opened successfully, or not
    request.onerror = function (event) {
        console.log(mozL10n('ErrorLoBD'));
    };

    request.onsuccess = function (event) {
        console.log(mozL10n('SuccessLoBD'));

        // store the result of opening the database in the db variable.
        // This is used a lot below
        db = request.result;

        // Run the displayData() function to populate the task list with all
        // the to-do list data already in the IDB
        displayData();
    };

    // This event handles the event whereby a new version of the database needs
    // to be created
    // Either one has not been created before,
    // or a new version number has been submitted via the window.indexedDB.open
    // line above. It is only implemented in recent browsers
    request.onupgradeneeded = function (event) {
        // Heads up! Shadows global db variable
        var db = event.target.result;

        db.onerror = function (event) {
            console.log(mozL10n('ErrorLoBD'));
        };

        // Create an objectStore for this database

        var objectStore = db.createObjectStore('toDoList', {
            keyPath: 'taskTitle'
        });

        // define what data items the objectStore will contain

        objectStore.createIndex('hours', 'hours', {
            unique: false
        });
        objectStore.createIndex('minutes', 'minutes', {
            unique: false
        });
        objectStore.createIndex('day', 'day', {
            unique: false
        });
        objectStore.createIndex('month', 'month', {
            unique: false
        });
        objectStore.createIndex('year', 'year', {
            unique: false
        });

        objectStore.createIndex('priority', 'priority', {
            unique: false
        });

        objectStore.createIndex('notified', 'notified', {
            unique: false
        });

        console.log(mozL10n('ObjectStorage'));
    };

    function displayData() {
        $('#boot').fadeOut('slow');
        // first clear the content of the task list so
        // that you don't get a huge long list of duplicate stuff each time
        // the display is updated.
        taskList.innerHTML = '';

        var getSuffix = function(day) {
            var daySuffix;
            // check which suffix the deadline day of the month needs
            if (day === 1 || day === 21 || day === 31) {
                daySuffix = 'st';
            } else if (day === 2 || day === 22) {
                daySuffix = 'nd';
            } else if (day === 3 || day === 23) {
                daySuffix = 'rd';
            } else {
                daySuffix = 'th';
            }
            return daySuffix;
        };

        var buildListItem = function(cursor) {
            var listItem = document.createElement('li');
            var priority = cursor.value.priority;
            var notified = cursor.value.notified;

            // build the to-do list entry and put it into the list item
            listItem.innerHTML = '<p class="tasktitle">' +
                                 cursor.value.taskTitle + '</p>' +
                                 '<p>' + cursor.value.hours + ':' +
                                 cursor.value.minutes + ', ' +
                                 cursor.value.month + ' ' +
                                 cursor.value.day+getSuffix(cursor.value.day) +
                                 ' ' + cursor.value.year + '.' + '</p>';

            if((priority === 'baja') && (notified === 'no')){
                listItem.style.borderLeft = '5px solid green';
            }
            else if((priority === 'media') && (notified === 'no')){
                listItem.style.borderLeft = '5px solid yellow';
            }
            else if((priority === 'alta') && (notified === 'no')){
                listItem.style.borderLeft = '5px solid red';
            }
            else {
                listItem.style.borderLeft = '5px solid gray';
                listItem.setAttribute('aria-disabled', 'true');
            }

            var hashTagRE = /(^|\W)(#[a-z_\d][\w-ñ&]*)/ig;
            var eventRE = /(^|\W)(![a-z_\d][\w-ñ&]*)/ig;
            var contactRE = /(^|\W)(@[a-z_\d][\w-ñ& ]*)/ig;
            listItem.innerHTML = listItem.innerHTML.replace(hashTagRE,
                                 '$1<span class="hashtag-text">$2</span>');
            listItem.innerHTML = listItem.innerHTML.replace(eventRE,
                                 '$1<span class="event-text">$2</span>');
            listItem.innerHTML = listItem.innerHTML.replace(contactRE,
                                 '$1<span class="contact-text">$2</span>');
            return listItem;
        };

        // Open our object store and then get a cursor list of all the different
        // data items in the IDB to iterate through
        var objectStore = db.transaction('toDoList').objectStore('toDoList');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            // if there is still another cursor to go, keep runing this code
            if (cursor) {
                // create a list item to put each data item inside
                // when displaying it
                var day = cursor.value.day;
                var daySuffix = getSuffix(day);
                var listItem = buildListItem(cursor);
                listItem.setAttribute('class', 'listitem');

                // put the item item inside the task list
                taskList.appendChild(listItem);

                // create a delete button inside each list item,
                // giving it an event handler so that it runs the deleteButton()
                // function when clicked
                var deleteButton = document.createElement('button');
                listItem.appendChild(deleteButton);
                // here we are setting a data attribute on our delete button
                // to say what task we want deleted if it is clicked!
                deleteButton.innerHTML = 'Borrar';
                deleteButton.setAttribute('data-task', cursor.value.taskTitle);
                deleteButton.setAttribute('class', 'danger');
                deleteButton.setAttribute('data-l10n-id', 'DeleteBtn');
                deleteButton.onclick = function (event) {
                    deleteItem(event);
                };

                // continue on to the next item in the cursor
                cursor.continue();

                // if there are no more cursor items to iterate through,
                // say so, and exit the function
            } else {
                console.log(mozL10n('AllEntries'));
            }
        };
    }

    function addData(e) {
        // we don't want the form to submit in the conventional way
        e.preventDefault();

        // Stop the form submitting if any values are left empty.
        // This is just for browsers that don't support the HTML5 form
        // required attributes
        if (title.value === '' ||
            hours.value === null ||
            minutes.value === null ||
            day.value === '' ||
            month.value === '' ||
            year.value === null ||
            priority.value === null) {
            window.alert(mozL10n('DataEForm'));
            return;
        } else {

            // grab the values entered into the form fields and
            // store them in an object ready for being inserted into the IDB
            var newItem = [
                {
                    taskTitle: title.value,
                    hours: hours.value,
                    minutes: minutes.value,
                    day: day.value,
                    month: month.value,
                    year: year.value,
                    priority: priority.value,
                    notified: 'no'
                }
      ];

            // open a read/write db transaction, ready for adding the data
            var transaction = db.transaction(['toDoList'], 'readwrite');

            // report on the success of opening the transaction
            transaction.oncomplete = function (event) {
                console.log(mozL10n('TransactOpen'));
            };

            transaction.onerror = function (event) {
                window.alert(mozL10n('DuplicateData'));
            };

            // call an object store that's already been added to the database
            var objectStore = transaction.objectStore('toDoList');
            // add our newItem object to the object store
            var request = objectStore.add(newItem[0]);
            request.onsuccess = function (event) {

                // report the success of our new item going into the database
                window.alert(mozL10n('NewTaskM'));

                // build a date object out of the user-provided time and
                // date information from the form submission
                var myAlarmDate = new Date(month.value + ' ' + day.value +
                                           ', ' + year.value + ' ' +
                                           hours.value + ':' + minutes.value +
                                           ':00' + ' ' + priority.value);

                // The data object can contain any arbitrary data
                // you want to pass to the alarm.
                // Here I'm passing the name of the task
                var data = {
                    task: title.value
                };

                // The 'ignoreTimezone' string makes the alarm ignore timezones
                // and always go off at the same time wherever you are
                var request = navigator.mozAlarms.add(myAlarmDate,
                    'ignoreTimezone', {type: 'yolo'} + data);

                request.onsuccess = function () {
                    console.log(mozL10n('AlarmActivated'));
                };

                request.onerror = function () {
                    console.log(mozL10n('ErrorOcurred') + ' ' +
                                this.error.name);
                };


                // clear the form, ready for adding the next entry
                title.value = '';
                hours.value = null;
                minutes.value = null;
                day.value = '01';
                month.value = 'January';
                year.value = 2020;
                priority.value = null;

            };

        }

        // update the display of data to show the newly added item,
        // by running displayData() again.
        displayData();
    }

    // give the form submit button an event listener so that
    // when the form is submitted the addData() function is run
    taskForm.addEventListener('submit', addData, false);

    function deleteItem(event) {
        // retrieve the name of the task we want to delete
        var dataTask = event.target.getAttribute('data-task');

        // delete the parent of the button, which is the list item,
        // so it no longer is displayed
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);

        // open a database transaction and delete the task,
        // finding it by the name we retrieved above
        var request = db.transaction(['toDoList'], 'readwrite')
                        .objectStore('toDoList').delete(dataTask);

        // report that the data item has been deleted
        request.onsuccess = function (event) {
            window.alert(mozL10n('TaskDel1') + ' ' + dataTask + ' ' +
                         mozL10n('TaskDel2'));
        };

    }

    // this function checks whether the deadline for each task is up or not,
    // and responds appropriately
    function checkDeadlines() {

        // grab the time and date right now
        var now = new Date();

        // from the now variable, store the current minutes, hours,
        // day of the month (getDate is needed for this, as getDay
        // returns the day of the week, 1-7), month,
        // year (getFullYear needed; getYear is deprecated,
        // and returns a weird value that is not much use to anyone!)
        // and seconds
        var minuteCheck = now.getMinutes();
        var hourCheck = now.getHours();
        var dayCheck = now.getDate();
        var monthCheck = now.getMonth();
        var yearCheck = now.getFullYear();

        // again, open a transaction then a cursor to iterate through all
        // the data items in the IDB
        var objectStore = db.transaction(['toDoList'], 'readwrite')
                            .objectStore('toDoList');
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                var monthNumber;
                var monthName = cursor.value.month;
                // convert the month names we have installed in the IDB
                // into a month number that JavaScript will understand.
                // The JavaScript date object creates month values as a number
                // between 0 and 11.

                switch (monthName) {
                    case 'January':
                    case 'Enero':
                    case 'Januar':
                        monthNumber = 0;
                        break;
                    case 'February':
                    case 'Febrero':
                    case 'Februar':
                        monthNumber = 1;
                        break;
                    case 'March':
                    case 'Marzo':
                    case 'März':
                        monthNumber = 2;
                        break;
                    case 'April':
                    case 'Abril':
                        monthNumber = 3;
                        break;
                    case 'May':
                    case 'Mayo':
                    case 'Mai':
                        monthNumber = 4;
                        break;
                    case 'June':
                    case 'Junio':
                    case 'Juni':
                        monthNumber = 5;
                        break;
                    case 'July':
                    case 'Julio':
                    case 'Juli':
                        monthNumber = 6;
                        break;
                    case 'August':
                    case 'Agosto':
                        monthNumber = 7;
                        break;
                    case 'September':
                    case 'Septiembre':
                        monthNumber = 8;
                        break;
                    case 'October':
                    case 'Octubre':
                    case 'Oktober':
                        monthNumber = 9;
                        break;
                    case 'November':
                    case 'Noviembre':
                        monthNumber = 10;
                        break;
                    case 'December':
                    case 'Diciembre':
                    case 'Dezember':
                        monthNumber = 11;
                        break;
                    default:
                        window.alert(mozL10n('IncorrectMonth'));
                }

                // check if the current hours, minutes, day, month and year
                // values match the stored values for each task in the IDB.
                // The + operator in this case converts numbers with leading
                // zeros into their non leading zero equivalents, so e.g.
                // 09 -> 9. This is needed because JS date number values never
                // have leading zeros, but our data might.
                // The secondsCheck = 0 check is so that you don't get duplicate
                // notifications for the same task.
                // The notification will only appear when the seconds is 0,
                // meaning that you won't get more than one notification
                // for each task
                if (+(cursor.value.hours) === hourCheck &&
                    +(cursor.value.minutes) === minuteCheck &&
                    +(cursor.value.day) === dayCheck &&
                    monthNumber === monthCheck &&
                    cursor.value.year === yearCheck &&
                    cursor.value.notified === 'no') {

                    // If the numbers all do match, run the createNotification()
                    // function to create a system notification
                    createNotification(cursor.value.taskTitle);
                }

                // move on and perform the same deadline check on the next
                // cursor item
                cursor.continue();
            }
        };
    }

    // function for creating the notification
    function createNotification(title) {
        var tts = 'http://translate.google.com/translate_tts?tl=' +
                  navigator.mozL10n.language.code +
                  '&q=' + navigator.mozL10n.get('HourOf') + title;
        var audio = new Audio(tts);
        audio.mozAudioChannelType = 'alarm';
        audio.volume.alarm = 15;

        // Let's check if the browser supports notifications
        if (!('Notification' in window)) {
            console.log(mozL10n('NoNotifications'));
        }
        // Let's check if the user is okay to get some notification
        else {
            var Notification = window.Notification;
            if (Notification.permission === 'granted') {
                // If it's okay let's create a notification
                var img = 'https://dl.dropboxusercontent.com/u/56345835/' +
                          '128x128.png';
                var text = mozL10n('HourOf') + ' ' + '"' + title + '"';
                var notification = new Notification('To do list', {
                    body: text,
                    icon: img
                });
                window.navigator.vibrate(2000);
                audio.play();
            }
            // Otherwise, we need to ask the user for permission
            // Note, Chrome does not implement the permission static property
            // So we have to check for NOT 'denied' instead of 'default'
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    // Whatever the user answers,
                    // we make sure Chrome stores the information
                    if (!('permission' in Notification)) {
                        Notification.permission = permission;
                    }
                    // If the user is okay, let's create a notification
                    if (permission === 'granted') {
                        var img = 'https://dl.dropboxusercontent.com/' + 
                                  'u/56345835/128x128.png';
                        var text = mozL10n('HourOf') + ' ' + '"' + title + '"';
                        var notification = new Notification('To do list', {
                            body: text,
                            icon: img
                        });
                        window.navigator.vibrate(2000);
                        audio.play();
                    }
                });
            }
        }
        // At last, if the user already denied any notification, and you
        // want to be respectful there is no need to bother him any more.
        // now we need to update the value of notified to 'yes'
        // in this particular data object, so the notification won't be set off
        // on it again first open up a transaction as usual
        var objectStore = db.transaction(['toDoList'], 'readwrite')
                            .objectStore('toDoList');
        // get the to-do list object that has this title as it's title
        var request = objectStore.get(title);
        request.onsuccess = function () {
            // grab the data object returned as the result
            var data = request.result;
            // update the notified value in the object to 'yes'
            data.notified = 'yes';
            // create another request
            // that inserts the item back into the database
            var requestUpdate = objectStore.put(data);
            // when this new request succeeds,
            // run the displayData() function again to update the display
            requestUpdate.onsuccess = function () {
                displayData();
            };
        };
    }
    // using a setInterval to run the checkDeadlines() function every second
    setInterval(checkDeadlines, 1000);

};
