
function tabla(matches) {

  var table_body = document.getElementById('tablapartidos');

  for (let i = 0; i < matches.length; i++) {
    var row = document.createElement('tr');

    var local_team = document.createElement('td');
    local_team.innerHTML = matches[i].homeTeam.name;

    var escudolocal = document.createElement('td');


    var escudo_local = document.createElement('img');
    escudo_local.setAttribute("src", "https://crests.football-data.org/" + matches[i].homeTeam.id + ".svg");
    escudolocal.append(escudo_local);

    let escudoaway = document.createElement('td');
    var  away_team = document.createElement('td');
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

tabla(data.matches);



buscarnombre();

function buscarnombre() {
  
    let input, filter, table, tr, td, td1, txtValue;

    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    table = document.getElementById("tablapartidos");

    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
      //TD = la primera TD de cada TR

      td = tr[i].getElementsByTagName("td")[0];

      td1 = tr[i].getElementsByTagName("td")[4];

      if (td && td1) {

        txtValue = td.textContent || td.innerText;

        if ( (td.innerHTML.toUpperCase().indexOf(filter) > -1) || (td1.innerHTML.toUpperCase().indexOf(filter) > -1) )  {            
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }