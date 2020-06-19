//(<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("name")!;
//(<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("preis")!;

//console.log(localStorage);

interface Artikel {
    url: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: number;

}

let instrumente: Artikel[] = JSON.parse((localStorage.getItem("name")!));
console.log(instrumente);

seitenaufbau();

function seitenaufbau(): void {

    for (let index: number = 0; index < instrumente.length; index++) {

        let newDiv: HTMLElement = document.createElement("div");
        newDiv.id = "at" + index;

        if (instrumente[index].kategorie == 0) {
            document.getElementById("ew_artikel")?.appendChild(newDiv);
            newDiv.setAttribute("class", "tasteninstrumente");

        }

        if (instrumente[index].kategorie == 1) {
            document.getElementById("ew_artikel")?.appendChild(newDiv);
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
        newButton.addEventListener("click", entfernen.bind(instrumente[index]));
        newButton.setAttribute("index", index.toString());
        //newButton.addEventListener("click", zwischenspeichern);
        newButton.setAttribute("name", JSON.stringify(instrumente[index]));
        //newButton.setAttribute("id", );
    }
    
}

let gesamtPreis: number = 0;
for (let index: number = 0; index < instrumente.length; index++) {
    gesamtPreis += instrumente[index].preis;
}
let gesPr = document.createElement("h2");
gesPr.id = "scheißpreis"
gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
document.getElementById("gesamtPreis")?.appendChild(gesPr);



document.getElementById("alleenternen")?.addEventListener("click", alleEntfernen);

function alleEntfernen(this: Artikel, _event: Event): void {
    document.getElementById("ew_artikel")?.remove();
    localStorage.clear();
    instrumente.splice(0);

    let gesPr = document.createElement("h2");
    gesPr.innerHTML = "Preis: 0€";
    document.getElementById("gesamtPreis")?.appendChild(gesPr);

    document.getElementById("scheißpreis")?.remove();

}


function entfernen(_event: Event): void {
    let index: string = (<HTMLInputElement>_event.target)?.getAttribute("index")!;
    document.getElementById("at" + index)?.remove();

    instrumente.splice(parseInt(index), 1);
    
    console.log(instrumente);
    localStorage.setItem("name", JSON.stringify(instrumente));

    location.reload();

}


