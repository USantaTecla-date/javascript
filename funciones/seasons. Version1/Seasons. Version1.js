function afterOrEqualsInYear(day1, month1, day2, month2) {
    return day1 >= day2 && month1 == month2 || month1 > month2;
}

function beforeInYear(day1, month1, day2, month2) {
    return day1 < day2 && month1 == month2 || month1 < month2;
}

function getSeason(day, month, year) {
    if (afterOrEqualsInYear(day, month, 21, 3) && beforeInYear(day, month, 21, 6)) {
        return "primavera";
    }
    if (afterOrEqualsInYear(day, month, 21, 6) && beforeInYear(day, month, 21, 9)) {
        return "verano";
    }
    if (afterOrEqualsInYear(day, month, 21, 9) && beforeInYear(day, month, 21, 12)) {
        return "otoño";
    }
    return "invierno";
}

function getPosition(day, month) {
    if (day >= 21 && (month - 1) % 3 == 0 || day <= 20 && (month - 2) % 3 == 0) {
        return "mediados";
    } else if (day >= 21 && (month - 2) % 3 == 0 || day <= 20 && (month - 3) % 3 == 0) {
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

let day = parseInt(prompt("Dia de la fecha [1-30]: "));
let month = parseInt(prompt("Mes de la fecha [1-12]: "));
let year = parseInt(prompt("Año de la fecha [1-2020]: "));
showResults(day, month, year);