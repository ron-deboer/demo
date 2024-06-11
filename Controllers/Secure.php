<?php
 
Namespace Controllers;

class Secure {
    
    function get($f3, $params) {   

        if (!is_logged_in()) {
            $f3->set('message','That is a restricted/secure area <br /> Please Login');
            $f3->set('content','views/error.html');
        } else {
            $f3->set('content','views/secure.html');
        }

        echo \Template::instance()->render('views/layout.html');
    }

}

