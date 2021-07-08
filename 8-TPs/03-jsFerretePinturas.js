/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
    let conversiónACentígrados;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada = parseFloat(temperaturaIngresada);

    conversiónACentígrados = (temperaturaIngresada - 32) * 5/9
    conversiónACentígrados = conversiónACentígrados.toFixed(1);

    alert(temperaturaIngresada + " grados Fahrenheit son " + conversiónACentígrados + " grados centígrados.")
}

function CentigradosFahrenheit () 
{
	let temperaturaIngresada;
    let conversiónAFahrenheit;

    temperaturaIngresada = document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada = parseFloat(temperaturaIngresada);

    conversiónAFahrenheit = (temperaturaIngresada * 9/5) + 32;
    conversiónAFahrenheit = conversiónAFahrenheit.toFixed(1);

    alert(temperaturaIngresada + " grados centígrados son " + conversiónAFahrenheit + " grados Fahrenheit.");
}
