"use strict";
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    let eisSorten = JSON.parse((localStorage.getItem("produkt")));
    console.log(eisSorten);
    seitenaufbau();
    function seitenaufbau() {
        for (let index = 0; index < eisSorten.length; index++) {
            //neues Div
            let getDiv = document.getElementById("händlergrid");
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "eisdiv");
            newDiv.id = "händlerdiv" + index;
            getDiv.appendChild(newDiv);
            //neues Bild
            let newBild = document.createElement("img");
            newBild.setAttribute("src", eisSorten[index].url);
            newBild.id = "händlerbild";
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
            newButton.value = "X";
            newButton.type = "button";
            newDiv.appendChild(newButton);
        }
        //Umsatz berechnen
        let gesamtPreis = 0;
        for (let index = 0; index < eisSorten.length; index++) {
            gesamtPreis += eisSorten[index].preis;
        }
        let gesPr = document.createElement("h2");
        gesPr.id = "händlerumsatz";
        gesPr.innerHTML = "Umsatz: " + gesamtPreis.toString() + "€";
        document.getElementById("umsatz")?.appendChild(gesPr);
        //Bestellung löschen
        function entfernen(_event) {
            let index = _event.target?.getAttribute("index");
            document.getElementById("händlergrid" + index)?.remove();
            eisSorten.splice(parseInt(index), 1);
            localStorage.setItem("produkt", JSON.stringify(eisSorten));
            location.reload();
        }
        document.getElementById("entfernen")?.addEventListener("click", alleEntfernen);
        function alleEntfernen(_event) {
            document.getElementById("produkte")?.remove();
            localStorage.clear();
            location.reload();
        }
    }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
//# sourceMappingURL=händler.js.map