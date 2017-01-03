angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, {}) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('AccountCtrl', function($scope, $http) {

  $scope.weatherCity = function(cityName){
        var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&mode=json&units=metric&cnt=1&APPID=b971cab803e8c55524abde5f9bdcbb37';
         $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });
  }
  $scope.cityName = 'minneapolis';
  var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.cityName+'&mode=json&units=metric&cnt=1&APPID=b971cab803e8c55524abde5f9bdcbb37';
         $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });
   $scope.date = new Date();

 });
