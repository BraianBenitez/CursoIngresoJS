function mostrar()
{
  let nombreA;
  let nombreB;
  let pesoA;
  let pesoB;
  let sumaPesos;
  let promedioPesos;

  nombreA = prompt("Ingrese su nombre" , "Aquí");
  nombreB = prompt("Ingrese su nombre" , "Aquí");

  pesoA = prompt("Ingrese su peso" , "Aquí")
  pesoB = prompt("Ingrese su peso" , "Aquí")
  pesoA = parseFloat(pesoA);
  pesoB = parseFloat(pesoB);

  sumaPesos = pesoA + pesoB;

  promedioPesos = (pesoA + pesoB) / 2;

  alert("Ustedes se llaman " + nombreA + " y " + nombreB + ", pesan " + pesoA + "kg y " + pesoB + "kg respectivamente, que sumados son " + sumaPesos + "kg, y cuyo promedio es " + promedioPesos + "kg.");
}
