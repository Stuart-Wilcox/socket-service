"use strict";
exports.__esModule = true;
exports.InMemoryClient = exports.SocketEventManager = exports.SocketEvent = void 0;
var SocketEventManager_1 = require("./SocketEventManager");
exports.SocketEventManager = SocketEventManager_1.SocketEventManager;
exports.InMemoryClient = SocketEventManager_1.InMemoryClient;
var SocketEvent_1 = require("./SocketEvent");
exports.SocketEvent = SocketEvent_1.SocketEvent;
var SocketEventManagerConf = /** @class */ (function () {
    function SocketEventManagerConf() {
    }
    SocketEventManagerConf.getInstance = function () {
        if (!SocketEventManagerConf.instance) {
            var client = new SocketEventManager_1.InMemoryClient();
            SocketEventManagerConf.instance = new SocketEventManager_1.SocketEventManager(client);
        }
        return SocketEventManagerConf.instance;
    };
    return SocketEventManagerConf;
}());
exports["default"] = SocketEventManagerConf;
