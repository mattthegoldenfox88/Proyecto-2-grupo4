


window.onload = function() {
    var formulario = document.getElementById("formulario");
     function Enviar(objeto) { 
         console.log("conectar con la base de datos");
         console.log.log(objeto);
         return objeto;
     }
     formulario.submit = (e) => { 
      e.preventDefault();   
    var Nombre = document.getElementById("Nombre");
    var Apellidos = document.getElementById("Apellidos");
    var Email = document.getElementById("Email");
    var Movil = document.getElementById("Movil");
    var Mensaje = document.getElementById("Mensaje");
    var usuario = { "Nombre": Nombre.value, "Apellidos": Apellidos.value, "Email": Email.value, "Movil": Movil.value, "Mensaje": Mensaje.value };
    Enviar(usuario);
        }
}