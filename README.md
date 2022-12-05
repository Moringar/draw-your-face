## 🎨DRAW YOU FACE OR SOMETHING ELSE
It's a two pages collaborative drawing platform.
**Simple, unmoderated and respectful of the contributor's achievements.** <br>
Today it's a training project and I think I still need to improve how the drawings are sent to the database, it's very large. also, there are some probable security issues that I will need to address.
<hr>
To host this project on your server, simply upload all the repo content on it.
You will have to adjust the coordinates of your server in the file `Database.class.php` in whatever way you see fit.
<br>

Then you will need a new table name `face` like this:
<br>

<code>CREATE TABLE my_database.face ( id INT NOT NULL AUTO_INCREMENT , art LONGTEXT NOT NULL , half-art LONGTEXT NOT NULL , PRIMARY KEY (id))</code>

<hr>
<br>
Once everything is online and the site is connected to the database, you can start drawing.
