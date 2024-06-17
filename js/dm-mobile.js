"use strict";
class EventBus {
    constructor(description = "") {
        this.eventTarget = document.appendChild(
            document.createComment(description)
        );
    }
    on(type, listener) {
        this.eventTarget.addEventListener(type, listener);
    }
    once(type, listener) {
        this.eventTarget.addEventListener(type, listener, { once: true });
    }
    off(type, listener) {
        this.eventTarget.removeEventListener(type, listener);
    }
    emit(type, detail) {
        return this.eventTarget.dispatchEvent(
            new CustomEvent(type, { detail })
        );
    }
}
const $$ = (el) => {
    return document.getElementById(el);
};
const app = {
    eventBus: new EventBus("app-event-bus"),
    navigate(currPage, nextPage) {
        app.eventBus.emit("navigate", { currPage, nextPage });
    },
    login() {
        this.navigate("#login", "#nav");
    },
    openModal: function (id) {
        const pg = $$(id);
        $$("modal-overlay").style.top = pg.offsetTop + "px";
        $$("modal-overlay").style.left = pg.offsetLeft + "px";
        $$("modal-overlay").classList.toggle("open");
    },
    closeModal: function () {
        $$("modal-overlay").classList.toggle("open");
    },
    renderForm: function (formId, data) {
        const frm = document.getElementById(formId);
        for (let prop in data) {
            hyd(frm, prop, data[prop]);
        }
    },
    buildTable(data) {
        let html = '<table class="dm-table">';
        for (let key in data) {
            html += `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
        }
        html +=
            '</table><button class="dm-button mt-1" onclick="app.closeModal()">Close</button>';
        return html;
    },
};

window.addEventListener("load", function (e) {
    loadMap(); // to prevent ui freeze
    loadListeners();
});

function loadListeners() {
    app.eventBus.on("navigate", ({ detail }) => {
        document.querySelector(detail.currPage).classList.toggle("hide");
        document.querySelector(detail.nextPage).classList.toggle("hide");
        return;
    });
}
function loadMap() {
    // use 'setTimeout' to prevent ui freeze
    setTimeout(function () {
        $$("ifMap").src =
            "https://www.openstreetmap.org/export/embed.html?bbox=142.77832031250003%2C-38.90385833966777%2C146.21154785156253%2C-36.98719701173417&amp;layer=mapnik";
    }, 100);
}
