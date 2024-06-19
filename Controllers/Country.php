<?php
 
Namespace Controllers;
use Models\CountryModel;

class Country {
    
    function get($f3, $params) {
        $team = new \Models\CountryModel();

        $rows = $team->fetchAll(); 

        $rows = array_map(function ($row) {
            $row['population'] = number_format($row['population']);
            $row['size'] = number_format($row['size']);
            return $row;
        }, $rows);

        $f3->set('country', $rows);
        $f3->set('content','views/country.html');

        echo \Template::instance()->render('views/layout.html');
    }

}

