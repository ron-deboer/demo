<?php
 
Namespace Controllers;

class Sse {

    function get($f3, $params) {
        $f3->set('content','views/sse.html');

        echo \Template::instance()->render('views/layout.html');
    }

}
