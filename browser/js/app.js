'use strict'

// For educational purposes, we have put the entire angular app in one file.  Don't try this at home kids.
var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [];

  //Creates an item object and adds it to the items array
  $scope.addItem = function(newTask) {
    var listItem = {
      content: newTask,
      complete: false
    }

    $scope.items.push(listItem)
    // console.log($scope.items)
  }

})

app.directive('listItem', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/listItem.html',
    scope: {
      items: '='
    },
    link: function (scope) {
      // angular.extend(scope);
      scope.items = items
    }
  }
})

//This module contains some helpful methods
var utilsModule = {
  remove: function (array, item) {
    var index = array.indexOf(item);
    if (index === -1) return;
    return array.splice(index, 1);
  }

};

