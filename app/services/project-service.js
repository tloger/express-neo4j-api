'use strict';

var db = require('../db/db.js');

function saveProject(project) {
    return db.saveNode(project);
}

function getAll() {
    return db.getAllNodesByType('Project');
}

module.exports.saveProject = saveProject;
module.exports.getAll = getAll;