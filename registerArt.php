<?php

    $art = htmlspecialchars($_POST["art"]);
    $half_art = htmlspecialchars($_POST["half_art"]);

    
    require "./classes/Database.class.php";
    $bdd = new Database($path,$user,$pass);
    $bdd->dbConnect();
    $bdd->dbPrepareAndExecute("INSERT INTO face (art, half_art) VALUES (?,?)",[$art, $half_art]);


    header("Location: index.php");








?>
