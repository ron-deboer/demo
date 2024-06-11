import { createApp } from "./vue.esm-browser.js";

const app = createApp({
    data() {
        return {
            count: 0,
        };
    },
});

app.mount("#app");
