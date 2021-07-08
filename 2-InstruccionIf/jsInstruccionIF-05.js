function mostrar()
{
	let edadIngresada;
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		alert("Usted NO es un/a adolescente.");
	}
	else if (edadIngresada > 17)
	{
		alert("Usted NO es un/a adolescente.");
	}

}//FIN DE LA FUNCIÓN