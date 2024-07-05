<?php
 
Namespace Controllers;
use Models\TeamModel;

class ApiTeam {

    public function get($f3, $params) {
        $id = $params['id'] ?? null;
        $team = new \Models\TeamModel();
        if ($id) {
            $rows = $team->fetchSingle($id); 
        } else {
            $rows = $team->fetchAll(); 
        }
        $resp = json_encode($rows);
        header("Content-type:application/json");
        echo $resp;
    }

    public function search($f3, $params) {
        $dBody = html_entity_decode($f3->get('BODY'));
        $data = json_decode($dBody, TRUE);
        $_where = $data['where'] ?? null;
        $_params = explode(':', $data['params']);  

        $team = new \Models\TeamModel();      
        $rows = $team->search($_where, $_params);
        
        $resp = json_encode($rows);
        header("Content-type:application/json");
        echo $resp;
    }

}