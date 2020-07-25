namespace Endabgabe {
    document.getElementById("send")?.addEventListener("click", ausgeben);
    async function ausgeben(): Promise<void> {
        let url: string = "http://localhost:8100/";
        let query: URLSearchParams = new URLSearchParams(<any>localStorage);
        url = url + "?" + query.toString();
        await fetch(url);
    }
}
