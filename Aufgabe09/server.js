"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const url = require("url");
//import { ParsedUrlQuery } from "querystring";
var A09Server;
(function (A09Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            let pfad = q.pathname;
            if (pfad == "/html") {
                for (let key in q.query) {
                    //console.log(key + ": " + q.query[key]);
                    _response.write(key + ": " + q.query[key] + "<br/>");
                    //console.log(q.pathname);
                }
            }
            //console.log(q.query);
            //for (let key in q.query) {
            //console.log(key + ": " + q.query[key]);
            //_response.write(key + ": " + q.query[key] + "<br/>");
            if (pfad == "/json") {
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
            }
            //let jsonString: string = JSON.stringify(q.query);
            //_response.write(jsonString);
            _response.end();
        }
    }
    //https://gismalteshesh.herokuapp.com/
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map