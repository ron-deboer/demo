import { LitElement, html, css } from "../js/lit-element.js";

export default class NavBar extends LitElement {
    static properties = {};

    constructor() {
        super();
    }

    async handleLogin(ev) {
        ev.preventDefault();
        // login
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
    }

    render() {
        return html`
            <style>
            @import url('./css/navbar.css')
            </style>
            <nav class="navigation">
                <section class="container">
                    <a class="navigation-title" href="/demo">
                        <h1 class="title">DE BOER</h1>
                    </a>
                    <ul class="navigation-list float-right">
                        <li class="navigation-item">
                            <a class="navigation-link" href="/demo">Home</a>
                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="Dashboard"
                                >Dashboard</a
                            >
                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="#popover-teams" data-popover>Teams</a>
                            
                            <div class="popover" id="popover-teams">
                                <ul class="popover-list">
                                    <li class="popover-item">
                                        <a class="popover-link" href="Teams" title="Teams List">Teams List</a>
                                    </li>
                                    <li class="popover-item">
                                        <a class="popover-link" href="source/vue" title="Vue3 Source">Vue3 Source</a>
                                    </li>
                                    <li class="popover-item">
                                        <a class="popover-link" href="source/react" title="React Source">React Source</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="Country"
                                >Countries</a
                            >
                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="Restricted"
                                >Restricted</a
                            >
                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="mobile.html"
                                >Mobile</a
                            >
                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="About">About</a>
                        </li>
                        <li class="navigation-item">
                            <a class="navigation-link" href="Cv">CV</a>
                        </li>
                        <li class="navigation-item">
                            <a
                                id="navlogin"
                                class="navigation-link"
                                href="#"
                                @click="${this.handleLogin}">
                                Login
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define("nav-bar", NavBar);

setTimeout(() => {
    (() => {
        'use strict'

        const $popoverLinks = document.querySelectorAll('[data-popover]')
        const $popovers = document.querySelectorAll('.popover')
        for (let index = 0; index < $popoverLinks.length; index++) {
            $popoverLinks[index].addEventListener('click', openPopover)
        }

        document.addEventListener('click', closePopover)

        function closePopover(event) {
            for (let index = 0; index < $popovers.length; index++) {
                $popovers[index].classList.remove('popover-open')
            }
        }

        function openPopover(event) {
            event.preventDefault()
            if (
                document
                    .querySelector(this.getAttribute('href'))
                    .classList.contains('popover-open')
            ) {
                document
                    .querySelector(this.getAttribute('href'))
                    .classList.remove('popover-open')
            } else {
                closePopover()
                document
                    .querySelector(this.getAttribute('href'))
                    .classList.add('popover-open')
            }
            event.stopImmediatePropagation()
        }
    })()
}, 1000);
