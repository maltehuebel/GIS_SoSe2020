
namespace Aufgabe11 {


    async function datenbank(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "//https://gismalteshesh.herokuapp.com";
        url = url + "/datenbank";
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        //let responseText: string = await response.json();
        //console.log(responseText);
    }

    async function ausgebenhtml(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "//https://gismalteshesh.herokuapp.com";
        url = url + "/back";
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let sevrerAntwort: HTMLElement = <HTMLElement>document.getElementById("serverantwortdiv");
        sevrerAntwort.innerHTML = responseText;
    }

    document.getElementById("jsonformat")?.addEventListener("click", datenbank);
    document.getElementById("htmlformat")?.addEventListener("click", ausgebenhtml);

}