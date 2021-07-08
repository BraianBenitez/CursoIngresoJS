function mostrar()
{
	//tomo la edad  

	let edadIngresada;
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13)
	{
		alert("Usted es un/a niño/a.");
	}
	else if (edadIngresada > 17)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		alert("Usted es un/a adolescente.");
	}
}//FIN DE LA FUNCIÓN