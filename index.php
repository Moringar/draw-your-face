<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Gallery</title>
</head>
<body>
    
<header>
    <h1>DRAW YOUR FACE OR SOMETHING</h1>
    <a href="./draw-art.php"><button>DESSINER</button></a>
</header>

<!-- PAGINATION -->
<?php
if(isset( $_GET["page"])){

    if($_GET["page"]> 0){
        $nextPage = (intval($_GET["page"]) +1);
        $previousPage = (intval($_GET["page"]) -1);
    
        echo("<nav class='pagination'>
            <a href='index.php?page=$previousPage'><button>⬅️</button></a>
            <a href='index.php?page=$nextPage'><button>➡️</button></a>
            </nav>"
        );
    }
    else{
        $nextPage = (intval($_GET["page"]) +1);
        echo("<nav class='pagination'>
        <a href='index.php?page=$nextPage'><button>➡️</button></a>
        </nav>"
    );
    }
}
else{
    echo("<nav class='pagination'>
        <a href='index.php?page=1'><button>➡️</button></a>
        </nav>");
}
?>

<main id="gallery">

    <?php


    require "./classes/Database.class.php";
    $bdd = new Database($path,$user,$pass);
    $bdd->dbConnect();

    if(isset( $_GET["page"])){
        if( $_GET["page"] == "0"){
            $bdd->dbPrepareAndExecute("SELECT * FROM face ORDER BY id DESC LIMIT 18 OFFSET 0",[]);
        }

        else{   

            $currentPage = $_GET["page"];
            $page = intval($currentPage) * 18;
            $bdd->dbPrepareAndExecute("SELECT * FROM face ORDER BY id DESC LIMIT 18 OFFSET $page",[]);
        }
    }

    // Sinon affiche page 0
    else{
        $bdd->dbPrepareAndExecute("SELECT * FROM face ORDER BY id DESC LIMIT 18 OFFSET 0",[]);
    }

    $result = $bdd->dbFetchAll();


    foreach($result as $painting){
        echo(
            "<div class='painting'>
                <canvas class='art' id=canvas-$painting[0] data-art=$painting[2] height='200' width='200'></canvas>
                <img src='./assets/img/frame.webp' alt=''>
            </div>"
            
        );
    }

    ?>





</main>
<script src="./scripts/gsap.min.js"></script>

<script src="./scripts/gallery.js"></script>
</body>
</html>