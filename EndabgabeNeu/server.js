"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var A08Server;
(function (A08Server) {
    let bestellung;
    let databaseUrl = "mongodb://localhost:27017";
    //let databaseUrl: string = "mongodb+srv://malte123:malte123@malte-gis-cluster-shesh-4nz0w.mongodb.net/Daten?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseUrl);
    //Server starten
    function startServer(_port) {
        console.log("Starte Eis Server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    //Zur Datenbank verbinden
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        mongoClient.connect();
        bestellung = mongoClient.db("Shop").collection("Bestellungen");
        console.log("Datenbank verbunden", bestellung != undefined);
    }
    function handleListen() {
        console.log("Warte auf Bestellungen");
    }
    //Serverantwort festlegen
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            for (let key in q.query) {
                console.log("Bestellung: " + q.query[key]);
            }
            let bestellungdb = JSON.stringify(q.query);
            storeBestellung(q.query);
            _response.write("Danke für die Bestellung" + bestellungdb);
        }
        //_response.write("Danke für die Bestellung" + bestellungdb);
        _response.end();
    }
    //Bestellung in Datenbank einlagern 
    function storeBestellung(_bestellungdb) {
        bestellung.insert(_bestellungdb);
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map