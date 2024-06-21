import { createApp } from "./vue.esm-browser.js";

const App = createApp({
    data() {
        return {
            count: 0,
        };
    },
});

App.mount("#app");
