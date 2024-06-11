<?php
 
Namespace Controllers;
use Models\TaskModel;

class ApiTask {

    public function get($f3, $params) {
        $id = $params['id'] ?? null;
        $task = new \Models\TaskModel();
        if ($id) {
            $rows = $task->fetchSingle($id); 
        } else {
            $rows = $task->fetchAll(); 
        }
        $resp = json_encode($rows);
        header("Content-type:application/json");
        echo $resp;
    }

    public function post($f3, $params) {
        $id = $params['id'] ?? null;
        $dBody = html_entity_decode($f3->get('BODY'));
        $data = json_decode($dBody, TRUE);
        echo $this->updateTask($id, $data);
    }

    public function setStatus($f3, $params) {
        $id = $params['id'] ?? null; 
        array_shift($params);             
        echo $this->updateTask($id, $params);
    }    

    private function updateTask($id, $data) {
        $task = new \Models\TaskModel();
        $result = $task->updateTask($id, $data); 
        if ($result) {
            return json_encode(['action' => 'update', 'status' => 'ok']);
        } else {
            return json_encode(['action' => 'update', 'status' => 'notok']);
        }

    }  

}