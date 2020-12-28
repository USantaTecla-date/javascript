function getDaysSinceBeginningYear(day, month) {
    return (month - 1) * 30 + day;;
}

function beforeInYear(day1, month1, day2, month2) {
    return day1 < day2 && month1 == month2 || month1 < month2;
}
function getSeason(day, month) {
    if (beforeInYear(day, month, 21, 3)) {
        return "invierno";
    }
    if (beforeInYear(day, month, 21, 6)) {
        return "primavera";
    }
    if (beforeInYear(day, month, 21, 9)) {
        return "verano";
    }
    if (beforeInYear(day, month, 21, 12)) {
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
let day = prompt("Dia de la fecha [1-31]: ");
let month = prompt("Mes de la fecha [1-12]: ");
let year = prompt("Año de la fecha [1-2020]: ");
alert("El " + day + " del " + month + " de " + year + " cae a " + getPosition(day, month) + " " + getSeason(day, month) + ".");