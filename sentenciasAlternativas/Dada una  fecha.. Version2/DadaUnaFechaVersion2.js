let day = prompt("Dia de la fecha [1-31]: ");
let month = prompt("Mes de la fecha [1-12]: ");
let year = prompt("Año de la fecha [1-2020]: ");
let days = (month - 1) * 30 + day;
let season = "invierno";
let trimester = 0;
if (80 < days && days <= 350) {
    trimester = parseInt((days - 81) / 90) + 1;
}
if (trimester == 1) {
    season = "primavera";
} else if (trimester == 2) {
    season = "verano";
} else if (trimester == 3) {
    season = "otoño";
}
days -= 80;
if (days <= 0) {
    days += 360;
}
let monthly = parseInt((days - 1) / 30) % 3;
let position = "primeros";
if (monthly == 1) {
    position = "mediados";
} else if (monthly == 2) {
    position = "ultimos";
}
alert("El " + day + " del " + month + " de " + year + " cae a " + position + " " + season + ".");