"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Aufgabe11Server;
(function (Aufgabe11Server) {
    let kommtRein;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "//mongodb+srv://malte123:malte123@malte-gis-cluster-shesh-4nz0w.mongodb.net/Daten?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        kommtRein = mongoClient.db("Daten").collection("Studenten");
        console.log("Datenbank verbunden: ", kommtRein != undefined);
    }
    function startServer(_port) {
        console.log("Starting server on port: " + _port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
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
            if (pfad == "/datenbank") {
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
                storeDaten(q.query);
                _response.end();
            }
            if (pfad == "/back") {
                /*for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }*/
                getDaten();
                async function getDaten() {
                    let antwort = kommtRein.find();
                    let ausgabe = JSON.stringify(await antwort.toArray());
                    _response.write(ausgabe);
                    _response.end();
                }
            }
            function storeDaten(daten) {
                kommtRein.insert(daten);
            }
        }
    }
})(Aufgabe11Server = exports.Aufgabe11Server || (exports.Aufgabe11Server = {}));
//https://gismalteshesh.herokuapp.com/
//# sourceMappingURL=server.js.map