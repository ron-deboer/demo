<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>deboer</title>
        <style>
            @font-face {
                font-family: "Roboto";
                src: url("/demo/css/fonts/Roboto-Light.ttf") format("truetype");
                font-weight: normal;
                font-style: normal;
            }
        </style>
        <link rel="stylesheet" href="/demo/css/normalize.css" />
        <link rel="stylesheet" href="/demo/css/milligram.min.css" />
        <link rel="stylesheet" href="/demo/css/style.css" /></script>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"
            }
          }
        </script>
        <script src="/demo/Components/navbar.js" type="module"></script>

    </head>
    <body>
        <nav-bar></nav-bar>
        <div class="container">
            <!-------------------------------------------------------->
            <?= ($this->raw($content))."
" ?>
            <!-------------------------------------------------------->
        </div>
        <div class="footer mt-6 center">
            <a href="https://github.com/ron-deboer/demo">Github Source</a>
        </div>
        <script src="/demo/js/main.js"></script>
    </body>
</html>
