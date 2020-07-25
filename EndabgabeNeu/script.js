"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Daten aus JSON laden
    async function getJson(_url) {
        let response;
        let artikelJson;
        response = await fetch(_url);
        artikelJson = await response.text();
        seitenAufbau(JSON.parse(artikelJson));
    }
    getJson("artikel.json");
    function seitenAufbau(_eisSorten) {
        for (let index = 0; index < _eisSorten.length; index++) {
            //neues Div
            let getDiv = document.getElementById("eis");
            let getDiv2 = document.getElementById("waffeln");
            let getDiv3 = document.getElementById("topping");
            let newDiv = document.createElement("div");
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
            let newBild = document.createElement("img");
            newBild.setAttribute("src", _eisSorten[index].url);
            newBild.id = "eisbild";
            newBild.innerHTML = _eisSorten[index].url;
            newDiv.appendChild(newBild);
            //neuer Titel
            let newTitel = document.createElement("p");
            newTitel.innerHTML = _eisSorten[index].name;
            newDiv.appendChild(newTitel);
            //neuer Preis
            let newPreis = document.createElement("p");
            newPreis.innerHTML = _eisSorten[index].preis.toString() + "€";
            newDiv.appendChild(newPreis);
            //neuer Button
            let newButton = document.createElement("input");
            newButton.addEventListener("click", setLocalstorgae.bind(_eisSorten[index]));
            newButton.addEventListener("click", getPreis.bind(_eisSorten[index]));
            newButton.setAttribute("index", index.toString());
            newButton.value = "Kaufen";
            newButton.type = "button";
            newDiv.appendChild(newButton);
        }
        //Visueller Einkaufswagen
        let preis = 0;
        let preisHtml = document.createElement("p");
        document.getElementById("bestellenbutton")?.setAttribute("onclick", "window.location.href='warenkorb.html'");
        function getPreis(_event) {
            preis += this.preis;
            preisHtml.innerHTML = "Preis: " + preis.toString() + "€";
            let bildHtml = document.createElement("img");
            bildHtml.id = "cartbild";
            bildHtml.src = this.url;
            let cartDiv = document.createElement("div");
            cartDiv.appendChild(bildHtml);
            document.getElementById("cartgrid")?.appendChild(cartDiv);
            document.getElementById("cart")?.appendChild(preisHtml);
        }
        //Produkte in LocalStorage
        let warenkorb = new Array;
        function setLocalstorgae(_event) {
            warenkorb.push(this);
            localStorage.setItem("produkt", JSON.stringify(warenkorb));
            console.log(localStorage);
        }
        //Kategorieauswahl
        document.getElementById("waffelbutton")?.addEventListener("click", verstecken1);
        document.getElementById("waffeln").style.display = "none";
        document.getElementById("topping").style.display = "none";
        function verstecken1(_event) {
            document.getElementById("eis").style.display = "none";
            document.getElementById("waffeln").style.display = "inline-grid";
            document.getElementById("topping").style.display = "none";
        }
        document.getElementById("eisbutton")?.addEventListener("click", verstecken2);
        function verstecken2(_event) {
            document.getElementById("eis").style.display = "inline-grid";
            document.getElementById("waffeln").style.display = "none";
            document.getElementById("topping").style.display = "none";
        }
        document.getElementById("toppingbutton")?.addEventListener("click", verstecken3);
        function verstecken3(_event) {
            document.getElementById("eis").style.display = "none";
            document.getElementById("waffeln").style.display = "none";
            document.getElementById("topping").style.display = "inline-grid";
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map