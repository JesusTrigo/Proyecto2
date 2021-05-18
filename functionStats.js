// 0. Crear función que va calcular las estadísticas, recibiendo como param el array de partidos:

// 1. Crear array vacía (será array de objetos)

// 2. Iterar por todos los partidos

// 3. Condición: si el partido no está acabado, no seguir y mirar siguiente partido, si no el null 
// de los goles lo romperá todo.

// 4. Buscar en la array estadísticas el objeto con el mismo id que el homeTeam del partido y guardarlo en una variable

// 5. Si el objeto buscado no existe, crearlo con estos keys: id, name, goals, matches.
// Rellenar cada key con el valor correspondiente

// 6. Si existe, actualizar los goles y los partidos

// 7. Hacer exactamente lo mismo a partir del punto 4, pero con awayTeam

// 8. Una vez fuera del loop de partidos, iterar por el array estadisticas

// 9. Añadir la key avg a cada objeto, con el valor goals/matches

// 10. Hacer console.log() para ver que todo está correcto.



stats(data.matches);

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

        let homeTeamEcontrado

        let awayTeamEcontrado

        let media

        for (let j = 0; j < estadisticas.length; j++) {


            if (idAway == estadisticas[j].id) {
                awayTeamEcontrado = estadisticas[j]

            }

            if (idHome == estadisticas[j].id) {
                homeTeamEcontrado = estadisticas[j]
            }
        }

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

        //escudo.classList.add (añadir clase);

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






encontra(data.matches);

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

        //let homeTeamEcontrado

        let awayTeamEcontrado

        let media

        for (let j = 0; j < estadisticas.length; j++) {


            if (idAway == estadisticas[j].id) {
                awayTeamEcontrado = estadisticas[j]

            }

            // if (idHome == estadisticas[j].id) {
            //     homeTeamEcontrado = estadisticas[j]
            // }
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


        // if (homeTeamEcontrado == undefined) {

        //     let objeto = {
        //         id: idHome,
        //         name: nameHome,
        //         goals: goalsHome,
        //         matches: 0,
        //         avg: media

        //     }
        //     estadisticas.push(objeto);
        // } else {
        //     homeTeamEcontrado.goals += goalsHome;
        //     homeTeamEcontrado.matches++;
        // }

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

        //escudo.classList.add (añadir clase);

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
}