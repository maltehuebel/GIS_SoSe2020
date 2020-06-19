namespace Aufgabe07 {

    interface Artikel {
        name: string;
        url: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
    }


    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response;
        let instrumenteJSON: string;

        response = await fetch(_url);
        console.log("Response", response);
        instrumenteJSON = await response.text();
        console.log(JSON.parse(instrumenteJSON));
        seitenaufbau(JSON.parse(instrumenteJSON));
    }
    communicate("test.json");

    function seitenaufbau(instrumente: Artikel[]): void {

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





    let warenzaehler: number = 0;
    let preis: number = 0;
    //let anzahldiv: HTMLElement = document.createElement("div");
    let anzahl: HTMLElement = document.createElement("p");

    let warenkorb: Artikel[] = new Array;
    anzahl.setAttribute("id", "artikelzaehler");

    document.getElementById("ti_listener")?.addEventListener("click", verstecken1);
    document.getElementById("bi_listener")?.addEventListener("click", verstecken2);
    document.getElementById("alles")?.addEventListener("click", verstecken3);



    function zaehler(this: Artikel, _event: Event): void {
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

        warenkorb.push(this);
        localStorage.setItem("name", JSON.stringify(warenkorb));
        


        //localStorage.setItem("name", this.name);
        //localStorage.setItem("preis", (<HTMLInputElement>_event.target)?.getAttribute("preis")!);
        //console.log(localStorage);
        //(<HTMLElement>document.getElementById("bi_artikel")).innerHTML = localStorage.getItem("name")!;
        //console.log(localStorage);


    }
    



    function verstecken1(_event: Event): void {

        (<HTMLElement>document.getElementById("bi_artikel")).style.display = "none";
        (<HTMLElement>document.getElementById("h_bi")).style.display = "none";
        (<HTMLElement>document.getElementById("ti_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_ti")).style.display = "block";

    }

    function verstecken2(_event: Event): void {

        (<HTMLElement>document.getElementById("ti_artikel")).style.display = "none";
        (<HTMLElement>document.getElementById("h_ti")).style.display = "none";
        (<HTMLElement>document.getElementById("bi_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_bi")).style.display = "block";

    }

    function verstecken3(_event: Event): void {

        (<HTMLElement>document.getElementById("bi_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_bi")).style.display = "block";
        (<HTMLElement>document.getElementById("ti_artikel")).style.display = "inline-grid";
        (<HTMLElement>document.getElementById("h_ti")).style.display = "block";

    }

}

