/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// 	VER NOTA PROPIA AL FINAL DEL CÓDIGO

function sumar()
{	
	let primerNúmero;
	let segundoNúmero;
	let resultado;

	primerNúmero = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNúmero = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerNúmero + segundoNúmero;
	
	alert("La suma es: " + resultado);
}

function restar()
{
	let primerNúmero;
	let segundoNúmero;
	let resultado;

	primerNúmero = document.getElementById("txtIdNumeroUno").value;
	segundoNúmero = document.getElementById("txtIdNumeroDos").value;

	primerNúmero = parseInt(primerNúmero);
	segundoNúmero = parseInt(segundoNúmero);

	resultado = primerNúmero - segundoNúmero;

	alert("La resta es: " + resultado);

}

function multiplicar()
{ 
	let primerNúmero = parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundoNúmero = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = primerNúmero * segundoNúmero;

	alert("La multiplicación es: " + resultado);
}

function dividir()
{
	let primerNúmero = document.getElementById("txtIdNumeroUno").value;
	let segundoNúmero = document.getElementById("txtIdNumeroDos").value;
	let resultado;

	primerNúmero = parseFloat(primerNúmero);
	segundoNúmero = parseFloat(segundoNúmero);

	resultado = primerNúmero / segundoNúmero;

	alert("El resultado de la división entre " + primerNúmero + " y " + segundoNúmero + " es: " + resultado);
}

/* 	NOTA : TODAS SON DISTINTAS FORMAS DE REALIZAR EL EJERCICIO. TENER EN CUENTA LA MÁS APROPIADA SEGÚN EL PROFESOR */

/* NOTA 2(para quien lo lea): Entiendo que se debe realizar con el procedimiento de, por ejemplo, la
función restar(con cada paso bien definido, y con la menor cantidad de operaciones
por línea). Sólo que quise jugar un poco con las variables y ahora me da más pereza
cambiar el código que escribir esto.
Prometo no hacerlo en el parcial :(
*/