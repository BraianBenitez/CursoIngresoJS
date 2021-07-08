/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*
function mostrarAumento()
{
	let importe
	let importeAumentado
	let resultado

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);
	
	importeAumentado = importe * (10 / 100);
	//importeAumentado = parseInt(importeAumentado);  // No hace que el código falle, pero es innecesario debido a que el importe ya fue transformado a número

	resultado = importe + importeAumentado;

	document.getElementById("txtIdResultado").value = resultado;

}
*/

// SE MULTIPLICA POR .1


//  PEDIMOS PORCENTAJE POR PROMPT (EJ. 09 BIS)

function mostrarAumento()
{
	let importe;
	let importeAumentado;
	let resultado;
	let importeAAumentar;

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);

	importeAAumentar = prompt("Ingrese porcentaje a aumentar.","Aquí");
	importeAAumentar = parseInt(importeAAumentar);

	importeAumentado = importe * (importeAAumentar/100);
	//importeAumentado = parseInt(importeAumentado);  // No hace que el código falle, pero es innecesario debido a que el importe ya fue transformado a número

	resultado = importe + importeAumentado;

	document.getElementById("txtIdResultado").value = resultado;
}