namespace Endabgabe {
    interface Produkt {
        url: string;
        name: string;
        preis: number;
        kategorie: string;
    }
    //Daten aus JSON laden
    async function getJson(_url: RequestInfo): Promise<void> {
        let response: Response;
        let artikelJson: string;
        response = await fetch(_url);
        artikelJson = await response.text();
        seitenAufbau(JSON.parse(artikelJson));
    }
    getJson("artikel.json");
    function seitenAufbau(_eisSorten: Produkt[]): void {
        for (let index: number = 0; index < _eisSorten.length; index++) {
            //neues Div
            let getDiv: HTMLElement = document.getElementById("eis")!;
            let getDiv2: HTMLElement = document.getElementById("waffeln")!;
            let getDiv3: HTMLElement = document.getElementById("topping")!;
            let newDiv: HTMLElement = document.createElement("div");

            if (_eisSorten[index].kategorie == "eis") {
                newDiv.setAttribute("class", "eisdiv");
                newDiv.id = "eisdiv" + index;
                getDiv.appendChild(newDiv);
            }
            if (_eisSorten[index].kategorie == "waffel") {
                newDiv.setAttribute("class", "eisdiv");
                newDiv.id = "eisdiv" + index;
                getDiv2.appendChild(newDiv);
            }
            if (_eisSorten[index].kategorie == "topping") {
                newDiv.setAttribute("class", "eisdiv");
                newDiv.id = "eisdiv" + index;
                getDiv3.appendChild(newDiv);
            }
            //neues Bild
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", _eisSorten[index].url);
            newBild.id = "eisbild";
            newBild.innerHTML = _eisSorten[index].url;
            newDiv.appendChild(newBild);
            //neuer Titel
            let newTitel: HTMLElement = document.createElement("p");
            newTitel.innerHTML = _eisSorten[index].name;
            newDiv.appendChild(newTitel);
            //neuer Preis
            let newPreis: HTMLElement = document.createElement("p");
            newPreis.innerHTML = _eisSorten[index].preis.toString() + "€";
            newDiv.appendChild(newPreis);
            //neuer Button
            let newButton: HTMLInputElement = document.createElement("input");
            newButton.addEventListener("click", setLocalstorgae.bind(_eisSorten[index]));
            newButton.addEventListener("click", getPreis.bind(_eisSorten[index]));
            newButton.setAttribute("index", index.toString());
            newButton.value = "Kaufen";
            newButton.type = "button";
            newDiv.appendChild(newButton);
        }
        //Visueller Einkaufswagen
        let preis: number = 0;
        let preisHtml: HTMLElement = document.createElement("p");
        document.getElementById("bestellenbutton")?.setAttribute("onclick", "window.location.href='warenkorb.html'");
        function getPreis(this: Produkt, _event: Event): void {
            preis += this.preis;
            preisHtml.innerHTML = "Preis: " + preis.toString() + "€";
            let bildHtml: HTMLImageElement = document.createElement("img");
            bildHtml.id = "cartbild";
            bildHtml.src = this.url;
            let cartDiv: HTMLElement = document.createElement("div");
            cartDiv.appendChild(bildHtml);
            document.getElementById("cartgrid")?.appendChild(cartDiv);
            document.getElementById("cart")?.appendChild(preisHtml);
        }
        //Produkte in LocalStorage
        let warenkorb: Produkt[] = new Array;
        function setLocalstorgae(this: Produkt, _event: Event): void {
            warenkorb.push(this);
            localStorage.setItem("produkt", JSON.stringify(warenkorb));
            console.log(localStorage);
        }
        //Kategorieauswahl
        document.getElementById("waffelbutton")?.addEventListener("click", verstecken1);
        (<HTMLElement>document.getElementById("waffeln")).style.display = "none";
        (<HTMLElement>document.getElementById("topping")).style.display = "none";
        function verstecken1(_event: Event): void {
            (<HTMLElement>document.getElementById("eis")).style.display = "none";
            (<HTMLElement>document.getElementById("waffeln")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("topping")).style.display = "none";
        }
        document.getElementById("eisbutton")?.addEventListener("click", verstecken2);
        function verstecken2(_event: Event): void {
            (<HTMLElement>document.getElementById("eis")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("waffeln")).style.display = "none";
            (<HTMLElement>document.getElementById("topping")).style.display = "none";
        }
        document.getElementById("toppingbutton")?.addEventListener("click", verstecken3);
        function verstecken3(_event: Event): void {
            (<HTMLElement>document.getElementById("eis")).style.display = "none";
            (<HTMLElement>document.getElementById("waffeln")).style.display = "none";
            (<HTMLElement>document.getElementById("topping")).style.display = "inline-grid";
        }
    }
}