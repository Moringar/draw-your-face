<?php
require "../taletials.php";

class Database{

    private $bdd;
    private $query;
    private $path;
    private $user;
    private $pass;

    function __construct($path, $user, $pass)
    {
        
        $this->path = $path;
        $this->user = $user;
        $this->pass = $pass;
    }

    
    
    public function dbConnect(){
        $this->bdd = new PDO($this->path, $this->user, $this->pass);
    }

    public function dbPrepareAndExecute($statement, $array){
        $this->query = $this->bdd->prepare($statement);
        $this->query->execute( $array);
    }

    public function dbFetchAll(){
        return $this->query->fetchAll();
    }


}