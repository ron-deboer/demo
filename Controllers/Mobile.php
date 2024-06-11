<?php
 
Namespace Controllers;

class Mobile {
    
    function get($f3, $params) {    

        $f3->set('content','views/mobile.html');

        echo \Template::instance()->render('views/layout.html');
    }

}

