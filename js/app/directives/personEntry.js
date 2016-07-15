function PersonEntry() {
    return {

        template: [
            '<a href="#" class="list-group-item">',
            '<h4 class="list-group-item-heading"> {{ person.name }}</h4>',
            '<p class="list-group-item-text"> {{ person.address }} </p>',
            '<p class="list-group-item-text"> {{ person.city }}, ',
            '{{ person.state }} {{ person.zip }}</p>',
            '</a>'
        ].join(''),

			};
}

angular
    .module('app')
    .directive('personEntry', PersonEntry);
