/**
 * Created by Rookie_rebooters on 2016/12/1.
 */
angular.module('starter.controllers').controller('historyCtrl', function ($scope, $stateParams, $http, httpService) {

  $scope.getDatas = function () {
    var id = $stateParams.Id;
    var baseUrl = 'http://api.juheapi.com/japi/tohdet?v=1&id=' + id + '&key=6390b4fd7f3c137961cc7ee162a70bf5';
    var promise = httpService.getData(baseUrl);
    promise.then(function (result) {
      console.log("result is " + result);

      if (result == "") {
        result = '{"result":[{"_id":"15081130","title":"意大利建筑师安德烈亚·帕拉弟奥诞生","pic":"http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201202/12/152472012244033.jpg","year":1508,"month":11,"day":30,"des":"在508年前的今天，1508年11月30日 (农历冬月初八)，意大利建筑师安德烈亚·帕拉弟奥诞生。","content":"在508年前的今天，1508年11月30日 (农历冬月初八)，意大利建筑师安德烈亚·帕拉弟奥诞生。安德烈亚·帕拉弟奥(Andrea Palladio，1508年11月30日-1580年8月19日)，意大利建筑师，被认为是西方建筑史上最有影响力的人。 帕拉弟奥是威尼斯公国最重要的建筑师，设计了许多别墅、教堂和宫殿，其中大部分位于他成长和居住的維琴察。出版过论文《建筑学四书》(1570)(I quattro libri dellarchitettura)，通过这本书他的设计模型对欧洲的建筑风格造成了很深远的影响；对源自他的风格的模仿持续了三个世纪。对于古典罗马式理论，我们称作帕拉弟奥主义。 ","lunar":"戊辰年冬月初八"}],"reason":"请求成功！","error_code":0}';
      }


      if (typeof result === 'string') {
        result = JSON.parse(result);
      }

      $scope.responseData = result;
    });

  };
});
