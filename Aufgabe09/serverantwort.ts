
namespace Aufgabe09 {


    async function ausgebenjson(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gismalteshesh.herokuapp.com";
        url = url + "/json";
        url = url + "?" + query.toString();
        //console.log(query.toString());
        //console.log(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        console.log(responseText);
        //let responseText: string = await response.text();
        //console.log(JSON.parse(responseText));
        
    }


    async function ausgebenhtml(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gismalteshesh.herokuapp.com";
        url = url + "/html";
        url = url + "?" + query.toString();
        //console.log(query.toString());
        //console.log(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let sevrerAntwort: HTMLElement = <HTMLElement>document.getElementById("serverantwortdiv");
        sevrerAntwort.innerHTML = responseText;
        

        //alert(responseText);
        
    }



    document.getElementById("jsonformat")?.addEventListener("click", ausgebenjson);
    document.getElementById("htmlformat")?.addEventListener("click", ausgebenhtml);

    


    /*for (let entry of query) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
 
    }*/

}