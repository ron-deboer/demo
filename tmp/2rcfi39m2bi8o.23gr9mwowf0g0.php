<style>
    @charset "UTF-8";
    .wrapper {
        width: 75%;
        display: flex;
        flex-direction: column;
    }
    .wrapper * {
        box-sizing: border-box;
    }
    .timeline {
        width: 100%;
        max-width: 800px;
        padding: 100px 50px;
        position: relative;
        background: #fff;
    }
    .timeline:before {
        content: "";
        position: absolute;
        top: 0px;
        left: calc(33% + 15px);
        bottom: 0;
        width: 4px;
        background: #ddd;
    }
    .timeline:after {
        content: "";
        display: table;
        clear: both;
    }

    .entry {
        clear: both;
        text-align: left;
        position: relative;
    }
    .entry .title {
        margin-bottom: 0.5em;
        float: left;
        width: 33%;
        padding-right: 30px;
        text-align: right;
        position: relative;
    }
    .entry .title:before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        border: 4px solid crimson;
        background-color: #fff;
        border-radius: 100%;
        top: 15%;
        right: -9px;
        z-index: 99;
    }
    .entry .title h3 {
        margin: 0;
        font-size: 120%;
    }
    .entry .title p {
        margin: 0;
        font-size: 100%;
    }
    .entry .body {
        margin: 0 0 3em;
        float: right;
        width: 66%;
        padding-left: 30px;
    }
    .entry .body p {
        line-height: 1.4em;
    }
    .entry .body p:first-child {
        margin-top: 0;
        font-weight: 400;
    }
    .entry .body ul {
        color: #aaa;
        padding-left: 0;
        list-style-type: none;
    }
    .entry .body ul li:before {
        content: "–";
        margin-right: 0.5em;
    }
</style>

<h3>CV Employment Timeline</h3>
<div class="wrapper" style="max-height: 800px; overflow-y: auto">
    <div class="timeline">
        <div class="entry">
            <div class="title">
                <h3>2014 - Present</h3>
                <p>Title, Company</p>
            </div>
            <div class="body">
                <p>
                    Voluptatibus veniam ea reprehenderit atque reiciendis non
                    laborum adipisci ipsa pariatur omnis.
                </p>
                <ul>
                    <li>Rerum sit libero possimus amet excepturi</li>
                    <li>
                        Exercitationem enim dolores sunt praesentium dolorum
                        praesentium
                    </li>
                    <li>
                        Modi aut dolores dignissimos sequi sit ut aliquid
                        molestias deserunt illo
                    </li>
                </ul>
            </div>
        </div>
        <div class="entry">
            <div class="title">
                <h3>2010 - Present</h3>
                <p>Title, Company</p>
            </div>
            <div class="body">
                <p>
                    Voluptatibus veniam ea reprehenderit atque reiciendis non
                    laborum adipisci ipsa pariatur omnis.
                </p>
                <ul>
                    <li>Rerum sit libero possimus amet excepturi</li>
                    <li>
                        Exercitationem enim dolores sunt praesentium dolorum
                        praesentium
                    </li>
                    <li>
                        Modi aut dolores dignissimos sequi sit ut aliquid
                        molestias deserunt illo
                    </li>
                </ul>
            </div>
        </div>
        <div class="entry">
            <div class="title">
                <h3>2009 - 2010</h3>
                <p>Title, Company</p>
            </div>
            <div class="body">
                <p>
                    Voluptatibus veniam ea reprehenderit atque reiciendis non
                    laborum adipisci ipsa pariatur omnis.
                </p>
                <ul>
                    <li>Rerum sit libero possimus amet excepturi</li>
                    <li>
                        Exercitationem enim dolores sunt praesentium dolorum
                        praesentium
                    </li>
                    <li>
                        Modi aut dolores dignissimos sequi sit ut aliquid
                        molestias deserunt illo
                    </li>
                </ul>
            </div>
        </div>
        <div class="entry">
            <div class="title">
                <h3>2006 - 2008</h3>
                <p>Title, Company</p>
            </div>
            <div class="body">
                <p>
                    Voluptatibus veniam ea reprehenderit atque reiciendis non
                    laborum adipisci ipsa pariatur omnis.
                </p>
                <ul>
                    <li>Rerum sit libero possimus amet excepturi</li>
                    <li>
                        Exercitationem enim dolores sunt praesentium dolorum
                        praesentium
                    </li>
                    <li>
                        Modi aut dolores dignissimos sequi sit ut aliquid
                        molestias deserunt illo
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
