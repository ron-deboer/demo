// team listing
new Vue({
    el: "#teams",
    mounted() {
        const _this = this;
        this.showPage(1);
        app.eventBus.on("page-change", function (ev) {
            console.log(ev.detail);
            _this.showPage(ev.detail);
        });
    },
    data: {
        page: 1,
        perPage: 9,
    },
    methods: {
        showPage(pgNum) {
            let rows = this.$el.children;
            const first = (pgNum - 1) * this.perPage;
            const last = Math.min(first + this.perPage, rows.length);
            for (let i = 0; i < rows.length; i++) {
                rows[i].classList.add("hide");
            }
            for (let i = first; i < last; i++) {
                rows[i].classList.toggle("hide");
            }
        },
    },
});

// paginate block
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
    template: `<div class="float-right paginate" style="font-size: 1.5rem">
            <span @click="prev"> &nbsp; Prev &nbsp; </span> {{ page }}
            <span @click="next"> &nbsp; Next &nbsp; </span>
        </div>`,
});
