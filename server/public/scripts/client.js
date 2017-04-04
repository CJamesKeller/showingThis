console.log(data);

var myApp = angular.module("myApp", []);

myApp.controller("appendController", ["$scope", function($scope)
{
  $scope.appendListing = data;
  $scope.delete = function(index)
  {
    $scope.appendListing.splice(index, 1);
  };
}]);
