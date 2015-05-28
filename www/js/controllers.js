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
    $cordovaOauth.facebook('442668512567921', ['email']).then(function(result){
      auth.$authWithOAuthToken('facebook', result.access_token).then(function(authData){
        showAlert('Successfully login', JSON.stringify(authData));
      }, function(error){
        showAlert('ERROR at the firebaseAuth level', error);
      });
    }, function(error){
      showAlert('ERROR at the facebook level',  error);
    });
  }
  $scope.gpLogin = function(){
    $cordovaOauth.google('534265459229-jpvjvcbk8vmevna8i8iccrvgmb7tcp4o.apps.googleusercontent.com', ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result){
      auth.$authWithOAuthToken  ('google', result.access_token).then(function(authData){
        showAlert('Successfully login', JSON.stringify(authData));
      }, function(error){
        showAlert('ERROR at the firebaseAuth level', error);
      });
    }, function(error){
      showAlert('ERROR at the google plus level', error);
    });
  }
});
