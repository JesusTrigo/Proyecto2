var url = "http://api.football-data.org/v2/competitions/2014/standings";

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
    
    standing(data.standings[0].table);

    spinner.setAttribute('hidden', '');
});



function standing(table) {
    
    var tbody = document.getElementById('clasificacion');


    //for (let i = 0; i < table.length; i++) {
        
        table.forEach(equipo => {
        let row = document.createElement('tr');

        var escudo_equipos = document.createElement('img');

        escudo_equipos.setAttribute("src", equipo.team.crestUrl);

        let position = equipo.position;

        let club = equipo.team.name;

        let pj = equipo.playedGames;

        let pg = equipo.won;

        let pe = equipo.draw;

        let pp = equipo.lost;

        let gf = equipo.goalsFor;

        let gc = equipo.goalsAgainst;

        let dg = equipo.goalDifference;

        let pts = equipo.points;

        let last5 = equipo.form;

        last5 = last5.replaceAll('W','🟢');
        last5 = last5.replaceAll('L','🔴');
        last5 = last5.replaceAll('D','⚪');
        last5 = last5.replaceAll(',',' ');
        
    
        var array = [position, escudo_equipos, club, pj, pg, pe, pp, gf, gc, dg, pts, last5];

        array.forEach(element => {
    
        
        //for (let j = 0; j < array.length; j++) {


            var td = document.createElement('td');
            
            td.append(element);

            row.append(td);
            
        });
        
        tbody.append(row);
    });
}