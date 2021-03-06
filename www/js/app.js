var angapp = angular.module('todo', ['ionic','ngCordova'])

.controller('TodoCtrl', function($scope,$ionicSideMenuDelegate,$ionicPopup) {
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  $scope.go = function ( path ) {
    $location.path( path );
	alert(path);
  };
  
})

.run(function($ionicPlatform, $ionicPopup) {
  // Disable BACK button on home
  $ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.confirm({
        title: 'Beenden',
        template: 'Möchten Sie das Programm wirklich beenden?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
  }, 100);
});




var overlayElement = null;
var modalWindowElement = null;