function mostrar()
{
	//tomo la edad  
	
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 18)
	{
		alert("Usted es mayor de edad.");
	}
}//FIN DE LA FUNCIÓN