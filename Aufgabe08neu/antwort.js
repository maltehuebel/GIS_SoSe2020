"use strict";
let knepp = document.getElementById("hammerknopf");
knepp.addEventListener("click", ausgeben);
async function ausgeben(_event) {
    let formData = new FormData(document.forms[0]);
    let url = "https://gis-example.herokuapp.com";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    await fetch(url);
    for (let entry of query) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
}
//# sourceMappingURL=antwort.js.map