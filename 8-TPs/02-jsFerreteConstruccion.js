/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let metroCuadrado;
    let cantidadAlambre;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    metroCuadrado = (largoTerreno * 2) + (anchoTerreno * 2);

    cantidadAlambre = metroCuadrado * 3;

    alert("La cantidad de alambre a comprar es: " + cantidadAlambre + " metros de alambre.");
}


function Circulo () 
{
	let radioTerreno;

    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseInt(radioTerreno);

    radioTerreno = radioTerreno * 3;

    alert("La cantidad de alambre a comprar es: " + radioTerreno + " metros de alambre.");
}


function Materiales () 
{
	let largoTerreno;
    let anchoTerreno;
    let bolsaCementoPorMetroCuadrado;
    let bolsaCalPorMetroCuadrado;
    let medidaPiso;
    let bolsasDeCementoNecesarias;
    
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    medidaPiso = largoTerreno * anchoTerreno;

    bolsaCementoPorMetroCuadrado = 2;
    bolsaCalPorMetroCuadrado = 3;

    bolsasDeCementoNecesarias = (bolsaCementoPorMetroCuadrado * medidaPiso);
    bolsasDeCalNecesarias = (bolsaCalPorMetroCuadrado * medidaPiso);

    alert("Se necesitan " + bolsasDeCementoNecesarias + " bolsas de cemento y " + bolsasDeCalNecesarias + " bolsas de cal para las medidas ingresadas.");
}