"use strict";
exports.__esModule = true;
var uuid = require("uuid");
var SocketClient = /** @class */ (function () {
    function SocketClient(socket) {
        this.id = uuid();
        this.socket = socket;
    }
    SocketClient.prototype.hasWatch = function (watchType) {
        return this.watches.has(watchType);
    };
    SocketClient.prototype.addWatch = function (watchType) {
        this.watches.add(watchType);
        return true;
    };
    SocketClient.prototype.removeWatch = function (watchType) {
        return this.watches["delete"](watchType);
    };
    SocketClient.prototype.notify = function (socketEvent) {
        var watchType = socketEvent.watchType, payload = socketEvent.payload;
        this.socket.emit(watchType, payload);
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;
;
var SocketClientManager = /** @class */ (function () {
    function SocketClientManager() {
        this.socketClients = new Map();
    }
    SocketClientManager.getInstance = function () {
        if (!SocketClientManager.instance) {
            SocketClientManager.instance = new SocketClientManager();
        }
        return SocketClientManager.instance;
    };
    SocketClientManager.prototype.addClient = function (socketClient) {
        this.socketClients.set(socketClient.id, socketClient);
    };
    SocketClientManager.prototype.removeClient = function (socketClient) {
        this.socketClients["delete"](socketClient.id);
    };
    SocketClientManager.prototype.notify = function (socketEvent) {
        var watchType = socketEvent.watchType;
        this.socketClients.forEach(function (socketClient) {
            if (socketClient.hasWatch(watchType)) {
                setImmediate(function () {
                    return socketClient.notify(socketEvent);
                });
            }
        });
    };
    return SocketClientManager;
}());
exports.SocketClientManager = SocketClientManager;
;
