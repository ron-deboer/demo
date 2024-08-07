<div class="container">
    <div class="flex">
        <div><h3>Teams</h3></div>
        <div class="flex">
            <div><h5 class="mr-1">League</h5></div>
            <div>
                <select onchange="(() => {app.eventBus.emit('filter', this.value);})()">
                    <option value="ALL">ALL</option>
                    <option value="MLB">MLB</option>
                    <option value="NBA">NBA</option>
                    <option value="NFL">NFL</option>
                    <option value="NHL">NHL</option>
                </select>
            </div>
        </div>
    </div>
    <div id="teams"></div>
</div>

<script src="js/teams.js" type="module"></script>
