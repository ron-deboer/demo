<?php
 
Namespace Controllers;

class Source {

    function vue($f3, $params) {
        $f3->set('sourcecode', file_get_contents(__DIR__ . '/../js/teams2.js'));
        $f3->set('title','VUE3 Example');  
        $src = \Template::instance()->render('views/source.html');

        $f3->set('content',$src);
        echo \Template::instance()->render('views/layout1.html');
    }

    function react($f3, $params) {
        $f3->set('sourcecode', file_get_contents(__DIR__ . '/../js/teams.js'));
        $f3->set('title','REACT Example');         
        $src = \Template::instance()->render('views/source.html');

        $f3->set('content',$src);
        echo \Template::instance()->render('views/layout1.html');
    }

}
