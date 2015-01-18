var base = require('./base-controller');
var taskService = require('../services/task-service');

function getAll(req, res) {
  taskService.getAll().then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function saveTask(req, res) {
  taskService.saveTask(req.body).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function deleteTask(req, res) {
  taskService.deleteTask(req.params.id).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function getTask(req, res) {
  taskService.getTask(req.params.id).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

module.exports.getAll = getAll;
module.exports.saveTask = saveTask;
module.exports.deleteTask = deleteTask;
module.exports.getTask = getTask;