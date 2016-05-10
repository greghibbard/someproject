'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngTouch', 'ui.grid', 'ui.grid.resizeColumns',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

myApp.service('JsonService', function() {

  this.jData = [
    {
      "id":"1",
      "name": "Cox",
      "description": "Carney",
      "type": "Enormo",
      "program": true,
      "entity": "entity",
      "internalName": "name",
      "createDate": "01/01/2016",
      "createBy": "Greg",
      "modifyDate":"",
      "modifiedBy":"Greg",
      "options":""

    },
    {
      "id": "2",
      "name": "Starz",
      "description": "Carney",
      "type": "Enormo",
      "program": true,
      "entity": "entity",
      "internalName": "name",
      "createDate": "01/01/2016",
      "createBy": "Greg",
      "modifyDate":"",
      "modifiedBy":"Greg",
      "options":""
    },
    {
      "id":"3",
      "name": "Starz",
      "description": "Carney",
      "type": "Enormo",
      "program": true,
      "entity": "entity",
      "internalName": "name",
      "createDate": "01/01/2016",
      "createBy": "Greg",
      "modifyDate":"",
      "modifiedBy":"Greg",
      "options":""
    }
  ]


});