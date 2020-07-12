"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    async function datenbank(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://mongodbnetbrowser.herokuapp.com/?u=malte123&p=malte123&a=malte-gis-cluster-shesh-4nz0w.mongodb.net&n=Test&c=Students";
        url = url + "/datenbank";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
    async function ausgebenhtml(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://mongodbnetbrowser.herokuapp.com/?u=malte123&p=malte123&a=malte-gis-cluster-shesh-4nz0w.mongodb.net&n=Test&c=Students";
        url = url + "/back";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let sevrerAntwort = document.getElementById("serverantwortdiv");
        sevrerAntwort.innerHTML = responseText;
    }
    document.getElementById("jsonformat")?.addEventListener("click", datenbank);
    document.getElementById("htmlformat")?.addEventListener("click", ausgebenhtml);
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=serverantwort.js.map