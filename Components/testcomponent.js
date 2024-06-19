import { defineCustomElement } from "vue";

export const TestComponent = defineCustomElement({
    props: {},
    emits: {},
    template: `<h3>My Test Component</h3>`,
    styles: [`/* inlined css */`],
});
