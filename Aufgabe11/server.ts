import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";


export namespace Aufgabe11Server {
    interface Daten {
        [type: string]: string | string[] | undefined;
    }
    let kommtRein: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl: string = "mongodb+srv://malte123:malte123@malte-gis-cluster-shesh-4nz0w.mongodb.net/Test?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        kommtRein = mongoClient.db("Test").collection("Students");
        console.log("Datenbank verbunden: ", kommtRein != undefined);
    }
    function startServer(_port: number | string): void {
        console.log("Starting server on port: " + _port);
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            let pfad: string | null = q.pathname;

            if (pfad == "/datenbank") {
                let jsonString: string = JSON.stringify(q.query);
                _response.write(jsonString);
                storeDaten(q.query);
                _response.end();
            }

            if (pfad == "/back") {
                /*for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }*/
                getDaten();
                async function getDaten(): Promise<void> {
                    let antwort: Mongo.Cursor = kommtRein.find();
                    let ausgabe: string = JSON.stringify(await antwort.toArray());
                    _response.write(ausgabe);
                    _response.end();
                }
            }
            function storeDaten(daten: Daten): void {
                kommtRein.insert(daten);
            }
        }
    }
}


    //https://gismalteshesh.herokuapp.com/