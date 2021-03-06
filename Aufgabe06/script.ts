namespace Aufgabe06 {
    interface Artikel {
        name: string;
        url: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
    }
    
    let instrumente: Artikel[] = [
        {name: "Keyboard", url: "bilder/keyboard.jpg", beschreibung: "<p>Keyboard mit Tasten</p>", preis: 150, kategorie: 0},
        {name: "Digitales Piano", url: "bilder/digital_piano.jpg", beschreibung: "<p>Digitales Piano mit Tasten</p>", preis: 200, kategorie: 0},
        {name: "Stage Piano", url: "bilder/stage_piano.jpg", beschreibung: "<p>Stage Pino mit Tasten</p>", preis: 250, kategorie: 0},
        {name: "Elektrische Orgel", url: "bilder/elektrische_orgel.jpg", beschreibung: "<p>Elektrische Orgel mit Tasten</p>", preis: 300, kategorie: 0},
        {name: "Klavier", url: "bilder/klavier.jpg", beschreibung: "<p>Klavier mit Tasten</p>", preis: 220, kategorie: 0},
        {name: "Akkordeon", url: "bilder/akkordeon.jpg", beschreibung: "<p>Akkordeon<p>", preis: 200, kategorie: 0},
        {name: "Flügel", url: "bilder/fluegel.jpg", beschreibung: "<p>Flügel mit Tasten</p>", preis: 500, kategorie: 0},
    
        {name: "Trompete", url: "bilder/trompete.jpg", beschreibung: "<p>Trompete zum Spielen</p>", preis: 80, kategorie: 1},
        {name: "Saxophon", url: "bilder/saxophon.jpg", beschreibung: "<p>Saxophon zum Spielen</p>", preis: 120, kategorie: 1},
        {name: "Klarinette", url: "bilder/klarinette.jpg", beschreibung: "<p>Klarinette zum Spielen</p>", preis: 100, kategorie: 1},
        {name: "Horn", url: "bilder/horn.jpg", beschreibung: "<p>Super Horn zum Spielen</p>", preis: 100, kategorie: 1},
        {name: "Posaune", url: "bilder/posaune.jpg", beschreibung: "<p>Posaune zum Spielen</p>", preis: 150, kategorie: 1},
        {name: "Querflöte", url: "bilder/querfloete.jpg", beschreibung: "<p>Querflöte zum Spielen</p>", preis: 80, kategorie: 1},
        {name: "Trompete", url: "bilder/trompete.jpg", beschreibung: "<p>Trompete zum Spielen</p>", preis: 80, kategorie: 1}
    ];
    
    for (let index: number = 0; index < instrumente.length; index++) {
        
        let newDiv: HTMLElement = document.createElement("div");
        newDiv.id = "at" + index;
    
        if (instrumente[index].kategorie == 0) {
            document.getElementById("ti_artikel")?.appendChild(newDiv);
            newDiv.setAttribute("class", "tasteninstrumente");
    
        }
    
        if (instrumente[index].kategorie == 1) {
            document.getElementById("bi_artikel")?.appendChild(newDiv);
            newDiv.setAttribute("class", "blasinstrumente");
    
        }
    
        let newTitel: HTMLElement = document.createElement("p");
        newTitel.innerHTML = instrumente[index].name;
        document.getElementById("at" + index)?.appendChild(newTitel);
    
        let newPic: HTMLElement = document.createElement("img");
        newPic.setAttribute("src", instrumente[index].url);
        document.getElementById("at" + index)?.appendChild(newPic);
    
        let newBeschreibung: HTMLElement = document.createElement("p");
        newBeschreibung.innerHTML = instrumente[index].beschreibung;
        document.getElementById("at" + index)?.appendChild(newBeschreibung);
    
        let newPreis: HTMLElement = document.createElement("p");
    
        newPreis.innerHTML = "<hr><p>" + instrumente[index].preis + " €</p>";
        document.getElementById("at" + index)?.appendChild(newPreis);
    
        let newButton: HTMLInputElement = document.createElement("input");
        newButton.setAttribute("class", "in_den_einkaufswagen");
        document.getElementById("at" + index)?.appendChild(newButton);
        newButton.value = "In den Einkaufswagen";
        newButton.type = "submit";
        newButton.addEventListener("click", zaehler);
        newButton.setAttribute("preis", instrumente[index].preis.toString());
        

    }

    let warenzaehler: number = 0;
    let preis: number = 0;
    //let anzahldiv: HTMLElement = document.createElement("div");
    let anzahl: HTMLElement = document.createElement("p");
    anzahl.setAttribute("id", "artikelzaehler");

    document.getElementById("ti_listener")?.addEventListener("click", verstecken1);
    document.getElementById("bi_listener")?.addEventListener("click", verstecken2);
    document.getElementById("alles")?.addEventListener("click", verstecken3);

    function zaehler(_event: Event): void {
        warenzaehler++;
        anzahl.innerHTML = warenzaehler.toString();
        //console.log(warenzaehler);

        preis += parseInt((<HTMLInputElement>_event.target)?.getAttribute("preis")!);
        console.log(preis + "€");
        document.getElementById("wagen")?.appendChild(anzahl);
    }

    function verstecken1 (_event: Event): void {

        (<HTMLElement>document.getElementById("bi_artikel")).style.display = "none";
        (<HTMLElement>document.getElementById("h_bi")).style.display = "none";
        (<HTMLElement>document.getElementById("ti_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_ti")).style.display = "block";

        }

    function verstecken2 (_event: Event): void {

        (<HTMLElement>document.getElementById("ti_artikel")).style.display = "none";
        (<HTMLElement>document.getElementById("h_ti")).style.display = "none";
        (<HTMLElement>document.getElementById("bi_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_bi")).style.display = "block";

    }

    function verstecken3 (_event: Event): void {

        (<HTMLElement>document.getElementById("bi_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_bi")).style.display = "block";
        (<HTMLElement>document.getElementById("ti_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_ti")).style.display = "block";

    }
       
}
