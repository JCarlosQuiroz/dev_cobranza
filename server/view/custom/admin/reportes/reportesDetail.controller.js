(function() {
    'use strict';
    angular
        .module('app')
        .controller('reportesDetailController', reportesDetailController);

    /* @ngInject */
    function reportesDetailController($scope,$mdDialog,reporteService,vmParent,Main_API,msgFactory,Success,Error) {
        
        $scope.vmChild = {};
        msgFactory.showToast('Cargando...');
        $scope.vmChild.loading = true;
        $scope.vmChild.report = vmParent.selected;

        $scope.vmChild.listado = [];

        $scope.vmChild.obtenerDetalle = function(){
            reporteService.obtenerDeudorDetalle(vmParent.selected.idDeudor).then(function successCallback(response1){
                if(response1.status == 202 && response1.statusText == "Accepted"){

                    $scope.vmChild.listado = response1.data;

                    reporteService.obtenerDeudorDetalleDocumentos(vmParent.selected.idDeudor).then(function successCallback(response2){
                        if(response2.status == 202 && response2.statusText == "Accepted"){
                            
                            $scope.vmChild.listado.documentos = response2.data;
                            console.log(response2)
                            msgFactory.showToast('Cargado!');
                            $scope.vmChild.loading = false;

                        }else{
                            $scope.vmChild.listado.documentos = [];
                            $scope.vmChild.loading = false;
                        }
                    }, function errorCallback(response2){
                        msgFactory.showToast('Ups! parece que hay un problema de red! intente de nuevo más tarde.');
                        $scope.vmChild.loading = false;
                        console.log(response2)
                    })
                }else{
                    $scope.vmChild.listado = [];
                    $scope.vmChild.loading = false;
                }
            }, function errorCallback(response1){
                msgFactory.showToast('Ups! parece que hay un problema de red! intente de nuevo más tarde.');
                $scope.vmChild.loading = false;
                console.log(response1)
            })
        }

        $scope.vmChild.download = function(doc){
            var zip = new JSZip();
                zip.file(doc.docNombre, doc.documento.data, {base64: true});
                zip.generateAsync({type:"blob"})
                .then(function(content) {
                    // see FileSaver.js
                    saveAs(content, "file.zip");
                });
        }
        /* Clear search terms*/
        $scope.vmChild.clearSearchTerm = function() {
            $scope.vmChild.searchTerm = '';
        }

        /* Close */
        $scope.vmChild.close = function() {
            $scope.vmChild = {};
            Main_API.data  = {};
            $mdDialog.hide();
        }

        $scope.vmChild.obtenerDetalle();

    }
})();