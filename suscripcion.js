


window.onload = function() {
    var formulario = document.getElementById("formulario");
     function suscribete (objeto) { 
         console.log("conectar con la base de datos");
         console.log.log(objeto);
         return objeto;
     }
     formulario.onsubmit = (e) => { 
      e.preventDefault();   
    var Nombre = document.getElementById("Nombre");
    var Apellidos = document.getElementById("Apellidos");
    var Email = document.getElementById("Email");
    var Movil = document.getElementById("Movil");
    suscribete(usuario);
        }
}