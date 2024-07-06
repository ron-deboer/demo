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
    render: function (el, html) {
        document.getElementById(el).innerHTML = html;
    },
    openModal: function (id) {
        document.getElementById("modal-overlay").style.display = "block";
    },
    closeModal: function () {
        document.getElementById("modal-overlay").style.display = "none";
    },
    renderForm: function (formId, data) {
        const frm = $$(formId);
        for (let prop in data) {
            frm.querySelector("#" + prop).value = data;
        }
    },
    attachCssToShadow: function (elName) {
        document.querySelectorAll(elName).forEach((element) => {
            if (!element.shadowRoot) {
                return;
            }
            const sl1 = document.createElement('link');
            sl1.setAttribute('rel', 'stylesheet');
            sl1.setAttribute('href', '/demo/css/style.css');
            element.shadowRoot.appendChild(sl1);
            const sl2 = document.createElement('link');
            sl2.setAttribute('rel', 'stylesheet');
            sl2.setAttribute('href', '/demo/css/milligram.min.css');
            element.shadowRoot.appendChild(sl2);
        });
    }
};
//
String.prototype.firstWord = function () {
    return this.replace(/\s.*/, "");
};
function $$(id) {
    return document.getElementById(id);
}
function $val(id) {
    return $$(id).value;
}
document.addEventListener("DOMContentLoaded", function () {
    if (document.cookie) {
        document.getElementById("navlogin").innerText = "Logout";
    }
});
