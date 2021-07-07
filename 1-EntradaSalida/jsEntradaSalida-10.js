/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeDescontado;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	importeDescontado = (importe * 25) / 100;
	importeDescontado = parseInt(importeDescontado);

	resultado = importe - importeDescontado;
	
	document.getElementById("txtIdResultado").value = resultado;
 }
