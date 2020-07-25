import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";


export namespace A08Server {
    interface Daten {
        [type: string]: string | string[] | undefined;
    }
    let bestellung: Mongo.Collection;
    let databaseUrl: string = "mongodb://localhost:27017";
    //let databaseUrl: string = "mongodb+srv://malte123:malte123@malte-gis-cluster-shesh-4nz0w.mongodb.net/Daten?retryWrites=true&w=majority";
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseUrl);
    //Server starten
    function startServer(_port: number | string): void {
        console.log("Starte Eis Server");
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    //Zur Datenbank verbinden
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        mongoClient.connect();
        bestellung = mongoClient.db("Shop").collection("Bestellungen");
        console.log("Datenbank verbunden", bestellung != undefined);
    }
    function handleListen(): void {
        console.log("Warte auf Bestellungen");
    }
    //Serverantwort festlegen
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            for (let key in q.query) {
                console.log("Bestellung: " + q.query[key]);
            }
            let bestellungdb: string = JSON.stringify(q.query);
            storeBestellung(q.query);
            _response.write("Danke für die Bestellung" + bestellungdb);
        }
        //_response.write("Danke für die Bestellung" + bestellungdb);
        _response.end();
    }
    //Bestellung in Datenbank einlagern 
    function storeBestellung(_bestellungdb: Daten): void {
        bestellung.insert(_bestellungdb);
    }
}