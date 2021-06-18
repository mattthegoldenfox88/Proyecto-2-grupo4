window.onload = function () {
    form.onsubmit = function (e) {
        e.preventDefault();
        
        var evento = getEvento();
            
        var token = getToken();

        crearEvento(evento, token);
    }
}

function getToken() {
    if (localStorage.getItem('token') != null) {
        console.log('token de cache');
        return localStorage.getItem('token');
    } else {
        console.log('token dado');

        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGFhYzc4NzU2ZmNmYzFiZGQ5YWE2OWEiLCJlbWFpbCI6InBhY29AcGFjby5lcyIsImlhdCI6MTYyMTg4MzgxNiwiZXhwIjoxNjIxOTU1ODE2fQ.b-llibgs0br0YhZHq7nxoSwnisrfDmeFlCKJNoJe060';
    }
}

function tipoEvento() {

    var resultado = "";

    var porNombre = document.getElementsByName("tipo");
   
    for (var i = 0; i < porNombre.length; i++) {
        if (porNombre[i].checked) {
            resultado = porNombre[i].value;
        }
    }

    return resultado;

    /* document.getElementById("resultado").innerHTML = " \Por Nombre: "+ resultado; */
}
function crearEvento(evento, token){
    axios.post('http://163.172.135.235:3000/api/v1/events',      
    evento,
    {
        headers: {
            token: token
        }
    })
    .then(function(res) {
        console.log(res);
        console.log(res.data);
        if (res.status == 201) {
            //mensaje.innerHTML = 'El nuevo evento ha sido almacenado con id: ' + res.data._id;
            alert('evento creado'); 
        }
    })
    .catch(function(err) {
        console.log(err);
    })
    .then(function() {
       //loading.style.display = 'none';
    });
}
function getEvento() {
    const formData = new FormData(document.querySelector('form'));
    var evento = Object.fromEntries(formData);
    evento.foto = document.getElementById('foto').value;
    console.log(evento);
    return evento;
}