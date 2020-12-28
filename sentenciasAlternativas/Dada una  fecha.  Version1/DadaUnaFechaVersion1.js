let day = prompt("Dia de la fecha [1-31]: ");
let month = prompt("Mes de la fecha [1-12]: ");
let year = prompt("Año de la fecha [1-2020]: ");

let season = "invierno";
if (((day >= 21 && month == 3) || month > 3) && ((day < 21 && month == 6) || month < 6)) {
    season = "primavera";
} else if (((day >= 21 && month == 6) || month > 6) && ((day < 21 && month == 9) || month < 9)) {
    season = "verano";
} else if (((day >= 21 && month == 9) || month > 9) && ((day < 21 && month == 12) || month < 12)) {
    season = "otoño";
}
let position = "primeros";
if ((day >= 21 && (month - 1) % 3 == 0) || (day <= 20 && (month - 2) % 3 == 0)) {
    position = "mediados";
} else if ((day >= 21 && (month - 2) % 3 == 0) || (day <= 20 && (month - 3) % 3 == 0)) {
    position = "ultimos";
}
alert("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");