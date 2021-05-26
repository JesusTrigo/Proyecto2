var url = "http://api.football-data.org/v2/competitions/2014/matches";

const spinner = document.getElementById("spinner");

fetch(url , {
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
    
    stats(data.matches);
    encontra(data.matches);

    spinner.setAttribute('hidden', '');
    
});




function stats(matches) {

    let estadisticas = [];

    for (let i = 0; i < matches.length; i++) {
        
        let estadoPartido = matches[i].status;

        if (estadoPartido !== "FINISHED") {
            continue
        }

        let idHome = matches[i].homeTeam.id;

        let idAway = matches[i].awayTeam.id;

        let nameHome = matches[i].homeTeam.name;

        let nameAway = matches[i].awayTeam.name;

        let goalsHome = matches[i].score.fullTime.homeTeam;

        let goalsAway = matches[i].score.fullTime.awayTeam;

        let media;

        let awayTeamEcontrado = estadisticas.find(equipo =>{
            return idAway == equipo.id
        });

        let homeTeamEcontrado = estadisticas.find(equipo => idHome == equipo.id);

        if (awayTeamEcontrado == undefined) {


            let objeto = {
                id: idAway,
                name: nameAway,
                goals: goalsAway,
                matches: 1,
                avg: media


            }
            estadisticas.push(objeto);
        } else {
            awayTeamEcontrado.goals += goalsAway;
            awayTeamEcontrado.matches++;
        }


        if (homeTeamEcontrado == undefined) {

            let objeto = {
                id: idHome,
                name: nameHome,
                goals: goalsHome,
                matches: 1,
                avg: media

            }
            estadisticas.push(objeto);
        } else {
            homeTeamEcontrado.goals += goalsHome;
            homeTeamEcontrado.matches++;
        }

    }

    for (let k = 0; k < estadisticas.length; k++) {

        let media = estadisticas[k].goals / estadisticas[k].matches;

        estadisticas[k].avg = media;

    }

    estadisticas.sort((a, b) => b.avg - a.avg);

    creartabla(estadisticas);


};


function creartabla(estadisticas) {

    let top5 = estadisticas.slice(0, 5);


    var tbody = document.getElementById('tablastats');

    for (let i = 0; i < top5.length; i++) {

        const row = document.createElement('tr');

        let equipo = top5[i].id;

        let escudo = document.createElement('img');

        escudo.setAttribute("src", "https://crests.football-data.org/" + equipo + ".svg")


        let array = [
            escudo,
            top5[i].name,
            top5[i].goals,
            top5[i].matches,
            top5[i].avg.toFixed(2)
        ]

        for (let j = 0; j < array.length; j++) {


            const td = document.createElement('td');

            td.append(array[j]);

            row.append(td);
            tbody.append(row);
        }

    }
}



function encontra(matches) {

    let estadisticas = [];

    for (let i = 0; i < matches.length; i++) {

        let estadoPartido = matches[i].status;

        if (estadoPartido !== "FINISHED") {
            continue
        }

        let idAway = matches[i].awayTeam.id;

        let nameAway = matches[i].awayTeam.name;

        let goalsHome = matches[i].score.fullTime.homeTeam;

        let awayTeamEcontrado

        let media

        for (let j = 0; j < estadisticas.length; j++) {


            if (idAway == estadisticas[j].id) {
                awayTeamEcontrado = estadisticas[j]

            }

        }

        if (awayTeamEcontrado == undefined) {


            let objeto = {
                id: idAway,
                name: nameAway,
                goals: goalsHome,
                matches: 1,
                avg: media


            }
            estadisticas.push(objeto);
        } else {
            awayTeamEcontrado.goals += goalsHome;
            awayTeamEcontrado.matches++;
        }

    }

    for (let k = 0; k < estadisticas.length; k++) {

        let media = estadisticas[k].goals / estadisticas[k].matches;

        estadisticas[k].avg = media;

    }

    estadisticas.sort((a, b) => a.goals - b.goals);

    creartabla2(estadisticas);


};

function creartabla2(estadisticas) {

    let top5 = estadisticas.slice(0, 5);


    var tbody = document.getElementById('tablacontra');

    for (let i = 0; i < top5.length; i++) {

        const row = document.createElement('tr');

        let equipo = top5[i].id;

        let escudo = document.createElement('img');

        escudo.setAttribute("src", "https://crests.football-data.org/" + equipo + ".svg")

        let array = [
            escudo,
            top5[i].name,
            top5[i].goals,
            top5[i].matches,
            
        ]

        for (let j = 0; j < array.length; j++) {


            const td = document.createElement('td');

            td.append(array[j]);

            row.append(td);
            tbody.append(row);
        }

    }
};