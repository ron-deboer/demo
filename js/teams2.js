/************************************************************
 * TEAMS LISTING
 */
import { defineCustomElement } from "vue";

const template = `
    <div v-if="allRows.length === 0">No data available.</div>
    <div v-else>
        <table class="table">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Venue</th>
                    <th>League</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(team, index) in rows" :key="index">
                    <td>{{ team.name }}</td>
                    <td>{{ team.city }}</td>
                    <td>{{ team.state }}</td>
                    <td>{{ team.venue }}</td>
                    <td>{{ team.league }}</td>
                </tr>
            </tbody>
        </table>
        <div>
            <div id="paginate" class="float-right" style="font-size:1.5rem;">
                <span @click="prevPage">  ◀  </span>
                    {{ page }}
                <span @click="nextPage">  ▶  </span>
            </div>
        </div>
    </div>
`;

const TeamsList = defineCustomElement({
    name: 'TeamsList',
    shadowRoot: false,
    data() {
        return {
            page: 1,
            perPage: 9,
            rows: [],           // current page data rows
            allRows: [],        // all data rows
            filteredRows: [],   // filtered data rows            
            filter: "",
        };
    },

    async mounted() {
        const resp = await fetch('api/Team');
        setTimeout(async () => {
            this.allRows = await resp.json();
            this.filteredRows = this.allRows;
            this.showPage(1);
            app.eventBus.on('filter', (data) => {
                this.filterLeague(data.detail);
            });
        }, 10);
    },

    methods: {
        showPage(pg) {
            const idx1 = (pg - 1) * this.perPage;
            const idx2 = Math.min(idx1 + this.perPage, this.filteredRows.length);
            this.rows = [];
            for (let i = idx1; i < idx2; i++) {
                this.rows.push(this.filteredRows[i]);
            }
        },
        prevPage() {
            this.page = Math.max(1, --this.page);
            this.showPage(this.page);
        },
        nextPage() {
            if (this.page < Math.ceil(this.filteredRows.length / this.perPage)) {
                this.page++;
                this.showPage(this.page);
            }
        },

        filterLeague(league) {
            if (league == 'ALL') {
                this.filteredRows = this.allRows;
                this.showPage(1);
                return;
            }
            this.filteredRows = this.allRows.filter((t) => { return t.league == league });
            this.showPage(1);
        }
    },
    template: template,
});

// define custom element
customElements.define('teams-list', TeamsList);
app.attachCssToShadow('teams-list');