namespace Prüfungsaufgabe {
    interface Produkte {
        url: string;
        name: string;
        preis: number;
    }
    let eisSorten: Produkte[] = JSON.parse((localStorage.getItem("produkt")!));
    console.log(eisSorten);
    seitenaufbau();
    function seitenaufbau(): void {
        for (let index: number = 0; index < eisSorten.length; index++) {
            //neues Div
            let getDiv: HTMLElement = document.getElementById("händlergrid")!;
            let newDiv: HTMLElement = document.createElement("div");
            newDiv.setAttribute("class", "eisdiv");
            newDiv.id = "händlerdiv" + index;
            getDiv.appendChild(newDiv);
            //neues Bild
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", eisSorten[index].url);
            newBild.id = "händlerbild";
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
            newButton.value = "X";
            newButton.type = "button";
            newDiv.appendChild(newButton);
        }
        //Umsatz berechnen
        let gesamtPreis: number = 0;
        for (let index: number = 0; index < eisSorten.length; index++) {
            gesamtPreis += eisSorten[index].preis;
        }
        let gesPr: HTMLElement = document.createElement("h2");
        gesPr.id = "händlerumsatz";
        gesPr.innerHTML = "Umsatz: " + gesamtPreis.toString() + "€";
        document.getElementById("umsatz")?.appendChild(gesPr);
        //Bestellung löschen
        function entfernen(this: Produkte, _event: Event): void {
            let index: string = (<HTMLInputElement>_event.target)?.getAttribute("index")!;
            document.getElementById("händlergrid" + index)?.remove();
            eisSorten.splice(parseInt(index), 1);
            localStorage.setItem("produkt", JSON.stringify(eisSorten));
            location.reload();
        }
        document.getElementById("entfernen")?.addEventListener("click", alleEntfernen);
        function alleEntfernen(_event: Event): void {
            document.getElementById("produkte")?.remove();
            localStorage.clear();
            location.reload();
        }
    }
}