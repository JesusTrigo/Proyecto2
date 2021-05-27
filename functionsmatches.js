
let boton = document.getElementById("boton");

const spinner = document.getElementById("spinner");

var url = "http://api.football-data.org/v2/competitions/2014/matches";

fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "e67e04cbd04240498f76030516c09e72"
  }
})
  .then(response => {

    if (response.ok) {
      return response.json();
    }

  })
  .then(data => {

    tabla(data.matches);

    boton.addEventListener("click", () => {
      buscar(data.matches);
    });

    spinner.setAttribute('hidden', true);


  });



function tabla(matches) {

  var table_body = document.getElementById('tablapartidos');

  borrarTabla();

  matches.forEach(equipo => {

    var row = document.createElement('tr');

    var local_team = document.createElement('td');
    local_team.innerHTML = equipo.homeTeam.name;

    var escudolocal = document.createElement('td');
    var escudo_local = document.createElement('img');
    escudo_local.setAttribute("src", "https://crests.football-data.org/" + equipo.homeTeam.id + ".svg");
    escudolocal.append(escudo_local);


    var away_team = document.createElement('td');
    away_team.innerHTML = equipo.awayTeam.name;

    var escudoaway = document.createElement('td');
    var escudo_visitante = document.createElement('img');
    escudo_visitante.setAttribute("src", "https://crests.football-data.org/" + equipo.awayTeam.id + ".svg");
    escudoaway.append(escudo_visitante);

    var score = document.createElement('td');
    if (equipo.score.fullTime.homeTeam === null) {
      score.innerHTML = "Partido no jugado aún";
    } else {
      score.innerHTML = equipo.score.fullTime.homeTeam + ' - ' + equipo.score.fullTime.awayTeam;
    }


    row.append(local_team, escudolocal, score, escudoaway, away_team);

    table_body.append(row);
  });

}



function borrarTabla() {
  document.getElementById("tablapartidos").innerHTML = "";
}

var divAlerta = document.getElementById("alertDiv");

document.getElementById("btnClose").addEventListener("click", () =>{
  divAlerta.classList.remove("show");
});



function buscar(matches) {

  let input = document.getElementById("searchbox").value;

  let inputRadio = document.querySelector("input[type=radio]:checked");

  var divAlerta = document.getElementById("alertDiv");

  var equisAlarma = document.getElementById("xAlarma");


   if (input === "") {

    divAlerta.classList.add("show");

   }

    //cuando la array este vacia y el inputradio proximos activo

  let arrayPartidos = matches.filter(match => {
    if (match.homeTeam.name.toLowerCase().includes(input.toLowerCase()) || match.awayTeam.name.toLowerCase().includes(input.toLowerCase())) {

      return true;
    } else {
      return false;
    }
  });

  let arrayPartidos2 = arrayPartidos.filter(match => {
    if (inputRadio.value === "ganados") {
      if (match.homeTeam.name.toLowerCase().includes(input) && match.score.winner == "HOME_TEAM" || match.awayTeam.name.toLowerCase().includes(input) && match.score.winner == "AWAY_TEAM") {
        return true;
      }
    }
    if (inputRadio.value === "perdidos") {
      if (match.homeTeam.name.toLowerCase().includes(input) && match.score.winner == "AWAY_TEAM" || match.awayTeam.name.toLowerCase().includes(input) && match.score.winner == "HOME_TEAM") {
        return true;
      }
    }
    if (inputRadio.value === "empatados" && match.score.winner === "DRAW") {
      return true;
    }
    if (inputRadio.value === "proximos" && match.status === "SCHEDULED") {
      return true;
    }
    if (inputRadio.value === "todos") {
      return true;
    }

    
  });
  if (inputRadio.value === "proximos" && arrayPartidos2 == 0) {
    document.getElementById("alertDiv").textContent = "Todos los partidos disputados";
    divAlerta.classList.add("show");
    
  }

  tabla(arrayPartidos2);
};