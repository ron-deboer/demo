<link rel="stylesheet" href="css/dm-mobile.css" />
<script src="js/dm-listitem.js" type="module"></script>
<script src="js/dm-pageheader.js" type="module"></script>

<div class="dm-wrapper">
    <div class="dm-page" id="welcome">
        <dm-page-header text="Welcome" href=""></dm-page-header>
        <div class="dm-content">
            <div class="welcome">
                <div class="label mt-6">Existing User ?</div>
                <div class="mb-4">
                    <a
                        href="javascript:app.navigate('#welcome', '#login')"
                        class="dm-button"
                        >Sign In</a
                    >
                </div>
                <div class="label">Don't have an account ?</div>
                <div>
                    <a href="#login" class="dm-button">Sign Up</a>
                </div>
            </div>
        </div>
        <div class="dm-footer">
            <h4>Page Footer</h4>
        </div>
    </div>

    <div class="dm-page hide" id="login">
        <dm-page-header text="Sign In" href="#welcome"></dm-page-header>
        <div class="dm-content">
            <form class="dm-form" onsubmit="javascript:return false;">
                <label for="username">User Name</label>
                <input
                    id="username"
                    class="username"
                    type="text"
                    name="username"
                    value="admin"
                    autocomplete="off"
                />
                <label for="password">Password</label>
                <input
                    id="password"
                    class="password"
                    type="password"
                    name="password"
                    value="admin"
                    autocomplete="off"
                /><br />
                <button onclick="app.login()" class="dm-button">Sign In</button>
            </form>
        </div>
        <div class="dm-footer">
            <h4>Page Footer</h4>
        </div>
    </div>

    <div class="dm-page hide" id="nav">
        <dm-page-header text="Nav" href=""></dm-page-header>
        <div>
            <ul class="dm-listview">
                <dm-list-item text="Page 1" href="#page1"></dm-list-item>
                <dm-list-item text="Page 2" href="#page2"></dm-list-item>
                <dm-list-item text="Page 3" href="#page3"></dm-list-item>
                <dm-list-item text="Page 4" href="#page4"></dm-list-item>
                <dm-list-item text="Page 5" href="#page5"></dm-list-item>
                <dm-list-item text="Page 6" href="#page6"></dm-list-item>
            </ul>
        </div>
        <div class="dm-footer bg-ddd">
            <a
                href="#"
                onclick="app.navigate('#nav', '#welcome')"
                class="dm-button"
            >
                Sign Out
            </a>
        </div>
    </div>

    <div class="dm-page hide" id="page1">
        <dm-page-header text="Page 1" href="#nav"></dm-page-header>
        <div class="dm-content text">Content</div>
        <div class="dm-footer">
            <h4>Page Footer</h4>
        </div>
    </div>

    <div class="dm-page hide" id="page2">
        <dm-page-header text="Page 2" href="#nav"></dm-page-header>
        <div class="dm-content">Content</div>
        <div class="dm-footer">
            <h4>Page Footer</h4>
        </div>
    </div>

    <div class="dm-page hide" id="page3">
        <dm-page-header text="Page 3" href="#nav"></dm-page-header>
        <div class="dm-content">Content</div>
        <div class="dm-footer">
            <h4>Page Footer</h4>
        </div>
    </div>

    <div class="dm-page hide" id="page4">
        <dm-page-header text="Page 4" href="#nav"></dm-page-header>
        <div class="dm-content">Content</div>
        <div class="dm-footer">
            <h4>Page Footer</h4>
        </div>
    </div>
</div>
<script src="js/dm-mobile.js"></script>
