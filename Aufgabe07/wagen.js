"use strict";
//(<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("name")!;
//(<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("preis")!;
let instrumente = JSON.parse((localStorage.getItem("name")));
console.log(instrumente);
seitenaufbau();
function seitenaufbau() {
    for (let index = 0; index < instrumente.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "at" + index;
        if (instrumente[index].kategorie == 0) {
            document.getElementById("ew_artikel")?.appendChild(newDiv);
            newDiv.setAttribute("class", "tasteninstrumente");
        }
        if (instrumente[index].kategorie == 1) {
            document.getElementById("ew_artikel")?.appendChild(newDiv);
            newDiv.setAttribute("class", "blasinstrumente");
        }
        let newTitel = document.createElement("p");
        newTitel.innerHTML = instrumente[index].name;
        document.getElementById("at" + index)?.appendChild(newTitel);
        let newPic = document.createElement("img");
        newPic.setAttribute("src", instrumente[index].url);
        document.getElementById("at" + index)?.appendChild(newPic);
        let newBeschreibung = document.createElement("p");
        newBeschreibung.innerHTML = instrumente[index].beschreibung;
        document.getElementById("at" + index)?.appendChild(newBeschreibung);
        let newPreis = document.createElement("p");
        newPreis.innerHTML = "<hr><p>" + instrumente[index].preis + " €</p>";
        document.getElementById("at" + index)?.appendChild(newPreis);
        let newButton = document.createElement("input");
        newButton.setAttribute("class", "in_den_einkaufswagen");
        document.getElementById("at" + index)?.appendChild(newButton);
        newButton.value = "Entfernen";
        newButton.type = "submit";
        newButton.addEventListener("click", entfernen.bind(instrumente[index]));
        newButton.setAttribute("index", index.toString());
        //newButton.addEventListener("click", zwischenspeichern);
        newButton.setAttribute("name", JSON.stringify(instrumente[index]));
        //newButton.setAttribute("id", );
    }
}
let gesamtPreis = 0;
for (let index = 0; index < instrumente.length; index++) {
    gesamtPreis += instrumente[index].preis;
}
let gesPr = document.createElement("h2");
gesPr.id = "scheißpreis";
gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
document.getElementById("gesamtPreis")?.appendChild(gesPr);
document.getElementById("alleenternen")?.addEventListener("click", alleEntfernen);
function alleEntfernen(_event) {
    document.getElementById("ew_artikel")?.remove();
    localStorage.clear();
    instrumente.splice(0);
    let gesPr = document.createElement("h2");
    gesPr.innerHTML = "Preis: 0€";
    document.getElementById("gesamtPreis")?.appendChild(gesPr);
    document.getElementById("scheißpreis")?.remove();
}
function entfernen(_event) {
    let index = _event.target?.getAttribute("index");
    document.getElementById("at" + index)?.remove();
    instrumente.splice(parseInt(index), 1);
    console.log(instrumente);
    localStorage.setItem("name", JSON.stringify(instrumente));
    location.reload();
}
//# sourceMappingURL=wagen.js.map