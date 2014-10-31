$('#task-list').searcher({
    itemSelector: ".listitem",
    textSelector: "p",
    inputSelector: "#task-search",
    toggle: function(item, containsText) {
        // use a typically jQuery effect instead of simply showing/hiding the item element
        if (containsText)
            $(item).fadeIn();
        else
            $(item).fadeOut();
    }
});