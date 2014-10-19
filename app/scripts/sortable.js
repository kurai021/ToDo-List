var tasklist = document.getElementById('task-list');
new Sortable(tasklist,{
    group: "words",
    handle: ".tasktitle",
    ghostClass: ".sortable-ghost",
    store: {
        /**
         * Get the order of elements. Called once during initialization.
         * @param   {Sortable}  sortable
         * @retruns {Array}
         */
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group);
            return order ? order.split('|') : [];
        },

        /**
         * Save the order of elements. Called every time at the drag end.
         * @param {Sortable}  sortable
         */
        set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group, order.join('|'));
        }
    }
});