'use strict';

const elasticsearch = require('elasticsearch');
const getIndex = require('./getIndex');

//const host = process.env.HUBOT_ELASTICSEARCH_LOGGER_HOST || '54.183.233.28';
//const port = process.env.HUBOT_ELASTICSEARCH_LOGGER_PORT || 9200;
//const rawIndex = process.env.HUBOT_ELASTICSEARCH_LOGGER_INDEX || 'hubot-New';
//const rawIndex = 'hubot-today';




const host = '54.144.242.188';
const port = 9200;
const rawIndex = 'hubot_wall_notification';


const index = getIndex(rawIndex);
const type = 'message';

const client = new elasticsearch.Client({
  host: `${host}:${port}`
});

module.exports.log = (data, cb) => {

  client.index({
    index,
    type,
    body: data
  },cb);
};
