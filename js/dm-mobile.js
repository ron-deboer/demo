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
    window.onmessage = (event) => {
        console.log(event.data);
        document.querySelector(event.data.currPage).classList.toggle("hide");
        document.querySelector(event.data.nextPage).classList.toggle("hide");
    };
}
