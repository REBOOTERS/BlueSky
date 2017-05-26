/**
 * Created by Rookie_rebooters on 2016/12/8.
 */
angular.module('starter.controllers')

  .controller('IndexCtrl', function ($scope, $timeout, httpService, $ionicLoading) {

    // Setup the loader
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });


    $timeout(function () {
      $ionicLoading.hide();
    }, 2000);


    function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
      return currentdate;
    }


    $scope.getDayLists = function () {
      var date = new Date();

      var month = date.getMonth() + 1;
      var day = date.getDate();

      var baseUrl = 'http://api.juheapi.com/japi/toh?v=1&month=' + month + '&day=' + day + '&key=6390b4fd7f3c137961cc7ee162a70bf5';
      var promise = httpService.getData(baseUrl);
        promise.then(function (result) {
        console.log("result is " + result);

        if (result === "") {
          result = '{"result":[{"_id":"17321207","title":"英国皇家大剧院在伦敦开幕","pic":"http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201112/7/E0141012806.jpg","year":1732,"month":12,"day":7,"des":"在284年前的今天，1732年12月7日 (农历十月二十)，英国皇家大剧院在伦敦开幕。","lunar":"壬子年十月二十"},{"_id":"17981207","title":"清代诗人袁枚逝世","pic":"http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201112/7/25142510563.jpg","year":1798,"month":12,"day":7,"des":"在218年前的今天，1798年12月7日 (农历冬月初一)，清代诗人袁枚逝世。","lunar":"戊午年冬月初一"},{"_id":"18101207","title":"德国生理学家索多·施旺诞生","pic":"http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201112/7/9F162810753.jpg","year":1810,"month":12,"day":7,"des":"在206年前的今天，1810年12月7日 (农历冬月十一)，德国生理学家索多·施旺诞生。","lunar":"庚午年冬月十一"}],"reason":"请求成功！","error_code":0}';
        }


        console.log("new result is " + result);

        if (typeof result === 'string') {
          result = JSON.parse(result);
        }

        $scope.indexDatas = result.result;
      });

    };


    $scope.doRefresh = function () {
      $timeout(function () {
        $scope.getDayLists();
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);
    };


  });
