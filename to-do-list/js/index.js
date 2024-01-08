let dataExibir = document.getElementById("data");
let diaExibir = document.getElementById("dia");
let data = new Date();

let meses = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

let dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let ano = data.getFullYear();
let mes = data.getMonth();
let dataAtual = data.getDate();
let dia = data.getDay();

let dataHoje = `${dataAtual} - ${meses[mes]} - ${ano}`;

diaExibir.innerHTML = "Today is " + dias[dia];
dataExibir.innerHTML = dataHoje;

