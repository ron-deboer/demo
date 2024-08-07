<div class="container">
    <div id="country">
        <div class="flex">
            <div><h3>Countries</h3></div>
            <div class="flex">
                <div><h5 class="mr-1">Filter</h5></div>
                <div><input size="10" id="filter" @input="filterRows" /></div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Country</th>
                    <th>Size(KM)</th>
                    <th>Population</th>
                    <th>Continent</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach (($country?:[]) as $c): ?>
                    <tr class="hide">
                        <td><?= ($c['code']) ?></td>
                        <td><?= ($c['name']) ?></td>
                        <td><?= ($c['size']) ?></td>
                        <td><?= ($c['population']) ?></td>
                        <td><?= ($c['continent']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div id="paginate" class="hide"></div>
</div>

<script src="/demo/js/country.js" type="module"></script>
