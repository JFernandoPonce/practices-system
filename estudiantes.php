<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Vinculación y Prácticas Pre Profesionales: Estudiante</title>
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
                        <a href="#heading-PPP" class="bar">Tus Prácticas Pre-Profesionales</a>
                        <a href="#heading-PV">Tus Proyectos de Vinculación</a>
                    </nav>
                </header>
            </div>
            <section class="home" id="home">
                <div class="homero">
                    <h3>Bienvenido al Servicio de Integración Proyectos de Vinculación</h3>
                    <p>¡Hola, Usuario!</p>
                </div>
            </section>
            <section class="PracticasPreProfesionales" id="PracticasPreProfesionales">
                <h1 class="heading" id="heading-PPP">
                    <span>Tus Prácticas</span> Pre-Profesionales
                </h1>
                <div class="row">
                    <div class="image">
                        <img src="images/practicas.jpg" alt="" id="ipp">
                    </div>
                    <div class="content">
                        <h3 class="heading-c">Actividades Prácticas Pre-Profesionales</h3>
                        <div class="cart-item">
                            <img src="images/logo.png" alt="">
                            <div class="contentP">
                                <h3>Proyecto1</h3>
                                <div class="dropdown">
                                    <button onclick="myFunction()" class="dropbtn">Crear Informe</button>
                                    <div id="myDropdown" class="dropdown-content">
                                      <!-- <a href="informePP1.html" target="_blank">Informe PP1</a> -->
                                      <a href="informeP2TPP.html" target="_blank">Informe V3</a>
                                      <a href="informeP2TPP.html" target="_blank">Informe V5</a>
                                    </div>
                                </div>
                                <input type="button" value="Subir Anexos" 9 class="dropbtn">
                                
                                <input type="button" value="Incompleto" class="dropbtn">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ProyectosdeVinculacion" id="ProyectosdeVinculacion">
                <h1 class="heading" id="heading-PV">
                    Tus Proyectos de <span>Vinculación</span>
                </h1>
                <div class="row">
                    <div class="content">
                        <h3 class="heading-c">Actividades Vinculación con la Comunidad</h3>
                        <div class="cart-item">
                            <img src="images/logo.png" alt="">
                            <div class="contentP">
                                 <h3>Proyecto1</h3>
                                 <div class="dropdown">
                                    <button onclick="myFunction2()" class="dropbtn">Crear Informe</button>
                                    <div id="myDropdown2" class="dropdown-content">
                                      <a href="informeV3TPV.html" target="_blank">Informe V3</a>
                                      <a href="informeV5TPV.html" target="_blank">Informe V5</a>
                                    </div>
                                </div> 
                                <input type="button" value="Subir Anexos" class="dropbtn">
                                <input type="button" value="Incompleto" class="dropbtn">
                            </div>
                        </div>
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
                <div>
                <a href="#home" class="logo">
                    <img src="images/logo.png" alt="" id="logo">
                </a>
                <a href="index.html" class="logo">
                    <img src="icons/logout.svg" alt="" id="logout">
                </a>
            </div>
            </section>
        </div>
    </div>
<script src="proyecto.js"></script>
</body>
</html>