<?php

session_start();
include 'php/connect.php';

$user = $_SESSION['user_name'];
$member_id = $_SESSION['vinculacion_id'];

if(!isset($user)){
    header("location:index.php");
}

$select_data = "SELECT * FROM vinculacion_general WHERE member_id ={$member_id}";
$query_data = $connect->query($select_data);
$data = $query_data->fetch_assoc();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Informe Tipo V3: Proyectos de Vinculacion</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Raleway:wght@300;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css"/>
</head>
<body class="comunidad">
    <div id="root">
        <div class="app">
            <div>
                <header class="header" id="header">
                    <a href="#home" class="logo">
                        <img src="images/logo.png" alt="" id="logo">
                    </a>
                    <nav class="navbar">
                        <h1 class="headerI">Crear Informe Tipo V3 <br> Proyectos de Vinculacion</h1>
                    </nav>
                </header>
            </div>

            <section class="Informe">
                <h1 class="heading" id="heading-PPP">
                    <span>Inserta la Información</span> Solicitada
                </h1>
                
                <div class="contentI">
                    <form action="">
                        <h3>Información General</h3>
                            <h5>Estudiante Participante</h5>
                                <div>
                                <label for="nombre_estudiante">Nombre</label>
                                <input type="text" id="nombre_estudiante" name="nombre_estudiante" value="<?php echo $data["name"]?>">
                                </div>
                                <br>
                                <div>
                                <label for="idname">Cédula:</label>
                                <input type="text" id="idname" name="idname" value="<?php echo $data["cedula"]?>">
                                
                                <label for="semestre">Semestre:</label>
                                <input type="text" id="semestre" name="semestre" value="<?php echo $data["semestre"]?>">
                                </div>
                                <br>
                                <div>
                                <label for="carrera">Carrera:</label>
                                <input type="text" id="carrera" name="carrera" value="<?php echo $data["carrera"]?>">
                                    
                                <label for="escuela">Escuela:</label>
                                <input type="text" id="escuela" name="escuela" value="<?php echo $data["escuela"]?>">
                                </div>
                            <h5>Periodo de duracion del proyecto</h5>

                            <div>
                                <label for="inicioProyecto">Fecha de Inicio:</label>
                                <input type="text" id="inicioProyecto" name="inicioProyecto" value="<?php echo $data["fecha_inicio"]?>">
                                
                                <label for="finProyecto">Fecha de finalizacion:</label>
                                <input type="text" id="finProyecto" name="finProyecto" value="<?php echo $data["fecha_final"]?>">
                            </div>

                            <h5>Profesor Tutor</h5>  
                                <div>
                                <label for="nombreTutor">Nombre tutor:</label>
                                <input type="text" id="nombreTutor" name="nombreTutor" value="<?php echo $data["tutor"]?>">
                                
                                <label for="cedulaTutor">Cédula tutor:</label>
                                <input type="text" id="cedulaTutor" name="cedulaTutor" value="<?php echo $data["tutor_cedula"]?>">
                                </div>
                            
                            <h5>Comunidad Beneficiaria</h5>

                            <div>
                                <label for="nombreComunidad">Nombre de la comunidad benenficiaria:</label>
                                <input type="text" id="nombreComunidad" name="nombreComunidad"  value="<?php echo $data["comunidad_beneficiaria"]?>">
                                <br>
                                <br>
                                <label for="caracteristicasC">Caracteristicas de la comunidad/Entidad Benenficiaria:</label>
                                <input type="text" id="caracteristicasC" name="caracteristicasC" value="<?php echo $data["comunidad_caracteristicas"]?>">
                                <br><br>
                                <label for="numeroBen">Número aproximado de beneficiarios:</label>
                                <input type="text" id="numeroBen" name="numeroBen" value="<?php echo $data["no_beneficiarios"]?>">
                            </div>

                            <h5>Representante de la Comunidad</h5>

                            <div>
                                <label for="nombreRC">Nombre representante de la comunidad:</label>
                                <input type="text" id="nombreRC" name="nombreRC" value="<?php echo $data["representante_comunidad"]?>">
                                <br>
                                <br>
                                <label for="cedulaRC">Cédula:</label>
                                <input type="text" id="cedulaRC" name="cedulaRC" value="<?php echo $data["representante_cedula"]?>">
                            </div>


                    </form>
                </div>
                <div>
                    <button class="documentgen">Guardar Progreso</button>
                </div>
                <div class="botonesV3">
                        <div class="dropdown">
                                <button onclick="dropInformes('muestraInformeV31');" class="dropbtn">Informe V3.1</button>
                                    <div id="dropdownMuestraInformeV31" class="dropdown-content">
                                      <a href="#InformeV31" onclick="botones('v31'); getV31(1);" id="mesUnoV31">1er Mes</a>
                                      <a href="#InformeV31" onclick="botones('v31'); getV31(2);" id="mesDosV31">2do. Mes</a>
                                      <a href="#InformeV31" onclick="botones('v31'); getV31(3);" id="mesTresV31">3er Mes</a>
                                    </div>
                        </div> 

                        <div class="dropdown">
                                <button onclick="dropInformes('muestraInformeV32');" class="dropbtn">Informe V3.2</button>
                                    <div id="dropdownMuestraInformeV32" class="dropdown-content">
                                    <a href="#InformeV32" onclick="botones('v32');" id="mesUnoV32">1er Mes</a>
                                      <a href="#InformeV32" onclick="botones('v32');" id="mesDosV32">2do. Mes</a>
                                      <a href="#InformeV32" onclick="botones('v32');" id="mesTresV32">3er Mes</a>
                                    </div>
                        </div>
                    
                        <div class="dropdown">
                                <button onclick="dropInformes('muestraInformeV33');" class="dropbtn">Informe V3.3</button>
                                    <div id="dropdownMuestraInformeV33" class="dropdown-content">
                                    <a href="#InformeV33" onclick="botones('v33');" id="mesUnoV33">1er Mes</a>
                                      <a href="#InformeV33" onclick="botones('v33');" id="mesDosV33">2do. Mes</a>
                                      <a href="#InformeV33" onclick="botones('v33');" id="mesTresV33">3er Mes</a>
                                    </div>
                        </div>
                </div>
            </section>

            <section class="InformeV3" id="InformeV31">
                <h1 class="heading">Llena la Información requerida <span>Informe V 3.1</span>
                <button onclick="closeInformes('v31');" class="dropbtn" >X</button>
                </h1>
                
                <div class="contentI">
                    <div class="formPP1">
                    
                        <form>
                            <h3>Periodo que cubre el presente informe</h3>

                                <div>
                                <label for="fechaInicio31">Fecha de inicio</label>
                                <input type="text" id="fechaInicio31" name="fechaInicio31" placeholder="XX de ---- de XXXX">
                                
                                <label for="fechaFinal31">Fecha de inicio</label>
                                <input type="text" id="fechaFinal31" name="fechaFinal31" placeholder="XX de ---- de XXXX">
                                
                                </div>
                                <br>    
                        </form>
                    </div>
                </div>                
                <div>
                    <input type="button" id="agregar_actividades" onclick="duplicateForm();" value="Agregar Actividades" class="documentgen">
                </div>
                <div class="contentI">
                    <div id="actividades">
                    <form class="actividades_realizadas" action="">
                        <h3>Actividades Desarrolladas</h3>
                                <div>
                                <label for="fecha_de_actividad">Periodo de Actividad</label>
                                <input type="text" id="fecha_de_actividad" name="fecha_de_actividad" placeholder="0X - 0X de diciembre">
                                </div>
                                <br>
                                <div>
                                <label for="actividadRealizada">Actividades Realizadas</label>
                                <input type="text" id="actividadRealizada" name="actividadRealizada">
                                </div>
                                <br>
                                <div>
                                <label for="duracionActividad">Duración actividad (hrs)</label>
                                <input type="number" id="duracionActividad" name="duracionActividad">
                                </div>
                                <br>
                                <div>
                                <label for="observacion">Observaciones</label>
                                <input type="text" id="observacion" name="observacion">
                                </div>
                                <br>
                    </form>
                    </div>
                </div>
                <div>
                    <input type="button" id="agregar_actividades" value="Guardar Progreso" class="documentgen">
                </div>
                <div class="contentI">
                <div>
                                <label for="duraciontotal31">Duracion total:</label>
                                <input type="text" id="duraciontotal31" name="duraciontotal31">
                                </div>
                                <br>
                                <div>
                                <label for="conclusiones31">Conclusiones</label>
                                <input type="text" id="conclusiones31" name="conclusiones31">
                                </div>
                                <br>
                                <div>
                                <label for="recomendaciones31">Recomendaciones</label>
                                <input type="text" id="recomendaciones31" name="recomendaciones31">
                                </div>
                </div>
                <input type="file" value="Generar Documento"  id="doc31" class="documentgen">
                <button class="documentgen" onclick="generateDoc31();">Generar Documento</button>
            </section>

            <section class="InformeV3" id="InformeV32">
                <h1 class="heading">Llena la Información requerida <span>Informe V 3.2</span>
                <button onclick="closeInformes('v32');" class="dropbtn" >X</button>
                </h1>

                <div class="contentI">
                    <div class="formPP1">
                        <form>
                            <h3>Periodo que cubre el presente informe</h3>

                                <div>
                                <label for="fechaInicio32">Fecha de inicio</label>
                                <input type="text" id="fechaInicio32" name="fechaInicio32" placeholder="XX de ---- de XXXX">
                                
                                <label for="fechaFinal32">Fecha de inicio</label>
                                <input type="text" id="fechaFinal32" name="fechaFinal32" placeholder="XX de ---- de XXXX">
                                
                                </div>
                                <br>    
                        </form>
                    </div>
                </div>   

                <div class="contentI">
                    <form action="">
                        <h3>Observaciones</h3>
                                <div>
                                <label for="observaciones">Observaciones</label>
                                <input type="text" id="observaciones" name="observaciones">
                                </div>
                                <br>
                    </form>
                </div>
                <input type="file" value="Generar Documento"  id="doc32" class="documentgen">
                <button onclick="generateDoc32();" class="documentgen">Generar Documento</button>
            </section>

            <section class="InformeV3" id="InformeV33">
                <h1 class="heading">Llena la Información requerida <span>Informe V 3.3</span>
                <button onclick="closeInformes('v33');" class="dropbtn" >X</button>
                </h1>
                <div class="contentI">
                    <div class="formPP1">
                        <form>
                            <h3>Periodo que cubre el presente informe</h3>

                                <div>
                                <label for="fechaInicio33">Fecha de inicio</label>
                                <input type="text" id="fechaInicio33" name="fechaInicio33">
                                
                                <label for="fechaFinal33">Fecha de inicio</label>
                                <input type="text" id="fechaFinal33" name="fechaFinal33">
                                
                                </div>
                                <br>    
                        </form>
                    </div>
                </div>   
                <div class="contentI">
                    <form action="">
                        <h3>Observaciones</h3>
                                <div>
                                <label for="observaciones">Observaciones</label>
                                <input type="text" id="observaciones" name="observaciones">
                                </div>
                                <br>
                    </form>
                </div>
                <input type="file" value="Generar Documento"  id="doc33" class="documentgen">
                <button onclick="generateDoc33();" class="documentgen">Generar Documento</button>
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
            </div>
            </section>
        </div>
    </div>
    <script src="proyecto.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/docxtemplater/3.33.0/docxtemplater.js"></script>
    <script src="https://unpkg.com/pizzip@3.1.4/dist/pizzip.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
    <script src="https://unpkg.com/pizzip@3.1.4/dist/pizzip-utils.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/path.js/0.8.4/path.min.js" integrity="sha512-RTzm9c0aNZYxh3AlthYNipI3HCmUTR/hgKqHkcHR3et5IyUDgGlRdInuW8MuN5TliQMS6+M+x2Gl/2WhmmJ5ew==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/1.0.2/package/lib/browser/fs.js"></script>
    <script src="pdf-script.js"></script>

</body>
</html>