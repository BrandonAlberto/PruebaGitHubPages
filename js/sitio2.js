$(document).ready(function()
{

	/*alert("Archivo cargado con exito");*/

	//Accediendo a los enlaces
	var botonInicio = $('#botonInicio');
	var botonAcerca = $('#botonAcerca');
	var botonTrabajos = $('#botonTrabajos');
	var botonContacto = $('#botonContacto');

	//Accediendo a las secciones
	var seccionAcerca = $('#acercaDe').offset().top;
	var seccionPortfolio = $('#portfolio').offset().top;
	var seccionContacto = $('#contacto').offset().top;

	//Animando boton
	botonAcerca.on('click', function(e){

		//Quita la funcionalidad del enlace
		e.preventDefault();

		//Crando un selector al html y body
		$('html, body').animate({
			scrollTop: seccionAcerca
		});
	});

	botonTrabajos.on('click', function(e){

		//Quita la funcionalidad del enlace
		e.preventDefault();

		//Crando un selector al html y body
		$('html, body').animate({
			scrollTop: seccionPortfolio
		});
	});

	botonContacto.on('click', function(e){

		//Quita la funcionalidad del enlace
		e.preventDefault();

		//Crando un selector al html y body
		$('html, body').animate({
			scrollTop: seccionContacto
		});
	});

});