interface Artikel {
    name: string;
    url: string;
    beschreibung: string;
    preis: string;
}

let tasteninstrumente: Artikel[] = [
    {name: "Keyboard", url: "bilder/keyboard.jpg", beschreibung: "<p>Keyboard mit Tasten</p>", preis: "<hr><p>150€</p>"},
    {name: "Digitales Piano", url: "bilder/digital_piano.jpg", beschreibung: "<p>Digitales Piano mit Tasten</p>", preis: "<hr><p>200€</p>"},
    {name: "Stage Piano", url: "bilder/stage_piano.jpg", beschreibung: "<p>Stage Pino mit Tasten</p>", preis: "<hr><p>250€</p>"},
    {name: "Elektrische Orgel", url: "bilder/elektrische_orgel.jpg", beschreibung: "<p>Elektrische Orgel mit Tasten</p>", preis: "<hr><p>300€</p>"},
    {name: "Klavier", url: "bilder/klavier.jpg", beschreibung: "<p>Klavier mit Tasten</p>", preis: "<hr><p>220€</p>"},
    {name: "Akkordeon", url: "bilder/akkordeon.jpg", beschreibung: "<p>Akkordeon<p>", preis: "<hr><p>200€</p>"},
    {name: "Flügel", url: "bilder/fluegel.jpg", beschreibung: "<p>Flügel mit Tasten</p>", preis: "<hr><p>500€</p>"}
];

let blasinstrumente: Artikel[] = [
    {name: "Trompete", url: "bilder/trompete.jpg", beschreibung: "<p>Trompete zum Spielen</p>", preis: "<hr><p>80€</p>"},
    {name: "Saxophon", url: "bilder/saxophon.jpg", beschreibung: "<p>Saxophon zum Spielen</p>", preis: "<hr><p>120€</p>"},
    {name: "Klarinette", url: "bilder/klarinette.jpg", beschreibung: "<p>Klarinette zum Spielen</p>", preis: "<hr><p>100€</p>"},
    {name: "Horn", url: "bilder/horn.jpg", beschreibung: "<p>Super Horn zum Spielen</p>", preis: "<hr><p>100€</p>"},
    {name: "Posaune", url: "bilder/posaune.jpg", beschreibung: "<p>Posaune zum Spielen</p>", preis: "<hr><p>150€</p>"},
    {name: "Querflöte", url: "bilder/querfloete.jpg", beschreibung: "<p>Querflöte zum Spielen</p>", preis: "<hr><p>80€</p>"},
    {name: "Trompete", url: "bilder/trompete.jpg", beschreibung: "<p>Trompete zum Spielen</p>", preis: "<hr><p>80€</p>"}
];

for (let index: number = 0; index < tasteninstrumente.length; index++) {
    
    let newDiv: HTMLElement = document.createElement("div");
    newDiv.id = "at" + index;
    document.getElementById("ti_artikel")?.appendChild(newDiv);
    newDiv.setAttribute("class", "tasteninstrumente");

    let newTitel: HTMLElement = document.createElement("p");
    newTitel.innerHTML = tasteninstrumente[index].name;
    document.getElementById("at" + index)?.appendChild(newTitel);

    let newPic: HTMLElement = document.createElement("img");
    newPic.setAttribute("src", tasteninstrumente[index].url);
    document.getElementById("at" + index)?.appendChild(newPic);

    let newBeschreibung: HTMLElement = document.createElement("p");
    newBeschreibung.innerHTML = tasteninstrumente[index].beschreibung;
    document.getElementById("at" + index)?.appendChild(newBeschreibung);

    let newPreis: HTMLElement = document.createElement("p");
    newPreis.innerHTML = tasteninstrumente[index].preis;
    document.getElementById("at" + index)?.appendChild(newPreis);

    let newButton: HTMLInputElement = document.createElement("input");
    newButton.setAttribute("class", "in_den_einkaufswagen");
    document.getElementById("at" + index)?.appendChild(newButton);
    newButton.value = "In den Einkaufswagen";
    newButton.type = "submit";


}

for (let index: number = 0; index < blasinstrumente.length; index++) {
    
    let newDiv: HTMLElement = document.createElement("div");
    newDiv.id = "ab" + index;
    document.getElementById("bi_artikel")?.appendChild(newDiv);
    newDiv.setAttribute("class", "blasinstrumente");

    let newTitel: HTMLElement = document.createElement("p");
    newTitel.innerHTML = blasinstrumente[index].name;
    document.getElementById("ab" + index)?.appendChild(newTitel);

    let newPic: HTMLElement = document.createElement("img");
    newPic.setAttribute("src", blasinstrumente[index].url);
    document.getElementById("ab" + index)?.appendChild(newPic);

    let newBeschreibung: HTMLElement = document.createElement("p");
    newBeschreibung.innerHTML = blasinstrumente[index].beschreibung;
    document.getElementById("ab" + index)?.appendChild(newBeschreibung);

    let newPreis: HTMLElement = document.createElement("p");
    newPreis.innerHTML = blasinstrumente[index].preis;
    document.getElementById("ab" + index)?.appendChild(newPreis);

    let newButton: HTMLInputElement = document.createElement("input");
    newButton.setAttribute("class", "in_den_einkaufswagen");
    document.getElementById("ab" + index)?.appendChild(newButton);
    newButton.value = "In den Einkaufswagen";
    newButton.type = "submit";

}

