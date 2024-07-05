<?php
 
Namespace Models;

class TeamModel extends BaseModel {

    public function fetchAll() {

        $sql = 'select * from team where id > ?';
        $rows = \Database::query($sql, [0]);
        return $rows;
    }
    
    public function search($where, $params) {

        $sql = "select * from team where $where ;";
        $rows = \Database::query($sql, $params);
        return $rows;        
    }

}