<?php

ini_set('date.timezone', 'Australia/Melbourne');
ini_set('display_errors', 0);
error_reporting(E_ALL);

//
autoload('Controllers');
autoload('Models');
autoload('Lib');

//
require './database/database.php';
Database::open();

//
function is_logged_in() {
    return (isset($_COOKIE) && count($_COOKIE) > 0);
}

//
function autoload($class, $path = '') {
    static $prefix = [];
    if ($path) {
        $prefix[$class] = $path;
    }
    spl_autoload_register(function($class) use ($prefix) {
        $base_dir = __DIR__ . '/';
        $a = explode("\\", $class);
        $pre = (array_key_exists($a[0], $prefix)) ? $prefix[$a[0]] . '/' : "";
        $file = $base_dir . str_replace('\\', '/', $pre . $class) . '.php';
        if( file_exists( $file ) ) {
            require $file;
        }    
    });
}

//
class BaseClass extends \stdClass {
    /** @ignore */
    public function __call($name, $args) {
        if ( isset($this->{$name}) ) {
            if ( $this->{$name} instanceof \Closure ) {
                return call_user_func_array($this->{$name}->bindTo($this), $args);
            }
            return call_user_func_array($this->{$name}, $args);
        }
        throw new \Exception("Undefined method {$name}");
    }

    /** @ignore */
    public function __set($name, $val) {
        if ( $val instanceof \Closure ) {
            $this->{$name} = $val->bindTo($val);
        } else {
            $this->{$name} = $val;
        }
    }

    public function __construct(array $data = []) {
        $this->import($data);
    }

    public function import(array $data) {
        foreach ( $data as $k => $v ) {
            $this->{$k} = $v;
        }
        return $this;
    }
}
