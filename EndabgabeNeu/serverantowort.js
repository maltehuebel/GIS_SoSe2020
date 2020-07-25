"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("send")?.addEventListener("click", ausgeben);
    async function ausgeben() {
        let url = "http://localhost:8100/";
        let query = new URLSearchParams(localStorage);
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=serverantowort.js.map