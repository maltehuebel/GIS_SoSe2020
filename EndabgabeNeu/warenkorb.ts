namespace Endabgabe {
    interface Produkt {
        url: string;
        name: string;
        preis: number;
    }
    //Daten aus LocalStorage laden
    let eisSorten: Produkt[] = JSON.parse((localStorage.getItem("produkt")!));
    seitenaufbau();
    function seitenaufbau(): void {
        for (let index: number = 0; index < eisSorten.length; index++) {
            //neues Div
            let getDiv: HTMLElement = document.getElementById("eis")!;
            let newDiv: HTMLElement = document.createElement("div");
            newDiv.setAttribute("class", "eisdiv");
            newDiv.id = "eisdiv" + index;
            getDiv.appendChild(newDiv);
            //neues Bild
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", eisSorten[index].url);
            newBild.id = "eisbild";
            newBild.innerHTML = eisSorten[index].url;
            newDiv.appendChild(newBild);
            //neuer Titel
            let newTitel: HTMLElement = document.createElement("p");
            newTitel.innerHTML = eisSorten[index].name;
            newDiv.appendChild(newTitel);
            //neuer Button
            let newButton: HTMLInputElement = document.createElement("input");
            newButton.addEventListener("click", entfernen.bind(eisSorten[index]));
            newButton.setAttribute("index", index.toString());
            newButton.value = "Entfernen";
            newButton.type = "button";
            newDiv.appendChild(newButton);
        }
        //Preis berechnen
        let gesamtPreis: number = 0;
        for (let index: number = 0; index < eisSorten.length; index++) {
            gesamtPreis += eisSorten[index].preis;
        }
        let gesPr: HTMLElement = document.createElement("h2");
        gesPr.id = "kundenPreis";
        gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
        document.getElementById("gesamtPreis")?.appendChild(gesPr);
        //Produkt entfernen
        function entfernen(this: Produkt, _event: Event): void {
            let index: string = (<HTMLInputElement>_event.target)?.getAttribute("index")!;
            document.getElementById("eisdiv" + index)?.remove();
            eisSorten.splice(parseInt(index), 1);
            localStorage.setItem("produkt", JSON.stringify(eisSorten));
            location.reload();
        }
        document.getElementById("alleEntfernen")?.addEventListener("click", alleEntfernen);
        function alleEntfernen(_event: Event): void {
            document.getElementById("produkte")?.remove();
            localStorage.clear();
            location.reload();
        }
    }
}