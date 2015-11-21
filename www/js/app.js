angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope,$ionicSideMenuDelegate) {
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  $scope.go = function ( path ) {
    $location.path( path );
	alert(path);
  };
});

var overlayElement = null;
var modalWindowElement = null;