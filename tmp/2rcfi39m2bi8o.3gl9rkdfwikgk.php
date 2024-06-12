<div class="container">
    <h3>Teams</h3>
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
        <tbody id="teams">
            <?php foreach (($teams?:[]) as $team): ?>
                <tr class="hide">
                    <td><?= ($team['name']) ?></td>
                    <td><?= ($team['city']) ?></td>
                    <td><?= ($team['state']) ?></td>
                    <td><?= ($team['venue']) ?></td>
                    <td><?= ($team['league']) ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div id="paginate"></div>
</div>

<script src="js/teams.js" type="module"></script>
