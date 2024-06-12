<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>deboer</title>
        <style>
            @font-face {
                font-family: "Roboto";
                src: url("./css/fonts/Roboto-Light.ttf") format("truetype");
                font-weight: normal;
                font-style: normal;
            }
        </style>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/milligram.min.css" />
        <link rel="stylesheet" href="css/nav.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <nav class="navigation">
            <section class="container">
                <a class="navigation-title" href="/demo">
                    <h1 class="title">DE BOER</h1>
                </a>
                <ul class="navigation-list float-right">
                    <li class="navigation-item">
                        <a class="navigation-link" href="/demo">Home</a>
                    </li>
                    <li class="navigation-item">
                        <a class="navigation-link" href="Dashboard"
                            >Dashboard</a
                        >
                    </li>
                    <li class="navigation-item">
                        <a class="navigation-link" href="Teams">Teams</a>
                    </li>
                    <li class="navigation-item">
                        <a class="navigation-link" href="Restricted"
                            >Restricted</a
                        >
                    </li>
                    <li class="navigation-item">
                        <a class="navigation-link" href="mobile.html">Mobile</a>
                    </li>
                    <li class="navigation-item">
                        <a class="navigation-link" href="About">About</a>
                    </li>
                    <li class="navigation-item">
                        <a class="navigation-link" href="Cv">CV</a>
                    </li>
                    <li class="navigation-item">
                        <a
                            id="navlogin"
                            class="navigation-link"
                            href="javascript:app.login();"
                            >Login</a
                        >
                    </li>
                </ul>
            </section>
        </nav>
        <div class="container">
            <div>
                <!-------------------------------------------------------->
                <?php echo $this->render($this->raw($content),NULL,get_defined_vars(),0); ?>
                <!-------------------------------------------------------->
            </div>
        </div>

        <script src="js/main.js"></script>
    </body>
</html>
