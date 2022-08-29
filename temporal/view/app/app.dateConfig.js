(function() {
	'use strict';

	angular
		.module('app')
		.config(function($mdDateLocaleProvider) {

		    // Example of a French localization.
		    $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Noviembre','Diciembre'];
		    $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar','Abr','May','Jun','Jul','Ago','Sep','Nov','Dic'];
		    $mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];
		    $mdDateLocaleProvider.shortDays = ['D','L','M','X','J','V','S'];

		    // Can change week display to start on Monday.
		    $mdDateLocaleProvider.firstDayOfWeek = 1;

		    // Optional.
		    // $mdDateLocaleProvider.dates = [1, 2, 3, 4, 5, 6, ];

		    // Example uses moment.js to parse and format dates.
		    // $mdDateLocaleProvider.parseDate = function(dateString) {
		    //   var m = moment(dateString, 'L', true);
		    //   return m.isValid() ? m.toDate() : new Date(NaN);
		    // };

		    // $mdDateLocaleProvider.formatDate = function(date) {
		    //   var m = moment(date);
		    //   return m.isValid() ? m.format('L') : '';
		    // };
		    $mdDateLocaleProvider.parseDate = function(dateString) {
			    var m = moment(dateString, 'DD/MM/YYYY', true);
			    return m.isValid() ? m.toDate() : new Date(NaN);
			};
		    $mdDateLocaleProvider.formatDate = function(date) {
		    	var m = moment(date).locale('es').format('DD/MM/YYYY');
			    return date ? m : '';
			};
			  
			

		    $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
		      return $mdDateLocaleProvider.shortMonths[date.getMonth()] + ' ' + date.getFullYear();
		    };

		    // In addition to date display, date components also need localized messages
		    // for aria-labels for screen-reader users.

		    $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
		      return 'Semana ' + weekNumber;
		    };

		    $mdDateLocaleProvider.msgCalendar = 'Calendario';
		    $mdDateLocaleProvider.msgOpenCalendar = 'Abrir el calendario';

		    // HELP - Check this bro
		    // You can also set when your calendar begins and ends.
		    $mdDateLocaleProvider.firstRenderableDate = new Date(1776, 6, 4);
		    $mdDateLocaleProvider.lastRenderableDate = new Date(2122, 12, 31);
		});
})();