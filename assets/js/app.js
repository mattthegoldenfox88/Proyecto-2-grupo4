  
// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);


// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/
//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/

var boton = document.getElementById('json_get');
    var mensaje1 = document.getElementById('mensaje1');
    var listDiv = document.getElementById('listDiv');
    boton.addEventListener('click', function() {
        loading.style.display = 'block';
        mensaje1.innerHTML = '';
        axios.get('http://localhost:3000/api/v1/events', {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                    listDiv.style.display = 'block';
                    mensaje1.innerHTML = 'Lista de eventos';
                    var todoList = document.getElementById('todo-list');
                    var arrayData = res.data.data;
                    todoList.innerHTML = '';
                    for (let i = 0; i < arrayData.length; i++) {
                        todoList.innerHTML += '<li>' + arrayData[i].name + '</li>';
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            })
            .then(function() {
                loading.style.display = 'none';
            });
    });