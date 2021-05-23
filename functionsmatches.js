
tabla(data.matches);

function tabla(matches) {

  var table_body = document.getElementById('tablapartidos');

  borrarTabla();

  for (var i = 0; i < matches.length; i++) {

    var row = document.createElement('tr');

    var local_team = document.createElement('td');
    local_team.innerHTML = matches[i].homeTeam.name;

    var escudolocal = document.createElement('td');
    var escudo_local = document.createElement('img');
    escudo_local.setAttribute("src", "https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg");
    escudolocal.append(escudo_local);


    var away_team = document.createElement('td');
    away_team.innerHTML = matches[i].awayTeam.name;

    var escudoaway = document.createElement('td');
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



function borrarTabla() {
  document.getElementById("tablapartidos").innerHTML = "";
}



let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  buscar(data.matches);
})


function buscar(matches) {

  let input = document.getElementById("searchbox").value;

  let inputRadio = document.querySelector("input[type=radio]:checked");

  let arrayPartidos = matches.filter(match => {
    if (match.homeTeam.name.toLowerCase().includes(input.toLowerCase()) || match.awayTeam.name.toLowerCase().includes(input.toLowerCase())) {

      return true;
    } else {
      return false;
    }
  });

  //tabla(arrayPartidos);

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
  })

  tabla(arrayPartidos2);
}