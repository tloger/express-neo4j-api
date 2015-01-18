var base = require('./base-controller');
var projectService = require('../services/project-service');

function getAll(req, res) {
  projectService.getAll().then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function saveProject(req, res) {
  projectService.saveProject(req.body).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function deleteProject(req, res) {
  projectService.deleteProject(req.params.id).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function getProject(req, res) {
  projectService.getProject(req.params.id).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

module.exports.getAll = getAll;
module.exports.saveProject = saveProject;
module.exports.deleteProject = deleteProject;
module.exports.getProject = getProject;