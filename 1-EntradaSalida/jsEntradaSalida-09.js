/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let importeAumentado;
	let resultado;

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);
	
	importeAumentado = importe * (10 / 100);
	importeAumentado = parseInt(importeAumentado);

	resultado = importe + importeAumentado;

	document.getElementById("txtIdResultado").value = resultado;



}

// SE MULTIPLICA POR .1