<?php
 
Namespace Controllers;

class About {

    function get($f3, $params) {
        $f3->set('content','views/about.html');

        echo \Template::instance()->render('views/layout.html');
    }

}
