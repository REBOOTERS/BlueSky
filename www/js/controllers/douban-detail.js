/**
 * Created by Rookie_rebooters on 2016/12/8.
 */


angular.module('starter.controllers')
  .controller('ChatDetailCtrl', function ($scope, Chats) {
    $scope.chat = Chats.allDetail();
    $scope.getGeners = Chats.genresStr();
    $scope.alias = Chats.getAlias();
    $scope.countries = Chats.getCountries();
  });
