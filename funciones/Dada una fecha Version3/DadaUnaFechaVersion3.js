function getDaysSinceBeginningYear(day, month) {
    return (month - 1) * 30 + day;
}

function getSeason(day, month) {
    let days = getDaysSinceBeginningYear(day, month);
    let trimester = 0;
    if (80 < days && days <= 350) {
        trimester = parseInt((days - 81) / 90) + 1;
    }
    if (trimester == 1) {
        return "primavera";
    }
    if (trimester == 2) {
        return "verano";
    }
    if (trimester == 3) {
        return "otoño";
    }
    return "invierno";
}

function getPosition(day, month) {
    let days = getDaysSinceBeginningYear(day, month) - 80;
    if (days <= 0) {
        days += 360;
    }
    let monthly = parseInt((days - 1) / 30) % 3;
    if (monthly == 1) {
        return "mediados";
    } else if (monthly == 2) {
        return "ultimos";
    }
    return "primeros";
} 

function showResults(day, month, year){
    alert("El " + day + " del " + month + " de " + year + " cae a " 
    + getPosition(day, month) + " " + getSeason(day, month) + ".\n");
}


showResults(1, 1, 1999);
showResults(20, 3, 1999);
showResults(21, 3, 1999);
showResults(20, 6, 1999);
showResults(21, 6, 1999);
showResults(20, 9, 1999);
showResults(21, 9, 1999);
showResults(20, 12, 1999);
showResults(21, 12, 1999);
showResults(31, 12, 1999);

let day = parseInt(prompt("Dia de la fecha [1-31]: "));
let month = parseInt(prompt("Mes de la fecha [1-12]: "));
let year = parseInt(prompt("Año de la fecha [1-2020]: "));
showResults(day, month, year);
