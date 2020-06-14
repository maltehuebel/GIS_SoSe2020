"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response;
        let instrumenteJSON;
        response = await fetch(_url);
        console.log("Response", response);
        instrumenteJSON = await response.text();
        console.log(JSON.parse(instrumenteJSON));
        seitenaufbau(JSON.parse(instrumenteJSON));
    }
    communicate("test.json");
    function seitenaufbau(instrumente) {
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
            newPreis.innerHTML = "<hr><p>" + instrumente[index].preis + " €</p>";
            document.getElementById("at" + index)?.appendChild(newPreis);
            let newButton = document.createElement("input");
            newButton.setAttribute("class", "in_den_einkaufswagen");
            document.getElementById("at" + index)?.appendChild(newButton);
            newButton.value = "In den Einkaufswagen";
            newButton.type = "submit";
            newButton.addEventListener("click", zaehler.bind(instrumente[index]));
            //newButton.addEventListener("click", zwischenspeichern);
            newButton.setAttribute("name", JSON.stringify(instrumente[index]));
            //newButton.setAttribute("id", );
        }
    }
    /*let nameTest: string = "";
    
    function zwischenspeichern (_event: Event): void {
    
    localStorage.setItem(nameTest, (<HTMLInputElement>_event.target)?.getAttribute("name")!);
    }
    (<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("name")!;*/
    //localStorage.setItem("name", "lolo");
    //nameTest = (<HTMLInputElement>_event.target)?.getAttribute("name")!;
    let warenzaehler = 0;
    let preis = 0;
    //let anzahldiv: HTMLElement = document.createElement("div");
    let anzahl = document.createElement("p");
    anzahl.setAttribute("id", "artikelzaehler");
    document.getElementById("ti_listener")?.addEventListener("click", verstecken1);
    document.getElementById("bi_listener")?.addEventListener("click", verstecken2);
    document.getElementById("alles")?.addEventListener("click", verstecken3);
    function zaehler(_event) {
        warenzaehler++;
        anzahl.innerHTML = warenzaehler.toString();
        //console.log(warenzaehler);
        //preis += parseInt((<HTMLInputElement>_event.target)?.getAttribute("preis")!);
        preis += this.preis;
        console.log(preis + "€");
        document.getElementById("wagen")?.appendChild(anzahl);
        //localStorage.setItem("nameTest", (<HTMLInputElement>_event.target)?.getAttribute("name")!);
        //(<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("name")!;
        //localStorage.getItem("nametest");
        //document.getElementById("ti_artikel")
        //(<HTMLElement>document.getElementById("ti_artikel")).innerHTML = localStorage.getItem("name")!;
        //document.getElementById("ti_artikel")?.appendChild(newDiv);
        localStorage.setItem("name", this.name);
        //localStorage.setItem("preis", (<HTMLInputElement>_event.target)?.getAttribute("preis")!);
        console.log(localStorage);
        //(<HTMLElement>document.getElementById("bi_artikel")).innerHTML = localStorage.getItem("name")!;
        //console.log(localStorage);
    }
    function verstecken1(_event) {
        document.getElementById("bi_artikel").style.display = "none";
        document.getElementById("h_bi").style.display = "none";
        document.getElementById("ti_artikel").style.display = "inline-grid";
        document.getElementById("h_ti").style.display = "block";
    }
    function verstecken2(_event) {
        document.getElementById("ti_artikel").style.display = "none";
        document.getElementById("h_ti").style.display = "none";
        document.getElementById("bi_artikel").style.display = "inline-grid";
        document.getElementById("h_bi").style.display = "block";
    }
    function verstecken3(_event) {
        document.getElementById("bi_artikel").style.display = "inline-grid";
        document.getElementById("h_bi").style.display = "block";
        document.getElementById("ti_artikel").style.display = "inline-grid";
        document.getElementById("h_ti").style.display = "block";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map