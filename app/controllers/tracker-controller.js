var base = require('./base-controller');
var trackerService = require('../services/tracker-service');

function getAll(req, res) {
  trackerService.getAll().then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function saveTracker(req, res) {
  trackerService.saveTracker(req.body).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function deleteTracker(req, res) {
  trackerService.deleteTracker(req.params.id).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

function getTracker(req, res) {
  trackerService.getTracker(req.params.id).then(function (data) {
    res.json(base.sendSuccess(data));
  }, function (err) {
    res.json(base.sendError(err));
  });
}

module.exports.getAll = getAll;
module.exports.saveTracker = saveTracker;
module.exports.deleteTracker = deleteTracker;
module.exports.getTracker = getTracker;