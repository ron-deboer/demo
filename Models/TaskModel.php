<?php
 
Namespace Models;

class TaskModel extends BaseModel {

    public function fetchSingle($id) {

        $sql = 'select * from task where id = ?';
        $rows = \Database::query($sql, [$id]);

        return $rows;
        
    }

    public function fetchAll() {

        $sql = 'select * from task where id > ?';
        $rows = \Database::query($sql, [0]);

        return $rows;
        
    }
    
    public function updateTask($id, $data) {
        $arr = array_map(function($k){ 
            return "$k=?";
        }, array_keys($data));

        $sql = "update task set " . implode(', ', $arr) . " where id=?;";
        $vals = array_merge(array_values($data), [$id]);

        $result = \Database::execute($sql, $vals);
        return $result;
        
    }
    
    public function insertTask($data) {

        $arr = array_map(function($k){ 
            return "$k";
        }, array_keys($data));

        $sql = "insert into task (" . implode(', ', $arr) . ") values (" . implode(', ', array_values($data)) . ");";
        
        $result = \Database::execute($sql, $vals);

        return $result;
        
    }

}