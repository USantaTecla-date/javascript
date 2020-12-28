let day1 = prompt("Dia de la fecha [1-31]: ");
let month1 = prompt("Mes de la fecha [1-12]: ");
let year1 = prompt("Año de la fecha: [1-2020]");
let day2 = prompt("Dia de la fecha [1-31]: ");
let month2 = prompt("Mes de la fecha [1-12]: ");
let year2 = prompt("Año de la fecha: [1-2020]");

alert("¿La fecha es anterior? " + (year1 < year2 || year1 == year2 && (month1 < month2 || month1 == month2 && day1 < day2)));