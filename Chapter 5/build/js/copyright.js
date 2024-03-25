"use strict";
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
//Variaton 1
// let year: HTMLElement | null 
// year = document.getElementById("year")
// let thisYear: string 
// thisYear = new Date().getFullYear.toString()
// if (year){
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
//Variation 2
const year = document.getElementById("year");
const thisYear = new Date().getFullYear.toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
