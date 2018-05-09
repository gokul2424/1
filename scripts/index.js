// Description:
//   Logs chats to Elasticsearch
// Configuration:
//   HUBOT_ELASTICSEARCH_LOGGER_HOST - The Elasticsearch host
//   HUBOT_ELASTICSEARCH_LOGGER_PORT - The Elasticsearch port
//   HUBOT_ELASTICSEARCH_LOGGER_INDEX - The Elasticsearch index to use for storing chats
'use strict';

const logger = require('./lib/logger');
const logger_d = require('./lib/logger1');
module.exports = (robot) => {
  robot.hear(/.+/, (res) => {
    const msg = res.message;
    //console.log(JSON.stringify(msg));

    // don't log private messages
    if (!msg.room) return;

    const data = {
      user: msg.user.name,
      message: msg.text,//data is set here
      room: msg.room,
      type: "Chat",
      timestamp: new Date()
    };

    logger.logs(data, (err) => {
      if (err) return robot.logger.error(err.message);
    });
  });

module.exports.passData = function (msg){
    const data = {
      user: "Bot",
      message: msg,
      type: "Chat",
	  timestamp: new Date()
	};
    logger.logs(data, (err) => {
      if (err) return robot.logger.error(err.message);
    });
    /*console.log(message);
    logger.logs(message, (err) => {
      if (err) return robot.logger.error(err.message);
    });*/
};




module.exports.one = function (botname, msg,msg1,msg2){
    const data = {
      user: "Bot",
      command: msg,
      message: msg1,
      buildstatus: msg2,
      type: "Chat",
                  timestamp: new Date()
                };
    logger_d.log(data, (err) => {
      if (err) return robot.logger.error(err.message);
    });
    
};
};