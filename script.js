alert("Vamos a acomodar 3 números de mayor a menor y de menor a mayor");

// Pedimos los 3 números
let num1 = +prompt("Ingresa el primer número");
let num2 = +prompt("Ingresa el segundo número");
let num3 = +prompt("Ingresa el tercer número");

// Verificamos si los datos son números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
	alert("Uno de los datos ingresados no es un número");
} else {
	// Guardamos los números en un arreglo
	let numeros = [num1, num2, num3];

	// Copiamos el arreglo para ordenarlo de dos maneras
	let ascendente = [...numeros];
	let descendente = [...numeros];

	// Ordenamos de menor a mayor
	ascendente.sort((a, b) => a - b);

	// Ordenamos de mayor a menor
	descendente.sort((a, b) => b - a);

	// Verificamos si todos los números son iguales
	if (num1 === num2 && num2 === num3) {
		alert("Todos los números son iguales");
	}

	// Mostramos resultados
	alert("Menor a mayor: " + ascendente.join(", "));

	alert("Mayor a menor: " + descendente.join(", "));
}
