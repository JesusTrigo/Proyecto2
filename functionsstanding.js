standing(data2.standings[0].table);


function standing(table) {
    
    var tbody = document.getElementById('clasificacion');


    for (let i = 0; i < table.length; i++) {

        let row = document.createElement('tr');

        var escudo_equipos = document.createElement('img');

        escudo_equipos.setAttribute("src", table[i].team.crestUrl);

        let position = table[i].position;

        let club = table[i].team.name;

        let pj = table[i].playedGames;

        let pg = table[i].won;

        let pe = table[i].draw;

        let pp = table[i].lost;

        let gf = table[i].goalsFor;

        let gc = table[i].goalsAgainst;

        let dg = table[i].goalDifference;

        let pts = table[i].points;

        let last5 = table[i].form;

        last5 = last5.replaceAll('W','🟢');
        last5 = last5.replaceAll('L','🔴');
        last5 = last5.replaceAll('D','⚪');
        last5 = last5.replaceAll(',',' ');
        
    
        var array = [position, escudo_equipos, club, pj, pg, pe, pp, gf, gc, dg, pts, last5];


        for (let j = 0; j < array.length; j++) {


            var td = document.createElement('td');
            
            td.append(array[j]);

            row.append(td);
            
        }
        
        tbody.append(row);
    }
}
