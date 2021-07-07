/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	var nombreIngresado;

	nombre = prompt("Ingrese su nombre", "Aquí");
	nombreIngresado = "Su nombre es: " + nombre;


	alert(nombreIngresado);
}