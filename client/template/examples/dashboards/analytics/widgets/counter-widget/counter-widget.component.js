(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .component('counterWidget', {
            templateUrl: 'template/examples/dashboards/analytics/widgets/counter-widget/counter-widget.tmpl.html',
            controllerAs: 'vm',
            bindings: {
                title: '@',
                count: '<',
                icon: '@',
                background: '@',
                color: '@'
            }
        });
})();
