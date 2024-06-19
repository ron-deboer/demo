<?php
 
Namespace Models;

class CountryModel extends BaseModel {

    public function fetchAll() {

        $sql = 'select * from country where id > ?';
        $rows = \Database::query($sql, [0]);
        
        return $rows;
        
    }
}