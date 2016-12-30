var httphelper = {
  getData: function(options, success, failure) {
    cordova.exec(
      success,
      failure,
      'HttpHelper',
      'getData',
      [options]
    );
  }
};

module.exports = httphelper;
