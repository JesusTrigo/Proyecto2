
var input = document.getElementById("myInput");

input.addEventListener("change", buscar);

//radiobtn = document.querySelectorAll('input[name="filtro2"]:checked');

var radio_gana = document.getElementById("radioGana");
//
radio_gana.addEventListener("change", buscar);


var radio_emp = document.getElementById("radioEmp");
//
radio_emp.addEventListener("change", buscar);
//
//
var radio_per = document.getElementById("radioPer");
//
radio_per.addEventListener("change", buscar);
//
//
var radio_prox = document.getElementById("radioProx");
//
radio_prox.addEventListener("change", buscar);

var radio_todos = document.getElementById("radioTodos");
//
radio_todos.addEventListener("change", buscar);


tabla(data.matches);

function tabla(matches) {

  var table_body = document.getElementById('tablapartidos');

  for (var i = 0; i < matches.length; i++) {
    var row = document.createElement('tr');

    var local_team = document.createElement('td');
    local_team.innerHTML = matches[i].homeTeam.name;

    var escudolocal = document.createElement('td');


    var escudo_local = document.createElement('img');
    escudo_local.setAttribute("src", "https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg");
    escudolocal.append(escudo_local);

    var escudoaway = document.createElement('td');
    var away_team = document.createElement('td');
    away_team.innerHTML = matches[i].awayTeam.name;


    var escudo_visitante = document.createElement('img');
    escudo_visitante.setAttribute("src", "https://crests.football-data.org/" + matches[i].awayTeam.id + ".svg");
    escudoaway.append(escudo_visitante);

    var score = document.createElement('td');
    if (matches[i].score.fullTime.homeTeam === null) {
      score.innerHTML = "Partido no jugado aún";
    } else {
      score.innerHTML = matches[i].score.fullTime.homeTeam + ' - ' + matches[i].score.fullTime.awayTeam;
    }


    row.append(local_team, escudolocal, score, escudoaway, away_team);

    table_body.append(row);
  }
}

buscar();

function buscar() {

  var inputRadio = document.querySelector('input[name="filtro2"]:checked').value;

  var input = document.getElementById("myInput");

  var filter = input.value.toUpperCase();

  var table = document.getElementById("tablapartidos");

  var tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    //TD[0] = la primera TD de cada TR

    var coincidenciaFiltro = null;

    // si no se pone null 

    var resultados = tr[i].getElementsByTagName("td")[2].innerHTML;

    var tdHome = tr[i].getElementsByTagName("td")[0];
    //console.log(tdHome.innerHTML);
    var tdAway = tr[i].getElementsByTagName("td")[4];
    //console.log(tdAway.innerHTML);
    if (tdHome.innerHTML.toUpperCase().indexOf(filter) > -1) {

      coincidenciaFiltro = 0;  // el 0 es la primera posicon del resultado 0 - 0

      var noCoincidenciaFiltro = 4; // el 4 es la ultima posicon del resultado 0 - 0

    } else if (tdAway.innerHTML.toUpperCase().indexOf(filter) > -1) {

      coincidenciaFiltro = 4;

      var noCoincidenciaFiltro = 0;

    }

    //console.log(coincidenciaFiltro);
    if (filter === "") {
      tr[i].style.display = "";
    } else if (coincidenciaFiltro !== null) {

      //console.log("entra");

      if (inputRadio === "ganados") {
        console.log("entra");
        console.log((resultados.charAt(coincidenciaFiltro)))
        console.log((resultados.charAt(noCoincidenciaFiltro)))
        if (Number(resultados.charAt(coincidenciaFiltro)) > Number(resultados.charAt(noCoincidenciaFiltro))) {
          //no se puede comparar texto
          tr[i].style.display = "";


        } else {

          tr[i].style.display = "none";

        }


      } else if (inputRadio === "perdidos") {

        if (Number(resultados.charAt(coincidenciaFiltro)) < Number(resultados.charAt(noCoincidenciaFiltro))) {

          tr[i].style.display = "";


        } else {

          tr[i].style.display = "none";

        }

      } else if (inputRadio === "empatados") {

        if (Number(resultados.charAt(coincidenciaFiltro)) === Number(resultados.charAt(noCoincidenciaFiltro))) {

          tr[i].style.display = "";


        } else {

          tr[i].style.display = "none";

        }

      } else if (inputRadio === "proximos") {

        if (resultados === "Partido no jugado aún") {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none"
        }

      } else if (inputRadio === "todos") {
        tr[i].style.display = "";
      }

    } else {
      tr[i].style.display = "none";
    }

  }
}



/*if (tdHome && tdAway) {

  if ((tdHome.innerHTML.toUpperCase().indexOf(filter) > -1) || (tdAway.innerHTML.toUpperCase().indexOf(filter) > -1)) {
    tr[i].style.display = "";
  } else {
    tr[i].style.display = "none";
  }
*/








//if ((tdHome.innerHTML.toUpperCase().indexOf(filter) > -1) || (tdAway.innerHTML.toUpperCase().indexOf(filter) > -1)) {
//  tr[i].style.display = "";
//} else {
//  tr[i].style.display = "none";
//}



//ver k radio button = checked

//condicion if raddiobutton = checked

//var radio_emp = document.getElementById("input[type=checkbox]:checked");


/*function filtro2(matches) {

  var radiobutton = document.getElementById("radio1");

  var filter = radiobutton.value.toUpperCase();

  //if (radiobutton) {
  //  console.log("yeah");
  //} else (console.log("nou"));
  //var radiobutton = document.querySelectorAll("input[type=checkbox]:checked");


  for (var i = 0; i < matches.length; i++) {

    var homeTEAM = matches[i].homeTeam.name;

    var awayTEAM = matches[i].awayTeam.name;

    var radio_gana = document.getElementById("radioGana");

    radio_gana.addEventListener("keyup", buscarnombre);


    if (document.getElementById('radioEmp').checked) {
      console.log("marcado");

    }

  }
}*/




// var polla = null
// for (var i=0; i<5; i++){
//     console.log(polla);
//     polla = 1;
//     console.log(polla);
//     polla = 2;
//     console.log(polla);



// }
// for (var i=0; i<5; i++){
//     var polla = null;
//     console.log(polla);
//     polla = 1;
//     console.log(polla);
//     polla = 2;
//     console.log(polla);
// }