"use strict";
document.getElementById("ew_artikel").innerHTML = localStorage.getItem("name");
//(<HTMLElement>document.getElementById("ew_artikel")).innerHTML = localStorage.getItem("preis")!;
console.log(localStorage);
/*async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response;
    let instrumenteJSON: string;

    response = await fetch(_url);
    console.log("Response", response);
    instrumenteJSON = await response.text();
    console.log(JSON.parse(instrumenteJSON));
    //seitenaufbau(JSON.parse(instrumenteJSON));
}
communicate("test.json");*/
//# sourceMappingURL=wagen.js.map