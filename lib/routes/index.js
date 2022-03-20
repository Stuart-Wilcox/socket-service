"use strict";
exports.__esModule = true;
var Express = require("express");
var events_1 = require("../events");
var events_2 = require("../events");
;
var defaultRouteOptions = {
    enableHealthCheck: true,
    postEventRoute: '/event'
};
var getRoutes = function (_a) {
    var _b = _a === void 0 ? defaultRouteOptions : _a, enableHealthCheck = _b.enableHealthCheck, postEventRoute = _b.postEventRoute;
    var router = Express.Router();
    var socketEventManager = events_1["default"].getInstance();
    if (enableHealthCheck) {
        router.get('*', function (req, res) {
            return res.send('Hello world');
        });
    }
    router.post(postEventRoute, function (req, res) {
        var _a = req.body, watchType = _a.watchType, payload = _a.payload;
        if (watchType && watchType) {
            var socketEvent = new events_2.SocketEvent(watchType, payload);
            socketEventManager.publish(socketEvent);
        }
    });
    return router;
};
exports["default"] = getRoutes;
