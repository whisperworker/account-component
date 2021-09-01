<?php
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>User cabinet</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
                <h1 class="user-cabinet-header">User Cabinet</h1>
            </div>
            <div class="col l12 center-align">
                <button id="logout" class="waves-effect waves-light btn #d500f9 purple accent-3">
                    <i class="material-icons right">logout</i>Logout</button>
            </div>
        </div>
        <div class="row">
            <div class="col l6">
                <form>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="update-name" type="text" class="validate">
                            <label class="active" for="update-name">Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="update-pass" type="password" class="validate">
                            <label class="active" for="update-pass">Password</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="update-birthday" type="text" class="">
                            <label class="active" for="update-birthday">Birthday</label>
                        </div>
                        <div class="col l12">
                            <p>
                                <label>
                                    <input name="sex" type="radio" value="male"/>
                                    <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="sex" type="radio" value="female"/>
                                    <span>Female</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="sex" type="radio" value="other"/>
                                    <span>Other</span>
                                </label>
                            </p>
                        </div>
                        <div class="col l12 right-align">
                            <button type="submit" id="update-submit" class="waves-effect waves-light btn #d81b60 pink darken-1">
                                <i class="material-icons right">update</i>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <script src="js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
    <script src="script/main.js"></script>
</body>

</html>