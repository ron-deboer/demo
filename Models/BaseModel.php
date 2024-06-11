<?php

Namespace Models;

class BaseModel extends \BaseClass {
    /**
     * An instance of this class
     */
    private static $instance;

    /**
     * Constructor
     *
     * @param   array  $configs
     */
    public function __construct(array $configs = []) {
        static::$instance = $this;     
        parent::__construct($configs);
    }

    /**
     * Return BaseModel instance
     * 
     * @return  BaseModel
     */
    public static function getInstance() {
        if ( ! static::$instance instanceof Model ) {
            return new BaseModel;
        }
    	return static::$instance;
    }
}