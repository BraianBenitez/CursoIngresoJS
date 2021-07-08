function mostrar()
{
	//tomo la edad  

	let edadIngresada;
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		alert("Rango no aceptado.");
	}
	else if (edadIngresada > 17)
	{
		alert("Rango no aceptado.");
	}
	else
	{
		alert("Usted es un/a adolescente.");

	}

}//FIN DE LA FUNCIÓN