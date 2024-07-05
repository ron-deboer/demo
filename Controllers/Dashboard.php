<?php
 
Namespace Controllers;

class Dashboard {

    public function get($f3, $params) {

        $task = new \Models\TaskModel();
        
        $rows = $task->fetchAll(); 

        $tasks1 = array_filter($rows, function($k) {
            return ($k['status'] == 'BACKLOG');
        });
        $tasks2 = array_filter($rows, function($k) {
            return ($k['status'] == 'IN-PROGRESS');
        });
        $tasks3 = array_filter($rows, function($k) {
            return ($k['status'] == 'TESTING');
        });
        $tasks4 = array_filter($rows, function($k) {
            return ($k['status'] == 'RELEASE');
        });
        $tasks5 = array_filter($rows, function($k) {
            return ($k['status'] == 'CLOSED');
        });

        $f3->set('tasks1', json_encode(array_values($tasks1)));
        $f3->set('tasks2', json_encode(array_values($tasks2)));
        $f3->set('tasks3', json_encode(array_values($tasks3)));
        $f3->set('tasks4', json_encode(array_values($tasks4)));
        $f3->set('tasks5', json_encode(array_values($tasks5)));

        $f3->set('content','views/dashboard.html');
        echo \Template::instance()->render('views/layout.html');
    }

}

