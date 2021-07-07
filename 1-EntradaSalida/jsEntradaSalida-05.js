/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let nombre;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama " + nombre + " y tiene " + edad + " años";

	alert(mensaje);


	// NOTA: SI NO PODEMOS LLAMAR POR ID A UNA VARIABLE QUE QUERAMOS UTILIZAR, LO PODEMOS HACER MEDIANTE EL PROMPT

	// 		CON APELLIDO OBTENIDO/LLAMADO MEDIANTE EL PROMPT
	
/*
	function mostrar()
{
	let nombre;
	let apellido;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido" , "Aquí");

	mensaje = "Usted se llama " + nombre + " " + apellido + " y tiene " + edad + " años";

	alert(mensaje);
}
*/






	
	//		INTENTAR HACERLO MEDIANTE LA MODIFICACIÓN DE VARIOS MENSAJES (LÍNEA 58)
	
	
	/*

	var nombre;
	var edad;
	var mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//alert("Usted se llama José y tiene 66 años");
	mensaje="Usted se llama "+nombre+" y tiene "+edad+" años";

	mensaje = "Usted se llama ";
	mensaje = mensaje 

	alert(mensaje);
	*/
}