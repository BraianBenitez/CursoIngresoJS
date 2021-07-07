/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
	{

	let nombre;
	let mensaje;

	nombre = prompt("Ingrese su nombre", "Aquí");

	mensaje = "Su nombre es: " + nombre;

	document.getElementById("txtIdNombre").value = nombre;

}
//EJERCICIO 4 BIS 	// ANALIZAR SI ESTÁ BIEN

/*
function mostrar()
{
	let nombre;
	let apellido;
	let mensaje;

	nombre = prompt("Ingrese su nombre", "Aquí");
	apellido = prompt("Ingrese su apellido", "Aquí");

	mensaje = "Usted se llama: " + nombre + " " + apellido;

	alert(mensaje);

	document.getElementById("txtIdNombre").value = nombre;

}
*/