# socket-service

Socket service is intended to be a simple, lightweight and fast service to easily integrate web sockets into existing apps.

It runs an express server alongside a socket.io server, in order for external sources to dispatch events to any socket clients. Socket clients register for whatever events they would like to watch, and when that type of event is dispatched, the client gets updated with the new information.