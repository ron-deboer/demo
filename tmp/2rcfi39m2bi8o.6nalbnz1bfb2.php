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
        <link rel="stylesheet" href="css/style.css" />
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="js/main.js" type="module"></script>
        <script src="Components/navbar.js" type="module"></script>
    </head>
    <body>
        <nav-bar></nav-bar>
        <div class="container">
            <!-------------------------------------------------------->
            <?php echo $this->render($this->raw($content),NULL,get_defined_vars(),0); ?>
            <!-------------------------------------------------------->
        </div>
        <div class="footer mt-6 center">
            <a href="https://github.com/ron-deboer/demo">Source Code</a>
        </div>
    </body>
</html>
