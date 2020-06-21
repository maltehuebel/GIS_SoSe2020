import * as Http from "http"; //Modul http wird importiert und der Variable http zugewiesen

export namespace A08Server { //bedeutungslos, damit typscript nicht denkt, dass ein neues Modul erzeugt wird
  console.log("Starting server"); // In der Console wird "Starting Server" ausgegeben
  let port: number = Number(process.env.PORT); //variable port vom typ wird deklariert
  if (!port) //wenn Port nicht gleich proces.env.PORT ist 
    port = 8100; // sei der Port 8100

  let server: Http.Server = Http.createServer(); // Variable server vum Typ Http.Server wird erzeugt und führt die Funktion createServer() aus
  server.addListener("request", handleRequest); //variable server bekommt einen eventlistener welcher bei einer request reagiert und die Funktion handleRequest ausführt
  server.addListener("listening", handleListen); //variable server bekommt weiteren eventlistener welcher bei listening reagiert und die Funktion handleListen ausführt
  server.listen(port); //ein Listener wird auf den Port hinzugefügt



  function handleListen(): void { //funktion handleListen
    console.log("Listening"); //In der Console wird "Listening" ausgegeben
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion hadndleRequest mit Funktionsparametern, die request ist die eingehende Nachricht, die response ist die antwort
    console.log("I hear voices..."); //in der Console wird "I hear voices" ausgegeben

    _response.setHeader("content-type", "text/html; charset=utf-8"); //setzt name und wert für das header Objekt
    _response.setHeader("Access-Control-Allow-Origin", "*"); //setzt name und wert für das header Objekt

    _response.write(_request.url); //schreibt die antwort auf der website, die antowrt ist die request.url

    console.log(_request.url); //Teilaufgbe, die request.url (hier: der query/path/string) wird in der Serverconsole ausgegeben
      
    _response.end(); //beendet die Antwort des Servers
  }

  }