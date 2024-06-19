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
//
const app = {
    eventBus: new EventBus("app-event-bus"),
    login: async function () {
        if (!document.cookie) {
            document.location.href = "Login";
            return;
        }
        // logout
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(
                    /=.*/,
                    "=;expires=" + new Date().toUTCString() + ";path=/"
                );
        });
        document.location.href = "Home";
    },
    render: function (el, html) {
        document.getElementById(el).innerHTML = html;
    },
    openModal: function (id) {
        document.getElementById("modal-overlay").style.display = "flex";
    },
    closeModal: function () {
        document.getElementById("modal-overlay").style.display = "none";
    },
    renderForm: function (formId, data) {
        const frm = document.getElementById(formId);
        for (let prop in data) {
            hyd(frm, prop, data[prop]);
        }
    },
};
//
String.prototype.firstWord = function () {
    return this.replace(/\s.*/, "");
};

//
function hyd(frm, prop, data) {
    frm.querySelector("#" + prop).value = data;
}
function $val(id) {
    return document.getElementById(id).value;
}

//
document.addEventListener("DOMContentLoaded", function () {
    if (document.cookie) {
        document.getElementById("navlogin").innerText = "Logout";
    }
});

// main Vue application handler
// import { TestComponent } from "../Components/testcomponent.js";
// customElements.define("test-component", TestComponent);

// import { createApp } from "vue";

// createApp({
//     data() {
//         return {
//             message: "Hello Vue!",
//         };
//     },
// }).mount(document.body);

export { app };
