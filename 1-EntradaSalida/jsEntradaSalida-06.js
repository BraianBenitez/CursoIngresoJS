/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value)

	suma = num1 + num2;

	alert("La suma es " + suma);


	/* 						ALTERNATIVE WAY

	let num1;
	let num2;
	let suma;

	num1 = document.getElementById("txtIdNumeroUno").value
	num2 = document.getElementById("txtIdNumeroDos").value

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;

	alert("La suma es " + suma); 	*/
}



//	MANERA DEL PROFESOR


/*
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = document.getElementById("txtIdNumeroUno").value;
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById("txtIdNumeroUno").value;
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert("La suma es: " + suma);
*/