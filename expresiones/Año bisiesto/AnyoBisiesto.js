var year = prompt("Año [1-2000]: ");

alert("¿El año es bisiesto? " + (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)));


