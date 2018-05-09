'use strict';

const elasticsearch = require('elasticsearch');
const getIndex = require('./getIndex');

//const host = process.env.HUBOT_ELASTICSEARCH_LOGGER_HOST || '54.183.233.28';
const host = '34.203.241.47';
const port = 9200;
const rawIndex = 'hubot-today';
//const port = process.env.HUBOT_ELASTICSEARCH_LOGGER_PORT || 9200;
//const rawIndex = process.env.HUBOT_ELASTICSEARCH_LOGGER_INDEX || 'hubot-New';

const index = getIndex(rawIndex);
const type = 'message';

const client = new elasticsearch.Client({
  host: `${host}:${port}`
});

module.exports.logs = (data, cb) => {
//console.log(data);
  client.index({
    index,
    type,
    body: data
  },cb);
};
