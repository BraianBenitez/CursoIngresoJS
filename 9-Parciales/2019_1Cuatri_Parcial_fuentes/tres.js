function mostrar()
{
    let ingresarPrecio;
    let porcentajeDescuento;
    let descuento;
    let precioFinalConDescuento;

    ingresarPrecio = prompt("Ingrese el precio " , "Aquí");
    porcentajeDescuento = prompt("Ingrese el porcentaje de descuento" , "Aquí");
    
    ingresarPrecio = parseFloat(ingresarPrecio);
    porcentajeDescuento = parseFloat(porcentajeDescuento);

    descuento = ingresarPrecio * (porcentajeDescuento / 100);

    precioFinalConDescuento = ingresarPrecio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinalConDescuento;
}
