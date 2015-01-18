module.exports = {
  sendSuccess: function (data) {
    var obj = {};
    obj.status = 'SUCCESS';
    obj.data = data;
    return obj;
  },

  sendError: function (error) {
    var obj = {};
    obj.status = 'ERROR';
    obj.error = error;
    return obj;
  }
};