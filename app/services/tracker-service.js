var db = require('../db/db.js');
var q = require('q');

getAll = function () {
    var deferred = q.defer();
    db.tracker.find({}, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('task');
    return deferred.promise;
};


function save(tracker, deferred) {
    tracker = new db.tracker(tracker);
    tracker.save(function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
}

function update(tracker, deferred) {
    tracker = new db.tracker(tracker);
    db.tracker.findByIdAndUpdate(tracker._id, {
        'name': tracker.name,
        'description': tracker.description
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
}

saveTracker = function (tracker) {
    var deferred = q.defer();
    if (tracker._id) {
        update(tracker, deferred);
    } else {
        save(tracker, deferred);
    }
    return deferred.promise;
};

deleteTracker = function (id) {
    var deferred = q.defer();
    db.tracker.findByIdAndRemove({
        '_id': id
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
    return deferred.promise;
};

getTracker = function (id) {
    var deferred = q.defer();
    db.tracker.findOne({
        '_id': id
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('task');
    return deferred.promise;
};

module.exports.getAll = getAll;
module.exports.saveTracker = saveTracker;
module.exports.deleteTracker = deleteTracker;
module.exports.getTracker = getTracker;