import * as Http from "http";



export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }



  /*let senden: HTMLElement = <HTMLElement>document.getElementById("senden");
  senden.addEventListener("click", lelesenden);

  async function lelesenden(): Promise<void> {


  let formData: FormData = new FormData(document.forms[0]);

  console.log((formData.get("name")));

  for (let entry of formData) {
    console.log(entry);
    console.log("name: " + entry[0]);
    console.log("value: " + entry[1]);
  }

  let url: string = "https://gismalteshesh.herokuapp.com/";
  let query: URLSearchParams = new URLSearchParams(<any>formData);
  url = url + "?" + query.toString();
  await fetch(url);
  }*/
}