<?php
$mysqli = new mysqli('localhost','root','','sciffertask') or die(mysqli_error($mysqli));

if (isset($_POST['save'])){
    $movieId = $_POST['movieID'];
    $poster = $_POST['poster'];
    $title = $_POST['title'];
    $genre = $_POST['genre'];
    $released = $_POST['released'];
    $rated = $_POST['rated'];
    $imdbRating = $_POST['imdbRating'];
    $Director = $_POST['Director'];
    $Writer = $_POST['Writer'];
    $Actors = $_POST['Actors'];
    $Plot = $_POST['Plot'];
    $votes = $_POST['votes'];
    
    $mysqli->query("INSERT INTO my_movies (movieID,poster,title,genre,released,rated,imdbRating,Director,Writer,Actors,Plot,votes)
                    VALUES('$movieId','$poster','$title','$genre','$released','$rated','$imdbRating','$Director','$Writer','$Actors','$Plot','$votes')")
                    or die($mysqli->error);

    header("location: index.html");
  }
?>