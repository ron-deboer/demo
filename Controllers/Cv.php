<?php
 
Namespace Controllers;

class Cv {

    function get($f3, $params) {
        $f3->set('content','views/cv1.html');

        echo \Template::instance()->render('views/layout.html');
    }

}
