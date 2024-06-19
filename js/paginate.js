import { app } from "./main.js";

// paginate block
const paginateTemplate = `<div id=paginate class="float-right" style="font-size: 1.5rem">
            <span @click="prev"> &nbsp; Prev &nbsp; </span> {{ page }}
            <span @click="next"> &nbsp; Next &nbsp; </span>
        </div>`;

export default {
    props: ["page"],
    data() {
        return {
            sortColumn: "",
            order: "ASC",
            searchString: "",
        }
    },
    template: template,
    ...
}

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
