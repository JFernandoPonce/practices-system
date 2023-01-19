var docs31 = document.getElementById("doc31");
var docs32 = document.getElementById("doc32");
var docs33 = document.getElementById("doc33");
var docs51 = document.getElementById("doc51");
var docs52 = document.getElementById("doc52");
var docs53 = document.getElementById("doc53");
var docs54 = document.getElementById("doc54");

function generateDoc31(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs31.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs31.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const inicioProyecto = document.getElementById("inicioProyecto").value;
        const finProyecto = document.getElementById("finProyecto").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const inicioDate = document.getElementById("fechaInicio31").value;
        const endDate = document.getElementById("fechaFinal31").value;
        const fechaActvidad = document.getElementById("fecha_de_actividad").value;
        const actvidad = document.getElementById("actividadRealizada").value;
        const duracionActividad = document.getElementById("duracionActividad").value;
        const observaciones = document.getElementById("observacion").value;
        const duracionTotal = document.getElementById("duraciontotal").value;
        const conclusiones = document.getElementById("conclusiones").value;
        const recomendaciones = document.getElementById("recomendaciones").value;

        

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            inicioProyecto: inicioProyecto,
            finProyecto: finProyecto,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            inicioDate: inicioDate,
            endDate: endDate,
            fechaActvidad: fechaActvidad,
            actvidad: actvidad,
            duracionActividad: duracionActividad,
            observaciones: observaciones,
            duracionTotal: duracionTotal,
            conclusiones: conclusiones,
            recomendaciones: recomendaciones,
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};

function generateDoc32(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs32.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs32.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const inicioProyecto = document.getElementById("inicioProyecto").value;
        const finProyecto = document.getElementById("finProyecto").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const inicioDate = document.getElementById("fechaInicio32").value;
        const endDate = document.getElementById("fechaFinal32").value;
        const observaciones = document.getElementById("observaciones").value;

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            inicioProyecto: inicioProyecto,
            finProyecto: finProyecto,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            inicioDate: inicioDate,
            endDate: endDate,
            observaciones: observaciones
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};

function generateDoc33(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs33.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs33.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const inicioProyecto = document.getElementById("inicioProyecto").value;
        const finProyecto = document.getElementById("finProyecto").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const inicioDate = document.getElementById("fechaInicio32").value;
        const endDate = document.getElementById("fechaFinal32").value;
        const observaciones = document.getElementById("observaciones").value;

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            inicioProyecto: inicioProyecto,
            finProyecto: finProyecto,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            inicioDate: inicioDate,
            endDate: endDate,
            observaciones: observaciones
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};

function generateDoc51(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs51.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs51.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const inicioProyecto = document.getElementById("inicioProyecto").value;
        const finProyecto = document.getElementById("finProyecto").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const horasProyecto = document.getElementById("horasEmpleadas").value;
        const inicioDate = document.getElementById("fechaInicio51").value;
        const endDate = document.getElementById("fechaFinal51").value;
        const fechaActvidad = document.getElementById("fecha_de_actividad").name;
        const actividad = document.getElementById("actividadRealizada").name;
        const duracionActividad = document.getElementById("duracionActividad").name;
        const observaciones = document.getElementById("observacion").value;
        const duracionTotal = document.getElementById("duraciontotal").value;
        const conclusiones = document.getElementById("conclusiones").value;
        const recomendaciones = document.getElementById("recomendaciones").value;

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            email: email,
            telefono: telefono,
            inicioProyecto: inicioProyecto,
            finProyecto: finProyecto,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            horasProyecto: horasProyecto,
            inicioDate: inicioDate,
            endDate: endDate,
            fechaActvidad: fechaActvidad,
            actividad: actividad,
            duracionActividad: duracionActividad,
            observaciones: observaciones,
            duracionTotal: duracionTotal,
            conclusiones: conclusiones,
            recomendaciones: recomendaciones
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};

function generateDoc52(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs52.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs52.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const inicioDate = document.getElementById("fechaInicio52").value;
        const endDate = document.getElementById("fechaFinal52").value;
        const observaciones = document.getElementById("observaciones").value;

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            inicioDate: inicioDate,
            endDate: endDate,
            observaciones: observaciones
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};

function generateDoc53(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs53.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs53.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const inicioDate = document.getElementById("fecha_de_inicio").value;
        const endDate = document.getElementById("fecha_de_fin").value;
        const observaciones = document.getElementById("observaciones").value;

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            inicioDate: inicioDate,
            endDate: endDate,
            observaciones: observaciones
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};

function generateDoc54(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs54.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs54.files.item(0));

    reader.onerror = function (evt) {
        console.log("error reading file", evt);
        alert("error reading file" + evt);
    };
    reader.onload = function (evt) {
        const content = evt.target.result;
        var zip = new PizZip(content);
        var doc = new window.docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        // Load the docx file as binary content
        // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        const name = document.getElementById("nombre_estudiante").value;
        const idname = document.getElementById("idname").value;
        const semestre = document.getElementById("semestre").value;
        const carrera = document.getElementById("carrera").value;
        const escuela = document.getElementById("escuela").value;
        const tutor = document.getElementById("nombreTutor").value;
        const idTutor = document.getElementById("cedulaTutor").value;
        const caracteristicasC = document.getElementById("caracteristicasC").value;
        const numeroBen = document.getElementById("numeroBen").value;
        const nombreRC = document.getElementById("nombreRC").value;
        const idRC = document.getElementById("cedulaRC").value;
        const inicioDate = document.getElementById("fecha_de_inicio").value;
        const endDate = document.getElementById("fecha_de_fin").value;
        const observaciones = document.getElementById("observaciones").value;

        doc.render({
            name: name,
            idname: idname,
            semestre: semestre,
            carrera: carrera,
            escuela: escuela,
            tutor: tutor,
            idTutor: idTutor,
            caracteristicasC: caracteristicasC,
            numeroBen: numeroBen,
            nombreRC: nombreRC,
            idRC: idRC,
            inicioDate: inicioDate,
            endDate: endDate,
            observaciones: observaciones
        });

        var blob = doc.getZip().generate({
            type: "blob",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        // Output the document using Data-URI
        saveAs(blob, "output.docx");
    };
};