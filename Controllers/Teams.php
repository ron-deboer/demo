<?php
 
Namespace Controllers;
use Models\TeamModel;

class Teams {
    
    function get($f3, $params) {
        $team = new \Models\TeamModel();

        $rows = $team->fetchAll(); 

        $f3->set('teams', $rows);
        $f3->set('content','views/teams2.html');

        echo \Template::instance()->render('views/layout.html');
    }

}

