"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var IO = require("socket.io");
var SocketClientManager_1 = require("../clientmanager/SocketClientManager");
var events_1 = require("../events");
var WebServer_1 = require("./WebServer");
var SocketServer = /** @class */ (function (_super) {
    __extends(SocketServer, _super);
    function SocketServer(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.io = IO(_this.server);
        _this.socketClientManager = SocketClientManager_1.SocketClientManager.getInstance();
        _this.configureIO();
        _this.socketEventManager = events_1["default"].getInstance();
        _this.configureEvents();
        return _this;
    }
    SocketServer.prototype.configureIO = function () {
        var _this = this;
        this.io.on('connection', function (socket) {
            var socketClient = new SocketClientManager_1.SocketClient(socket);
            _this.socketClientManager.addClient(socketClient);
            socket.on('disconnect', function () {
                _this.socketClientManager.removeClient(socketClient);
            });
            socket.on('register_watch', function (watchType) {
                socketClient.addWatch(watchType);
            });
            socket.on('unregister_watch', function (watchType) {
                socketClient.removeWatch(watchType);
            });
        });
    };
    SocketServer.prototype.configureEvents = function () {
        var _this = this;
        // hook up event manager to clients
        this.socketEventManager.subscribe(function (socketEvent) {
            _this.socketClientManager.notify(socketEvent);
        });
    };
    return SocketServer;
}(WebServer_1["default"]));
exports["default"] = SocketServer;
