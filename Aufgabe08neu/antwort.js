"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("hammerknopf")?.addEventListener("click", ausgeben);
    async function ausgeben() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gismalteshesh.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(query.toString());
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=antwort.js.map