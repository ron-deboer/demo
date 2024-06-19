import { LitElement, html, css } from "../js/lit-element.js";
import { app } from "../js/main.js";
export default class NavBar extends LitElement {
    static properties = {};

    constructor() {
        super();
    }

    click(ev) {}

    render() {
        return html`
            <style>
                .navigation {
                    background: #f4f5f6;
                    border-bottom: 0.1rem solid #d1d1d1;
                    display: block;
                    height: 5.2rem;
                    left: 0;
                    max-width: 100%;
                    width: 100%;
                }
                .navigation .container {
                    padding-bottom: 0;
                    padding-top: 0;
                }
                .navigation .navigation-list {
                    list-style: none;
                    margin-bottom: 0;
                    /*margin-right:5rem*/
                }
                @media (min-width: 80rem) {
                    .navigation .navigation-list {
                        margin-right: 0;
                    }
                }
                .navigation .navigation-item {
                    float: left;
                    margin-bottom: 0;
                    margin-left: 2.5rem;
                    position: relative;
                }
                .navigation .img {
                    fill: #9b4dca;
                    height: 2rem;
                    position: relative;
                    top: 0.3rem;
                }
                .navigation .navigation-title,
                .navigation .title {
                    color: #9b4dca;
                    position: relative;
                }
                .navigation .navigation-link,
                .navigation .navigation-title,
                .navigation .title {
                    display: inline;
                    font-size: 1.6rem;
                    line-height: 5.2rem;
                    padding: 0;
                    text-decoration: none;
                }
                .navigation .navigation-link.active {
                    color: #606c76;
                }
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
                            <a class="navigation-link" href="Teams">Teams</a>
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
                                href="Login"
                                >Login</a
                            >
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
