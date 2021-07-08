/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let primerProducto;
    let segundoProducto;
    let tercerProducto;
    let resultadoSuma;

    primerProducto = document.getElementById("txtIdPrecioUno").value;
    segundoProducto = document.getElementById("txtIdPrecioDos").value;
    tercerProducto = document.getElementById("txtIdPrecioTres").value;
	
    primerProducto = parseInt(primerProducto);
    segundoProducto = parseInt(segundoProducto);
    tercerProducto = parseInt(tercerProducto);

    resultadoSuma = primerProducto + segundoProducto + tercerProducto;

    alert("El resultado de la suma es: " + resultadoSuma);
}
function Promedio () 
{
    let primerProducto;
    let segundoProducto;
    let tercerProducto;
    let resultadoPromedio;

    primerProducto = document.getElementById("txtIdPrecioUno").value;
    segundoProducto = document.getElementById("txtIdPrecioDos").value;
    tercerProducto = document.getElementById("txtIdPrecioTres").value;

    primerProducto = parseInt(primerProducto);
    segundoProducto = parseInt(segundoProducto);
    tercerProducto = parseInt(tercerProducto);

    resultadoPromedio = (primerProducto + segundoProducto + tercerProducto) / 3;

    resultadoPromedio = resultadoPromedio.toFixed(2); // reduce la cantidad de decimales que se muestran al número elegido dentro del argumento

    alert("El promedio de los tres productos es: " + resultadoPromedio);
}
function PrecioFinal () 
{
	
    let primerProducto;
    let segundoProducto;
    let tercerProducto;
    let aumentoIVA;
    let precioFinalConIVA;

    primerProducto = document.getElementById("txtIdPrecioUno").value;
    segundoProducto = document.getElementById("txtIdPrecioDos").value;
    tercerProducto = document.getElementById("txtIdPrecioTres").value;

    primerProducto = parseInt(primerProducto);
    segundoProducto = parseInt(segundoProducto);
    tercerProducto = parseInt(tercerProducto);

    aumentoIVA = (primerProducto + segundoProducto + tercerProducto) * 23 / 100;

    precioFinalConIVA = (primerProducto + segundoProducto + tercerProducto) + aumentoIVA;

    alert("El precio final, con IVA incluido, es: " + precioFinalConIVA);
}