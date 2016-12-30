/**
 * Created by Rookie_rebooters on 2016/12/14.
 */
var app = angular.module('starter');

app.run(['$ionicPlatform', '$ionicPopup', '$rootScope', '$location', function ($ionicPlatform, $ionicPopup, $rootScope, $location) {

  //主页面显示退出提示框
  $ionicPlatform.registerBackButtonAction(function (e) {

    e.preventDefault();

    function showConfirm() {
      var confirmPopup = $ionicPopup.confirm({
        title: '<strong>退出应用</strong>',
        template: '你确定要退出应用吗?',
        okText: '退出',
        cancelText: '取消'
      });

      confirmPopup.then(function (res) {
        if (res) {
          ionic.Platform.exitApp();
        } else {
          // Don't close
        }
      });
    }

    // Is there a page to go back to?
    if ($location.path() == '/tab/dash') {
      showConfirm();
    } else {
      $rootScope.$ionicGoBack();
    }

    return false;
  }, 101);

}]);
