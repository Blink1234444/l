alumnos=[];

function submit(){
/* AGREGANDO NOMBRES 1 POR 1
    var alumno1=document.getElementById("nombre1").value; 
    var alumno2=document.getElementById("nombre2").value; 
    var alumno3=document.getElementById("nombre3").value; 
    var alumno4=document.getElementById("nombre4").value; 

    alumos.push(nombre1);
    alumos.push(nombre2);
    alumos.push(nombre3);
    alumos.push(nombre4);

    document.getElementById("ver_nombre").inerHTML= alumnos; */

    var ver_alumnos=[];
    for (var i=1; i<=4;i++){
        var nombre_alumnos=document.getElementById("nombre"+i).value;
        alumnos.push(nombre_alumnos);
    }

    var tamanio=alumnos.lenght;

    for(var j=0; j<tam; j++){
        ver_alumnos.push("<h4> Nombre - " + alumnos[j] + "</h4>");
    }
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumnos;


    var sin_comas= ver_alumnos.join("")
        document.getElementById("ver_nombre_sin_comas").innerHTML =  sin_comas;

        document.getElementById("boton_enviar").style.display="none";
        
        document.getElementById("boton_ordenar").style.display="inline-block";

}
    

function sorting(){
    alumnos.sort();
    var alumnos_sort=[];
    var tam_alumnos=alumnos.lenght;
    for(var k=0;k<tam_alumnos;k++){
        alumnos_sort.push("<h4> Nombre  - " + alumnos[j] + "</h4>");
    }
    var sn_comas=alumnos.join(" ");
    document.getElementById("ver_nombre_sin_comas").innerHTML =  sn_comas;
}
    function update(){
        document.getElementById("ver_nombre_sin_comas").innerHTML = "<h1> Nombre  - " + alumnos + "</h1>";
    }


