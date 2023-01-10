var docs = document.getElementById("doc");

function generateDoc(){

    //const fs = require("fs");
    // const PizZip = require("pizzip");
    // const Docxtemplater = require("docxtemplater");
    // const path = require("path");

    var reader = new FileReader();
    if (docs.files.length === 0) {
        alert("No files selected");
    }
    reader.readAsBinaryString(docs.files.item(0));

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
        const cedula = document.getElementById("cedula").value;
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
            id: cedula,
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
}
