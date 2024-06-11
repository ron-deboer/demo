<?php
 
Namespace Controllers;
use Models\UserModel;

class Login {
    
    function get($f3, $params) {    

        $f3->set('content','views/login.html');
      
        echo \Template::instance()->render('views/layout.html');
    }

    function post($f3, $params) {

        setcookie('express', 'eddbb27b-4927-4caf-9d8a-eb15b95b25f3', strtotime( '+15 minutes' ), "/");

        $f3->set('content','views/secure.html');
        echo \Template::instance()->render('views/layout.html');

    }
  
}

