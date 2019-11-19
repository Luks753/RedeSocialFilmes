var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['host1', 'host2'], keyspace: 'atividade'});

module.exports = client;