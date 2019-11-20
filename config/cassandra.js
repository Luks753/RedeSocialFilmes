var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace:'feed'});

client.connect((err, result)=>{
    console.log(err)
});

module.exports = client;