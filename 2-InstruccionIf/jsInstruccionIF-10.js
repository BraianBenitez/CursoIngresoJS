function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let resultadoExamen;

	resultadoExamen = Math.floor(Math.random() * 11);

	if (resultadoExamen >= 9)
	{
		alert("EXCELENTE.");
	}
	else if (resultadoExamen >= 4)
	{
		alert("APROBÓ.");
	}
	else
	{
		alert("Vamos, ¡la próxima se puede!");
	}
}//FIN DE LA FUNCIÓN

// ---------------	ANOTHER WAY --------------------

/*

// Generate a number between 0 and 10, including 10

function generateRandomInteger(max) 
{
    return Math.floor(Math.random() * max) + 1;
}

let value4 = generateRandomInteger(10);

*/