<?php
 
Namespace Models;

class UserModel extends BaseModel {

    public function fetchAll() {

        $sql = 'select * from user where id > ?';
        $rows = \Database::query($sql, [0]);
        
        return $rows;
        
    }
}