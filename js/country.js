// country listing
import { createApp } from "vue";

createApp({
    data() {
        return {
            page: 1,
            perPage: 9,
            rows: [],
            filter: "",
        };
    },

    methods: {
        showPage() {
            let pgNum = this.page;
            let rows = [];
            let indexes = [];
            for (let i = 0; i < this.rows.length; i++) {
                this.rows[i].classList.add("hide");
            }
            if (this.filter != "") {
                rows = Array.from(this.rows).filter((row, idx) => {
                    if (row.innerText.toUpperCase().includes(this.filter)) {
                        indexes.push(idx);
                        return true;
                    }
                });
                if (rows.length > 0) {
                    const first = (pgNum - 1) * this.perPage;
                    const last = Math.min(first + this.perPage, rows.length);
                    for (let i = first; i < last; i++) {
                        const idx = indexes[i];
                        this.rows[idx].classList.toggle("hide");
                    }
                }
            } else {
                rows = this.rows;
                const first = (pgNum - 1) * this.perPage;
                const last = Math.min(first + this.perPage, rows.length);
                for (let i = first; i < last; i++) {
                    rows[i].classList.toggle("hide");
                }
            }
            if (rows.length > this.perPage) {
                document.getElementById("paginate").classList.remove("hide");
            } else {
                document.getElementById("paginate").classList.add("hide");
            }
        },
        filterRows(ev) {
            this.filter = ev.target.value.toUpperCase();
            this.page = 1;
            this.showPage();
        },
    },

    mounted() {
        const _this = this;
        this.rows = $$("country").querySelector("tbody").children;
        this.showPage();
        app.eventBus.on("page-change", function (ev) {
            _this.page = Math.ceil(ev.detail);
            _this.showPage();
        });
    },
}).mount("#country");
