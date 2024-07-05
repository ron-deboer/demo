import { h, render } from './preact_latest.module.js'
import { useEffect, useState } from './preact_hooks.module.js?'
import { html } from './preact_index.module.js'
/************************************************************
 * 
 */
const template = html`
    <table>
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
            ${rows.map(team => (html`
                <tr key=${team.id}>
                    <td>${team.name}</td>
                    <td>${team.city}</td>
                    <td>${team.state}</td>
                    <td>${team.venue}</td>
                    <td>${team.league}</td>
                </tr>
            `))}
        </tbody>
    </table>
    <div>
        <div id="paginate" class="float-right" style="font-size:1.5rem;">
            <span onClick=${prevPage}>  ◀  </span>
                ${page} 
            <span onClick=${nextPage}>  ▶  </span>
        </div>
    </div>
`;

const TeamsController = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState([]);
    const [allRows, setAllRows] = useState([]);

    let control = {
        perPage: 9,
        filter: "",
        data: [],
    };

    useEffect(async () => {
        const resp = await fetch('api/Team');
        control.data = await resp.json();
        setTimeout(function () {
            setAllRows(control.data);
            app.eventBus.on('filter', (data) => {
                filterLeague(data.detail);
            });
        }, 10);
    }, []);

    useEffect(() => {
        if (allRows.length > 0) {
            setLoading(false);
            showPage(page);
        }
    }, [allRows]);

    const filterLeague = (league) => {
        if (league == 'ALL') {
            setAllRows(control.data);
            return;
        }
        setAllRows(
            control.data.filter((t) => { return t.league == league })
        );
    };

    const showPage = (pg) => {
        const idx1 = (pg - 1) * control.perPage;
        const idx2 = Math.min(idx1 + control.perPage, allRows.length);
        let arr = [];
        for (let i = idx1; i < idx2; i++) {
            arr.push(allRows[i]);
        }
        setRows(arr);
    };

    const prevPage = () => {
        if (page > 1) {
            const pg = page - 1;
            showPage(pg);
            setPage(pg);
        }
    };

    const nextPage = () => {
        if (page < Math.ceil(allRows.length / control.perPage)) {
            const pg = page + 1;
            showPage(pg);
            setPage(pg);
        }
    }

    if (loading) {
        return html`<h4>loading...</h4>`;
    }

    if (rows.length == 0) {
        return html`<h4>No matching data...</h4>`;
    }

    return template;
};
render(html`<${TeamsController} />`, $$('teams'));
