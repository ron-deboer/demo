<?php
 
Namespace Controllers;

class Home {
    
    function get($f3, $params) {    

        $f3->set('content','views/home.html');

        echo \Template::instance()->render('views/layout.html');
    }

}

