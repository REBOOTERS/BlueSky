/**
 * Http 请求辅助类
 */
angular.module('starter.services').factory('httpService', function ($q) {

  var NO_PLUGIN = 'HttpHelper: Missing Plugin';


  var httpService = {

    // 初始化服务
    getData: function (baseUrl) {
      var deferred = $q.defer();
      if (window.HttpHelper) {
        var options = {
          url: baseUrl
        };
        HttpHelper.getData(options, function (response) {
          deferred.resolve(response);
        }, function (err) {
          deferred.reject(err)
        });
      } else {
        console.log(NO_PLUGIN);
      }
      return deferred.promise;
    }
  };

  return httpService;

});
