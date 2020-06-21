namespace Aufgabe08 {
document.getElementById("hammerknopf")?.addEventListener("click", ausgeben);


async function ausgeben(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gismalteshesh.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    console.log(query.toString());
    await fetch(url);
    for (let entry of query) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);

    }
}
}