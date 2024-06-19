<?php
 
Namespace Controllers;
use Models\CountryModel;

class Country {
    
    function get($f3, $params) {
        $team = new \Models\CountryModel();

        $rows = $team->fetchAll(); 

        $f3->set('country', $rows);
        $f3->set('content','views/country.html');

        echo \Template::instance()->render('views/layout.html');
    }

}

