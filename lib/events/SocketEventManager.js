"use strict";
exports.__esModule = true;
exports.InMemoryClient = exports.SocketEventManager = void 0;
var SocketEventManager = /** @class */ (function () {
    function SocketEventManager(client) {
        this.client = client;
    }
    SocketEventManager.prototype.publish = function (socketEvent) {
        this.client.publish(socketEvent);
    };
    SocketEventManager.prototype.subscribe = function (callback) {
        this.client.onMessage(callback);
    };
    return SocketEventManager;
}());
exports.SocketEventManager = SocketEventManager;
var InMemoryClient = /** @class */ (function () {
    function InMemoryClient() {
        // set up dummy cb
        this.cb = function (arg) { return null; };
    }
    InMemoryClient.prototype.onMessage = function (cb) {
        this.cb = cb;
    };
    InMemoryClient.prototype.publish = function (socketEvent) {
        this.cb(socketEvent);
    };
    return InMemoryClient;
}());
exports.InMemoryClient = InMemoryClient;
