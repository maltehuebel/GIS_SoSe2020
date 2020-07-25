"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Daten aus LocalStorage laden
    let eisSorten = JSON.parse((localStorage.getItem("produkt")));
    seitenaufbau();
    function seitenaufbau() {
        for (let index = 0; index < eisSorten.length; index++) {
            //neues Div
            let getDiv = document.getElementById("eis");
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "eisdiv");
            newDiv.id = "eisdiv" + index;
            getDiv.appendChild(newDiv);
            //neues Bild
            let newBild = document.createElement("img");
            newBild.setAttribute("src", eisSorten[index].url);
            newBild.id = "eisbild";
            newBild.innerHTML = eisSorten[index].url;
            newDiv.appendChild(newBild);
            //neuer Titel
            let newTitel = document.createElement("p");
            newTitel.innerHTML = eisSorten[index].name;
            newDiv.appendChild(newTitel);
            //neuer Button
            let newButton = document.createElement("input");
            newButton.addEventListener("click", entfernen.bind(eisSorten[index]));
            newButton.setAttribute("index", index.toString());
            newButton.value = "Entfernen";
            newButton.type = "button";
            newDiv.appendChild(newButton);
        }
        //Preis berechnen
        let gesamtPreis = 0;
        for (let index = 0; index < eisSorten.length; index++) {
            gesamtPreis += eisSorten[index].preis;
        }
        let gesPr = document.createElement("h2");
        gesPr.id = "kundenPreis";
        gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
        document.getElementById("gesamtPreis")?.appendChild(gesPr);
        //Produkt entfernen
        function entfernen(_event) {
            let index = _event.target?.getAttribute("index");
            document.getElementById("eisdiv" + index)?.remove();
            eisSorten.splice(parseInt(index), 1);
            localStorage.setItem("produkt", JSON.stringify(eisSorten));
            location.reload();
        }
        document.getElementById("alleEntfernen")?.addEventListener("click", alleEntfernen);
        function alleEntfernen(_event) {
            document.getElementById("produkte")?.remove();
            localStorage.clear();
            location.reload();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=warenkorb.js.map