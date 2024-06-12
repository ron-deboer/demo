const $$ = (el) => {
    return document.getElementById(el);
};
const app = {
    navigate(currPage, nextPage) {
        window.postMessage({ msg: "navigate", currPage, nextPage });
    },
    login() {
        this.navigate("#login", "#nav");
    },
};

window.addEventListener("load", function (e) {
    loadListeners();
});

function loadListeners() {
    loadMap();
    window.onmessage = (event) => {
        document.querySelector(event.data.currPage).classList.toggle("hide");
        document.querySelector(event.data.nextPage).classList.toggle("hide");
    };
}
function loadMap() {
    setTimeout(function () {
        $$("ifMap").src =
            "https://www.openstreetmap.org/export/embed.html?bbox=142.77832031250003%2C-38.90385833966777%2C146.21154785156253%2C-36.98719701173417&amp;layer=mapnik";
    }, 100);
}
