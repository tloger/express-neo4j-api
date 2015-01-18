var db = require('../db/db.js');
var q = require('q');

getAll = function () {
    var deferred = q.defer();
    db.task.find({}, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('project');
    return deferred.promise;
};


function save(task, deferred) {
    task = new db.task(task);
    task.save(function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
}

function update(task, deferred) {
    task = new db.task(task);
    db.task.findByIdAndUpdate(task._id, {
        'name': task.name,
        'description': task.description
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    });
}

saveTask = function (task) {
    var deferred = q.defer();
    if (task._id) {
        update(task, deferred);
    } else {
        save(task, deferred);
    }
    return deferred.promise;
};

deleteTask = function (id) {
    var deferred = q.defer();
    db.task.findByIdAndRemove({
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

getTask = function (id) {
    var deferred = q.defer();
    db.task.findOne({
        '_id': id
    }, function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(data);
        }
    }).populate('project');
    return deferred.promise;
};

module.exports.getAll = getAll;
module.exports.saveTask = saveTask;
module.exports.deleteTask = deleteTask;
module.exports.getTask = getTask;