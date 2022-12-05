<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/style.css">
    <title>Document</title>
</head>
<body>
    


<header>
    <a href="./index.php"><button>VISITER</button></a>
    <h2>Draw yourself<br>Or something else...</h2>
</header>
<section class="atelier">

    <canvas class="" id="mainCanvas" height="400" width="400px"></canvas>
    
    
</section>


<section class="toolbox">
    <button id="erase"><img src="./assets/img/bin.png" alt="">ERASE</button>
    <!-- <button id="undo"><img src="./assets/img/undo.png" alt="">UNDO</button> -->
    <form action="registerArt.php" method="post" >
    <input style="display:none;" id="art" name="art" type="text">
    <input style="display:none;" id="half_art" name="half_art" type="text">
    <input id="submitArt" type="submit" value="SUBMIT ART">
    <!-- TODO: USE SERIALIZE and UNSERIALIZE methods to pass the string through the POST AND DATABASE and back -->
</form>
</section>




<script src="./scripts/draw.js"></script>
</body>
</html>