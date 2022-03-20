"use strict";
exports.__esModule = true;
var BodyParser = require("body-parser");
var SocketServer_1 = require("./server/SocketServer");
var routes_1 = require("./routes");
;
var createServer = function (_a) {
    var port = _a.port, routeOptions = _a.routeOptions;
    var server = new SocketServer_1["default"]({ port: port });
    server.use(BodyParser.urlencoded({ extended: false }));
    server.use(BodyParser.json());
    server.use(routes_1["default"](routeOptions));
};
exports["default"] = createServer;
