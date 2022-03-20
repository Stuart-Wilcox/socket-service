"use strict";
exports.__esModule = true;
var SocketIOClient = require("socket.io-client");
var SocketClient = /** @class */ (function () {
    function SocketClient(url) {
        this.socket = SocketIOClient(url);
    }
    SocketClient.prototype.registerWatch = function (watchType, callback) {
        this.socket.emit('register_watch', watchType);
        this.socket.on(watchType, function (payload) { return callback(payload); });
    };
    SocketClient.prototype.unregisterWatch = function (watchType) {
        this.socket.emit('unregister_watch', watchType);
        this.socket.off(watchType);
    };
    return SocketClient;
}());
exports["default"] = SocketClient;
