'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function($scope, JsonService) {


  $scope.gridOptions = {
    enableColumnResizing: true,

    columnDefs: [
      { field: 'id', width: 200 },
      {field: 'name', width: 300,
        menuItems: [{
          title: 'Filter One'
        }, {
          title: 'Filter Two',
          action: function() {
            alert(this.context.col.displayName);
          }

        }]
      },
      { field: 'description', width: 200 },
      { field: 'type', width: 200 },
      { field: 'program', width: 200 },
      { field: 'entity', width: 200 },
      { field: 'internalName', width: 200 },
      { field: 'createDate', width: 200 },
      { field: 'createBy', width: 200 },
      { field: 'modifyDate', width: 200 },
      { field: 'modifiedBy', width: 200 },
      { field: 'options', width: 200 }
    ]
  };

  $scope.gridOptions.data = JsonService.jData;

});




