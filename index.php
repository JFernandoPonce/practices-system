<?php
session_start();
error_reporting(0);

include 'php/connect.php';

if(isset($_POST['entrar'])){ 
    $ruser = $connect->real_escape_string($_POST['username']);
    $rpass = $connect->real_escape_string(md5($_POST['password']));

    $query = "SELECT * FROM users WHERE user_name = '$ruser' AND password = '$rpass'";
     
    if($result = $connect->query($query)){
        while($row = $result->fetch_array()){
            $user_id = $row['id'];
            $userok = $row['user_name'];
            $passwordok = $row['password'];
            $user_type = $row['user_type'];
        }
        $result->close();
    }
    $connect->close();
    if(isset($ruser) && isset($rpass)){
        if($ruser == $userok && $rpass == $passwordok){
            $_SESSION['login'] = TRUE;
            $_SESSION['user_name'] = $ruser;
            $_SESSION['user_id'] = $user_id;
            if($user_type == "student"){
                header("location:estudiantes.php");
            }
            if($user_type == "profesor"){
                header("location:profesor.html");
            }
            if($user_type == "comunidad"){
                header("location:comunidad.html");
            }
            else{
                echo '<script>alert("Error en tipo de usuario")</script>';
            }
        }
        else {
            echo '<script>alert("Por favor verifica tus datos")</script>';
        }
    }
    else{
        echo '<script>alert("Por favor verifica tus datos")</script>';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Sistema de Vinculacion y Practicas Pre-Profesionales</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Raleway:wght@300;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css"/>
    
</head>
<body>
    <div id="root">
        <div class="app">
            <div>
                <header class="header" id="header">
                    <a href="#home" class="logo">
                        <img src="images/logo.png" alt="" id="logo">
                    </a>
                    <nav class="navbar">
                        <a href="#home" class="bar">Inicio</a>
                        <a href="#PracticasPreProfesionales" class="bar">Practicas PreProfesionales</a>
                        <a href="#ProyectosdeVinculacion" class="bar">Proyectos de Vinculacion</a>
                    </nav>
                    <div class="saludo"></div>
                    <button id="user-btn" type="button">Entrar</button> 
                </header>
                <div class="login-form" id="theLogin">
                    <form name="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <h3>Login</h3>
                        <input type="text" placeholder="Username" class="box" id="username" name="username">
                        <input type="password" placeholder="Password" class="box" id="password" name="password">
                        <p> No tienes una cuenta? <a href="#home">Regístrate!</a></p>
                        <input type="submit" class="btn-lg" id="btn-lg" value="Sign in" name="entrar">
                        <div class="close-btn">&times;</div>
                    </form>
                </div>
            </div>
            <section class="home" id="home">
                <div class="homero">
                    <h3>Servicio de Integración Proyectos de Vinculación y Prácticas Pre-Profesionales</h3>
                    <a href="#home" class="btn" id="btn-home">Regístrate</a>
                </div>

            </section>
            <section class="PracticasPreProfesionales" id="PracticasPreProfesionales">
                <h1 class="heading">
                    <span>Prácticas</span> Pre-Profesionales</h1>
                <div class="row">
                    <div class="image">
                        <img src="images/practicas.jpg" alt="" id="ipp">
                    </div>
                    <div class="content">
                        <h3>Que son las practicas PreProfesionales?</h3>
                        <p>
                            son actividades de aprendizaje orientadas a la aplicación de conocimientos 
                            y al desarrollo de destrezas y habilidades específicas que un estudiante debe 
                            adquirir para el adecuado desempeño en su futura profesión.
                        </p>
                        <a href="#home" class="btn" id="btn-PPP">Regístrate</a>
                    </div>

                </div>
            </section>

            <section class="ProyectosdeVinculacion" id="ProyectosdeVinculacion">
                <h1 class="heading">
                    Proyectos de <span>Vinculacion</span>
                </h1>
                <div class="row">
                    <div class="content">
                        <h3>Vinculacion con la Comunidad</h3>
                        <p>
                            El constante apoyo de la academia y la comunidad debe ser  
                            El constante apoyo de la academia y la comunidad debe ser  
                            El constante apoyo de la academia y la comunidad debe ser 
                        </p>
                        <a href="#home" class="btn" id="btn-V">Regístrate</a>
                    </div>
                    <div class="image">
                        <img src="images/vinculacion.jpg" alt="" id="imv">
                    </div>
                </div>
            </section>
            
            <section class="footer">
                <div class="share">
                    <a href="https://twitter.com/schoolyachay?lang=en" target="_blank" class="fab fa-brands fa-twitter">
                        <img src="icons/twitter.svg" alt="">
                    </a>
                    <a href="https://www.yachaytech.edu.ec/quimica/" target="_blank" class="fab faweb">
                        <img src="icons/school1.svg" alt="">
                    </a>
                    <a href="https://www.yachaytech.edu.ec/" target="_blank" class="fab faweb">
                        <img src="icons/school.svg" alt="">
                    </a>
                </div>
                <div class="credit">
                    Developed by <span>JFP&CAT</span> | All rights reserved.
                </div>
                <a href="#home" class="logo">
                    <img src="images/logo.png" alt="" id="logo">
                </a>
            </section>

        </div>

    </div>
<script src="proyecto.js"></script>    
<script src="https://apis.google.com/js/api.js"></script>
<script src="google-api.js"></script>
</body>
</html>