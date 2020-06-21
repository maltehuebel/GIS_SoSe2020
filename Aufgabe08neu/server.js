"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http"); //Modul http wird importiert und der Variable http zugewiesen
var A08Server;
(function (A08Server) {
    console.log("Starting server"); // In der Console wird "Starting Server" ausgegeben
    let port = Number(process.env.PORT); //variable port vom typ wird deklariert
    if (!port) //wenn Port nicht gleich proces.env.PORT ist 
        port = 8100; // sei der Port 8100
    let server = Http.createServer(); // Variable server vum Typ Http.Server wird erzeugt und führt die Funktion createServer() aus
    server.addListener("request", handleRequest); //variable server bekommt einen eventlistener welcher bei einer request reagiert und die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); //variable server bekommt weiteren eventlistener welcher bei listening reagiert und die Funktion handleListen ausführt
    server.listen(port); //ein Listener wird auf den Port hinzugefügt
    function handleListen() {
        console.log("Listening"); //In der Console wird "Listening" ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices..."); //in der Console wird "I hear voices" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt name und wert für das header Objekt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //setzt name und wert für das header Objekt
        _response.write(_request.url); //schreibt die antwort auf der website, die antowrt ist die request.url
        console.log(_request.url); //Teilaufgbe, die request.url (hier: der query/path/string) wird in der Serverconsole ausgegeben
        _response.end(); //beendet die Antwort des Servers
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map