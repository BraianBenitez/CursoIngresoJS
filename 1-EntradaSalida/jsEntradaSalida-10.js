/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
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
 */


 // PEDIMOS PORCENTAJE POR PROMPT (EJ. 10 BIS)

 
function mostrarAumento()
{
	let importe;
	let importeDescontado;
	let resultado;
	let importeADescontar;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	importeADescontar = prompt("Ingrese porcentaje a aumentar.","Aquí");
	importeADescontar = parseInt(importeADescontar);

	importeDescontado = importe * (importeADescontar/100);
	//importeDescontado = parseInt(importeDescontado);  // No hace que el código falle, pero es innecesario debido a que el importe ya fue transformado a número

	resultado = importe - importeDescontado;

	document.getElementById("txtIdResultado").value = resultado;
}