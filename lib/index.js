"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.SocketClient = void 0;
var BodyParser = require("body-parser");
var SocketServer_1 = require("./server/SocketServer");
var routes_1 = require("./routes");
;
__exportStar(require("./types"), exports);
var Client_1 = require("./client/Client");
__createBinding(exports, Client_1, "default", "SocketClient");
var createServer = function (_a) {
    var port = _a.port, routeOptions = _a.routeOptions;
    var server = new SocketServer_1["default"]({ port: port });
    server.use(BodyParser.urlencoded({ extended: false }));
    server.use(BodyParser.json());
    server.use((0, routes_1["default"])(routeOptions));
    return server;
};
exports["default"] = createServer;
