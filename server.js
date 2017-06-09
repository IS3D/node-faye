'use strict';

const http   = require('http');
const faye   = require('faye');
const Logger = require('heroku-logger').Logger

const server = http.createServer();
const logger = new Logger()
const bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
const PORT   = process.env.PORT || 8080;

function onListen() {
  logger.info(new Date() + ' [server] - Server up and listening on port ' + PORT);
}

bayeux.attach(server);
server.listen(PORT, onListen);

server.on('error', function (e) {
  logger.error(new Date() + ' [server] - error: ' + e);
});

bayeux.on('handshake', function(clientId) {
  logger.info(new Date() + ' [handshake] - client: ' + clientId);
});

bayeux.on('subscribe', function(clientId, channel) {
  logger.info(new Date() + ' [subscribe] - client: ' + clientId + " - channel: " + channel);
});

bayeux.on('unsubscribe', function(clientId, channel) {
  logger.info(new Date() + ' [unsubscribe] - client: ' + clientId + " - channel: " + channel);
});

bayeux.on('publish', function(clientId, channel, data) {
  logger.info(new Date() + ' [publish] - client: ' + clientId + " - channel: " + channel);
  logger.info(new Date() + ' [publish] - data: ');
  logger.info('message', { data: data });
});

bayeux.on('disconnect', function(clientId) {
  logger.info(new Date() + ' [disconnect] - client: ' + clientId);
});
