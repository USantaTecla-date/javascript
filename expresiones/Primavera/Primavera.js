let day = prompt("Dia de la fecha [1-31]: ");
let month = prompt("Mes de la fecha [1-12]: ");
let year = prompt("Año de la fecha [1-2020]: ");
      
alert("¿Es primavera? " + ((day >= 21 && month == 3) || (month >= 4 && month <= 5) || (day <= 20 && month == 6)));