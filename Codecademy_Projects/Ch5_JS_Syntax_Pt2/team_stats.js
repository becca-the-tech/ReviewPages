//Program to track data regarding a team

const team = {
    //array of players names and ages
    _players: [{
        firstName: 'Tom',
        lastName: 'Brady',
        age: 43
    }, {
        firstName: 'Jameis',
        lastName: 'Winston',
        age: 22
    }, {
        firstName: 'Mike',
        lastName: 'Evans',
        age: 27
    }],

    //array of games with opponents and teamPts/opponentPts
    _games: [{
        opponent: 'Panthers',
        teamPoints: 46,
        opponentPoints: 23
    }, {
        opponent: 'Giants',
        teamPoints: 25,
        opponentPoints: 23
    }, {
        opponent: 'Saints',
        teamPoints: 3,
        opponentPoints: 38
    }],

    //getter methods for players and games
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    //adds player to team roster
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },

    //adds game to list of games
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };

        this.games.push(game);
    }

};

//testing addPlayer() functionality
// team.addPlayer('Steph', 'Curry', 28);
// team.addPlayer('Lisa', 'Leslie', 44);
// team.addPlayer('Bugs', 'Bunny', 76);

// console.log(team.players);

//testing addGame() functionality
team.addGame('Raiders', 45, 20);
console.log(team.games);
