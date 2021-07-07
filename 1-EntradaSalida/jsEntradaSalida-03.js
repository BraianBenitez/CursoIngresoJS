/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	var mensajeParaElUsusario;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	mensajeParaElUsusario = "El nombre ingresado es: " + nombreIngresado;

	alert(mensajeParaElUsusario);
}