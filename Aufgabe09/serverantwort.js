"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    async function ausgebenjson(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "http://localhost:8100";
        url = url + "/json";
        url = url + "?" + query.toString();
        //console.log(query.toString());
        //console.log(url);
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
        //let responseText: string = await response.text();
        //console.log(JSON.parse(responseText));
    }
    async function ausgebenhtml(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "http://localhost:8100";
        url = url + "/html";
        url = url + "?" + query.toString();
        //console.log(query.toString());
        //console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        let sevrerAntwort = document.getElementById("serverantwortdiv");
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
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=serverantwort.js.map