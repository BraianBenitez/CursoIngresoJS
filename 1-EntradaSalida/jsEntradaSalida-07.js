/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// 	VER NOTA PROPIA AL FINAL DEL CÓDIGO

function sumar()
{	
	let num1;
	let num2;
	let resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 + num2;
	
	alert("La suma es: " + resultado);
}

function restar()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 - num2;

	alert("La resta es: " + resultado);

}

function multiplicar()
{ 
	let num_1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num_2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = num_1 * num_2;

	alert("La multiplicación es: " + resultado);
}

function dividir()
{
	let num_1 = document.getElementById("txtIdNumeroUno").value;
	let num_2 = document.getElementById("txtIdNumeroDos").value;
	let resultado;

	num_1 = parseFloat(num_1);
	num_2 = parseFloat(num_2);

	resultado = num_1 / num_2;

	alert("El resultado de la división entre " + num_1 + " y " + num_2 + " es: " + resultado);
}

/* 	NOTA : TODAS SON DISTINTAS FORMAS DE REALIZAR EL EJERCICIO. TENER EN CUENTA LA MÁS APROPIADA SEGÚN EL PROFESOR */