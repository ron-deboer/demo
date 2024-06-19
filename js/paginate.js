import { app } from "./main.js";

// paginate block
const paginateTemplate = `
<style>
    #paginate span {
        color: #9b4dca;
        cursor: pointer;
    }
</style>
<div id=paginate class="float-right" style="font-size:1.5rem;cursor:pointer;">
    <span @click="prev"> &nbsp; Prev &nbsp; </span> {{ page }}
    <span @click="next"> &nbsp; Next &nbsp; </span>
</div>`;

new Vue({
    el: "#paginate",
    mounted() {},
    data: {
        page: 1,
    },
    methods: {
        prev() {
            this.page = Math.max(1, --this.page);
            app.eventBus.emit("page-change", this.page);
        },
        next() {
            this.page++;
            app.eventBus.emit("page-change", this.page);
        },
    },
    template: paginateTemplate,
});
