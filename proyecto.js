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
/* window.onclick = function(event2) {
    if (!event2.target.matches('.dropero')) {
      var dropdowns2 = document.getElementsByClassName("InformeV3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown2 = dropdowns2[i];
        if (openDropdown2.classList.contains('elegido')) {
          openDropdown2.classList.remove('elegido');
        }
      }
    }
}; */

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

function botones(vacio) {
    if (vacio == "v31") {document.querySelector("#InformeV31").classList.add("elegido")}
    if (vacio == "v32") {document.querySelector("#InformeV32").classList.add("elegido")}
    if (vacio == "v33") {document.querySelector("#InformeV33").classList.add("elegido")}
    if (vacio == "v51") {document.querySelector("#InformeV51").classList.add("elegido")}
    if (vacio == "v52") {document.querySelector("#InformeV52").classList.add("elegido")}
    if (vacio == "v53") {document.querySelector("#InformeV53").classList.add("elegido")}
    if (vacio == "v54") {document.querySelector("#InformeV54").classList.add("elegido")}
    if (vacio == "p21") {document.querySelector("#InformeP21").classList.add("elegido")}
    if (vacio == "p22") {document.querySelector("#InformeP22").classList.add("elegido")}
    if (vacio == "p23") {document.querySelector("#InformeP23").classList.add("elegido")}
    if (vacio == "p41") {document.querySelector("#InformeP41").classList.add("elegido")}
    if (vacio == "p42") {document.querySelector("#InformeP42").classList.add("elegido")}
    if (vacio == "p43") {document.querySelector("#InformeP43").classList.add("elegido")}
    if (vacio == "p44") {document.querySelector("#InformeP44").classList.add("elegido")}
}

function closeInformes(que){
    if (que == "v31") {document.querySelector("#InformeV31").classList.remove("elegido")}
    if (que == "v32") {document.querySelector("#InformeV32").classList.remove("elegido")}
    if (que == "v33") {document.querySelector("#InformeV33").classList.remove("elegido")}
    if (que == "v51") {document.querySelector("#InformeV51").classList.remove("elegido")}
    if (que == "v52") {document.querySelector("#InformeV52").classList.remove("elegido")}
    if (que == "v53") {document.querySelector("#InformeV53").classList.remove("elegido")}
    if (que == "v54") {document.querySelector("#InformeV54").classList.remove("elegido")}
    if (que == "p21") {document.querySelector("#InformeP21").classList.remove("elegido")}
    if (que == "p22") {document.querySelector("#InformeP22").classList.remove("elegido")}
    if (que == "p23") {document.querySelector("#InformeP23").classList.remove("elegido")}
    if (que == "p41") {document.querySelector("#InformeP41").classList.remove("elegido")}
    if (que == "p42") {document.querySelector("#InformeP42").classList.remove("elegido")}
    if (que == "p43") {document.querySelector("#InformeP43").classList.remove("elegido")}
    if (que == "p44") {document.querySelector("#InformeP44").classList.remove("elegido")}

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
    
function dropInformes(tipo){
    if (tipo == "firmaspracticas") {document.getElementById("dropdownFirmasAdminPracticas").classList.toggle("show");}
    else if (tipo == "firmasvinculacion") {document.getElementById("dropdownFirmasAdminVinculacion").classList.toggle("show");}
    else if (tipo == 'descargarPracticas') {document.getElementById("dropdownDescargarInformeAdminPracticas").classList.toggle("show");}
    else if (tipo == 'descargarVinculacion') {document.getElementById("dropdownDescargarInformesAdminVinculacion").classList.toggle("show");}
    else if (tipo == 'muestraInformeV31') {document.getElementById("dropdownMuestraInformeV31").classList.toggle("show");}
    else if (tipo == 'muestraInformeV32') {document.getElementById("dropdownMuestraInformeV32").classList.toggle("show");}
    else if (tipo == 'muestraInformeV33') {document.getElementById("dropdownMuestraInformeV33").classList.toggle("show");}
    else if (tipo == 'muestraInformeV51') {document.getElementById("dropdownMuestraInformeV51").classList.toggle("show");}
    else if (tipo == 'muestraInformeV52') {document.getElementById("dropdownMuestraInformeV52").classList.toggle("show");}
    else if (tipo == 'muestraInformeV53') {document.getElementById("dropdownMuestraInformeV53").classList.toggle("show");}
    else if (tipo == 'muestraInformeV54') {document.getElementById("dropdownMuestraInformeV54").classList.toggle("show");}
    else if (tipo == 'muestraInformeP21') {document.getElementById("dropdownMuestraInformeP21").classList.toggle("show");}
    else if (tipo == 'muestraInformeP22') {document.getElementById("dropdownMuestraInformeP22").classList.toggle("show");}
    else if (tipo == 'muestraInformeP23') {document.getElementById("dropdownMuestraInformeP23").classList.toggle("show");}
    else if (tipo == 'muestraInformeP41') {document.getElementById("dropdownMuestraInformeP41").classList.toggle("show");}
    else if (tipo == 'muestraInformeP42') {document.getElementById("dropdownMuestraInformeP42").classList.toggle("show");}
    else if (tipo == 'muestraInformeP43') {document.getElementById("dropdownMuestraInformeP43").classList.toggle("show");}
    else if (tipo == 'muestraInformeP44') {document.getElementById("dropdownMuestraInformeP44").classList.toggle("show");}

};

function prueba(){
    dropInformes('muestraInformeV31');
    botones('v31');

}

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

function uploadInformes(firmas) {
    if (firmas == "AnexosP4") {document.querySelector(".uploadAnexosP4").classList.add("popup");}
}

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
