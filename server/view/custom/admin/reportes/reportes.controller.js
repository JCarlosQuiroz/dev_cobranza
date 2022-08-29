(function() {
    'use strict';
    angular
        .module('app')
        // .directive('forceSelectFocus', function() {
        //   return {
        //     restrict: 'A',
        //     require: ['^^mdSelect', '^ngModel'],
        //     link: function(scope, element, controller) {
        //       scope.$watch(function () {
        //         let foundElement = element;
        //         while (!foundElement.hasClass('md-select-menu-container')) {
        //           foundElement = foundElement.parent();
        //         }
        //         return foundElement.hasClass('md-active');
        //       }, function (newVal) {
        //             if (newVal) {
        //               console.log(controller[1]);
        //                 element.focus();
        //             }
        //           })
        //         }
        //     }
        // })
        .controller('reportesController', reportesController);

    /* @ngInject */
    function reportesController($mdDialog, $mdDateLocale,$element,reporteService,Main_API, LogedUser, CurrentCommunity, msgFactory, Success, Error) {
        var vm = this;
        vm.loading = false;
        // The md-select directive eats keydown events for some quick select
        // logic. Since we have a search input here, we don't need that logic.

        // $element.find('#selectFocus').on('keydown', function(ev) {
        //     ev.stopPropagation();
        // });

        vm.id = LogedUser.id;

        vm.reportes = [
            // {id:1010101,deudor:'Empresa de prueba',totalAdeudo:1230123,saldo:1232,etapaProcesal:'Liquidado',ultimoContacto:moment().format('LLLL')}
        ];

        vm.query = {
            limit: 10,
            page: 1

        };

        function obtenerReportesCobranza(){
            vm.loading = true;
            msgFactory.showToast('Cargando información, porfavor espere...');
            reporteService.obtenerReportesCobranza(vm.id).then(function successCallback(response){
                if(response.status == 202 && response.statusText == "Accepted"){
                    vm.reportes = response.data;
                    console.log(response)
                    msgFactory.showToast(response.data.length+' reportes encontrados!');
                    vm.loading = false;
                    $('#deudorTH').addClass('deudorTH');
                    $('#commentTH').addClass('commentTH');
                }else{
                    vm.loading = false;
                    vm.reportes = [];
                    msgFactory.showToast('No se encontraron reportes!');
                }
            }, function errorCallback(response){
                vm.loading = false;
                msgFactory.showToast('Ups! parece que hay un problema de red! intente de nuevo más tarde.');
                console.log(response)
            })
        }

         /* Show add dialog */
        function showDetail(ev, obj) {
            $mdDialog.show({
                controller: 'reportesDetailController',
                locals : {
                    vmParent:{
                        selected:obj,
                        refId:vm.refId
                    }
                },
                templateUrl: 'custom/admin/reportes/reportesDetail.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                escapeToClose:false,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
        }

        /* Clear reportes query */
        function clearQueryFields(){
            vm.search = '';
            vm.initDate = null;
            vm.endDate = null;
        }
        /* Filter dates */
        function filterDates(reportes){
            console.log(reportes)
            if(vm.initDate && vm.endDate)
                return new Date(reportes.date) >= new Date(vm.initDate) && new Date(reportes.date) <= new Date(vm.endDate);
            else
                return reportes.date;
        }        

        function displayStatus(status){
            switch(status){
                case 0:
                    return 'Pendiente'
                    break;
                case 1:
                    return 'Confirmado'
                    break;
                case 2:
                    return 'Cancelado'
                    break;
                default:
                    return undefined
            }
        }
        function displayMethod(method){
            switch(method){
                case 3:
                    return 'Efectivo'
                    break;
                case 1:
                    return 'Tarjeta/Debito'
                    break;
                case 2:
                    return 'Otro'
                    break;
            }
        }

        vm.displayMethod = displayMethod;
        vm.clearQueryFields = clearQueryFields;
        vm.filterDates = filterDates;
        vm.displayStatus = displayStatus;
        vm.showDetail = showDetail;
        obtenerReportesCobranza();
    }
})();