/**
 * Created by Rookie_rebooters on 2016/12/8.
 */
angular.module('starter.controllers')
  .controller('ChatsCtrl', function ($scope, Chats, $timeout, httpService, $q) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});


    //正在热映


    $scope.getInThreaters = function () {

      var baseUrl = "https://api.douban.com/v2/movie/in_theaters";
      var promise = httpService.getData(baseUrl);
      promise.then(function (result) {

        console.log("the result is " + result);
        if (typeof result === 'string') {
          result = JSON.parse(result);
        }
        $scope.InTheaters = result.subjects;
      });

    };

    $scope.getComingSoon = function () {
      var baseUrl = "https://api.douban.com/v2/movie/coming_soon";
      var promise = httpService.getData(baseUrl);
      promise.then(function (result) {

        console.log("the result is " + result);
        if (typeof result === 'string') {
          result = JSON.parse(result);
        }
        $scope.comingSoon = result.subjects;
      });
    };


    // $scope.chats = Chats.all();
    //
    //
    // $scope.casts = function (index) {
    //   return Chats.casts(index);
    // };
    //
    // $scope.directors = function (index) {
    //   return Chats.directors(index)
    // };
    // $scope.remove = function (chat) {
    //   Chats.remove(chat);
    // };


    $scope.doRefresh = function () {
      $timeout(function () {
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);
    };
  });
