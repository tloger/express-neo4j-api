'use strict';

var neo4j = require('neo4j');
var config = require('../config/config.js');
var db = new neo4j.GraphDatabase(config.neo4jURL);
var q = require('q');

function saveNode(data) {
    var node = db.createNode(data);
    var deferred = q.defer();
    node.save(function (err, node) {
        if (err) {
            deferred.reject('Error saving new node to database:', err);
        } else {
            node.data.id = node.id;
            deferred.resolve(node.data);
        }
    });
    return deferred.promise;
}

function getAllNodesByType(type) {
    var query = 'MATCH (node:' + type + ') RETURN node';
    console.log(query);

    var deferred = q.defer();
    db.query(query, null, function (err, results) {
        if (err) {
            deferred.reject('Error retriving nodes from database:', err);
        } else {
            var nodes = results.map(function (result) {
                console.log(result.node.id);
                result.node.data.id = result.node.id;
                return result.node.data;
            });
            deferred.resolve(nodes);
        }
    });
    return deferred.promise;
}

module.exports.saveNode = saveNode;
module.exports.getAllNodesByType = getAllNodesByType;