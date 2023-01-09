import {fs} from "fs";
import {PizZip} from "pizzip";
import {Docxtemplater} from "docxtemplater";
import {path} from "path";
import {docxConverter} from "docx-pdf";


function generateDoc(){

    // Load the docx file as binary content
    const content = fs.readFileSync(
        path.resolve(__dirname, "FORMATOS-V-3_2.docx"),
        "binary"
    );

    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

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
        id_number: cedula,
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

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
    });

    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);


    docxConverter('./output.docx','./pdf-output.pdf',function(err,result){
    if(err){
        console.log(err);
    }
    console.log('result'+result);
    });
};