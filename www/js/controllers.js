var myApp = angular.module('starter.controllers', ['starter.services', 'firebase']);

myApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.fbLogin = function(){
    openFB.login(
      function(response) {
        if(response.status === 'connected') {
          console.log('Facebook login succeeded');
          $scope.closeLogin();
        }else{
          alert('Facebook login failed');
        }
      },
      {scope: 'email,publish_actions'});
  };
});
