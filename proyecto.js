window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
};      /* unselect dropdown button when clicking on screen */


const username = document.forms['form']['username'];
const password = document.forms['form']['password'];

document.querySelector("#user-btn").addEventListener("click",function(){
    document.querySelector(".login-form").classList.add("popup");

});


function evaluateForm(){
    if(username.value == "gabriela.guzman" && password.value == "larosa1"){
        document.form.action = "comunidad.html";

    }
    
    else if (username.value == "VictoriaG" && password.value == "Ilikeweed") {
        document.form.action = "estudiantes.html";
    }
    
    else if (username.value == "carlosandres"&& password.value != 0) {
        document.form.action = "Admin.html";
    }

    else {
        alert("Usuario Ingresado Inexistente")
        return false;}
    document.forms["form"].submit();
    
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};    /* dropdown button */

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
};

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
};

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
};

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
};
    
function dropInformesAdmin(tipo){
    if (tipo == "firmaspracticas") {document.getElementById("dropdownFirmasAdminPracticas").classList.toggle("show");}
    else if (tipo == "firmasvinculacion") {document.getElementById("dropdownFirmasAdminVinculacion").classList.toggle("show");}
    else if (tipo == 'descargarPracticas') {document.getElementById("dropdownDescargarInformeAdminPracticas").classList.toggle("show");}
    else if (tipo == 'descargarVinculacion') {document.getElementById("dropdownDescargarInformesAdminVinculacion").classList.toggle("show");}
};

/* function dropInformesFirmasAdminPracticas(){
    document.getElementById("dropdownFirmasAdminVinculacion").classList.toggle("show");
}; */


function buttonV31 () {
    document.querySelector("#InformeV31").classList.toggle("elegido")};


function buttonV32 () {
    document.querySelector("#InformeV32").classList.toggle("elegido")
};

function buttonV33 () {
    document.querySelector("#InformeV33").classList.toggle("elegido")
};

function buttonV34 () {
    document.querySelector("#InformeV34").classList.toggle("elegido")
};

function closeFirmaV3(){
    document.querySelector(".uploadInformeV3").classList.remove("popup");
};

function uploadFirmaV5(){
    document.querySelector(".uploadInformeV5").classList.add("popup");
};
function closeFirmaV5(){
    document.querySelector(".uploadInformeV5").classList.remove("popup");
};

function uploadFirmaV3(){
    document.querySelector(".uploadInformeV3").classList.add("popup");
};

function descargarInformes(type){
    if (type == "InformeV3"){document.querySelector(".descargarInformeAdminV3").classList.add("popup");}
    if (type == "InformeV5"){document.querySelector(".descargarInformeAdminV5").classList.add("popup");}

}

function closePopup(clase){
    if (clase == "informeV3"){document.querySelector(".descargarInformeAdminV3").classList.remove("popup");}
    if (clase == "informeV5"){document.querySelector(".descargarInformeAdminV5").classList.remove("popup");}

    
}

var closeLogin = document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".login-form").classList.remove("popup");
});

document.querySelector("#btn-home").addEventListener("click",function(){
    document.querySelector(".login-form").classList.add("popup");
});

document.querySelector("#btn-PPP").addEventListener("click",function(){
    document.querySelector(".login-form").classList.add("popup");
});



function duplicateForm() {
    const div = document.getElementById("actividades");
    let forms = div.getElementsByClassName('actividades_realizadas');
    let firstForm = forms[0];
    let formClone = firstForm.cloneNode(true);
    formClone.id = `activity${forms.length}`;
    div.appendChild(formClone);
  }
