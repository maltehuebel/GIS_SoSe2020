"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    let instrumente = [
        { name: "Keyboard", url: "bilder/keyboard.jpg", beschreibung: "<p>Keyboard mit Tasten</p>", preis: 150, kategorie: 0 },
        { name: "Digitales Piano", url: "bilder/digital_piano.jpg", beschreibung: "<p>Digitales Piano mit Tasten</p>", preis: 200, kategorie: 0 },
        { name: "Stage Piano", url: "bilder/stage_piano.jpg", beschreibung: "<p>Stage Pino mit Tasten</p>", preis: 250, kategorie: 0 },
        { name: "Elektrische Orgel", url: "bilder/elektrische_orgel.jpg", beschreibung: "<p>Elektrische Orgel mit Tasten</p>", preis: 300, kategorie: 0 },
        { name: "Klavier", url: "bilder/klavier.jpg", beschreibung: "<p>Klavier mit Tasten</p>", preis: 220, kategorie: 0 },
        { name: "Akkordeon", url: "bilder/akkordeon.jpg", beschreibung: "<p>Akkordeon<p>", preis: 200, kategorie: 0 },
        { name: "Flügel", url: "bilder/fluegel.jpg", beschreibung: "<p>Flügel mit Tasten</p>", preis: 500, kategorie: 0 },
        { name: "Trompete", url: "bilder/trompete.jpg", beschreibung: "<p>Trompete zum Spielen</p>", preis: 80, kategorie: 1 },
        { name: "Saxophon", url: "bilder/saxophon.jpg", beschreibung: "<p>Saxophon zum Spielen</p>", preis: 120, kategorie: 1 },
        { name: "Klarinette", url: "bilder/klarinette.jpg", beschreibung: "<p>Klarinette zum Spielen</p>", preis: 100, kategorie: 1 },
        { name: "Horn", url: "bilder/horn.jpg", beschreibung: "<p>Super Horn zum Spielen</p>", preis: 100, kategorie: 1 },
        { name: "Posaune", url: "bilder/posaune.jpg", beschreibung: "<p>Posaune zum Spielen</p>", preis: 150, kategorie: 1 },
        { name: "Querflöte", url: "bilder/querfloete.jpg", beschreibung: "<p>Querflöte zum Spielen</p>", preis: 80, kategorie: 1 },
        { name: "Trompete", url: "bilder/trompete.jpg", beschreibung: "<p>Trompete zum Spielen</p>", preis: 80, kategorie: 1 }
    ];
    for (let index = 0; index < instrumente.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "at" + index;
        if (instrumente[index].kategorie == 0) {
            document.getElementById("ti_artikel")?.appendChild(newDiv);
            newDiv.setAttribute("class", "tasteninstrumente");
        }
        if (instrumente[index].kategorie == 1) {
            document.getElementById("bi_artikel")?.appendChild(newDiv);
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
        newPreis.innerHTML = "<hr><p>" + instrumente[index].preis + " €</p></hr>";
        document.getElementById("at" + index)?.appendChild(newPreis);
        let newButton = document.createElement("input");
        newButton.setAttribute("class", "in_den_einkaufswagen");
        document.getElementById("at" + index)?.appendChild(newButton);
        newButton.value = "In den Einkaufswagen";
        newButton.type = "submit";
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map