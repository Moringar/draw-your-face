## DRAW YOU FACE OR SOMETHING ELSE
It's a two pages collaborative drawing platform.
Simple, unmoderated and respectful of the contributor's achievements.

<hr>
To host this project on your server, simply upload all the repo content on it.
You will have to adjust the coordinates of your server in the file `Database.class.php` in whatever way you see fit.

Then you will need a new table name `face` like this: <br>
CREATE TABLE `my_database`.`face` ( `id` INT NOT NULL AUTO_INCREMENT , `art` LONGTEXT NOT NULL , `half-art` LONGTEXT NOT NULL , PRIMARY KEY (`id`))
<hr>
Once everything is online and the site is connected to the database, you can start drawing.
