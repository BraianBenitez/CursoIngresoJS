function mostrar()
{
	//tomo la edad  

	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;

	if (edadIngresada < 18 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}

}//FIN DE LA FUNCIÓN