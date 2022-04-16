<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <title>My Movies</title>
</head>
<body>
<?php

include("config.php");

$result = mysqli_query($conn, "SELECT * FROM my_movies")or die("Error: " . mysqli_error($conn));
?>
    <section class="section-margin calc-60px">
      <div class="container">
        <div class="pb-60px mt-3 mb-3 ct1">
          <h1 class="text-center">My Movies</h1>
        </div>
        <div class="row mt-3">
          <?php  
        while($user_data = mysqli_fetch_array($result)) {   
          echo '<div class="col-md-6 col-lg-4 col-xl-3">
            <div class="text-center mt-4">
              <div class="">
                <img class="" src="'.$user_data['poster'].'" alt="" style="height:300px;160px;">
                
              </div>
              <div class="card-body">
                <h4 class="">'.$user_data['title'].'</h4>
                <p class=""> '.$user_data['genre'].'</p>
                <p class=""> '.$user_data['votes'].' Likes</p>
              </div>
            </div>
          </div>';
          }?>
        </div>
        
      </div>
      <div class="text-center mt-5">
        <a href="index.html" class="btn btn-primary">Go To Home</a>
      </div>
      
    </section>

<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
</body>
</html>