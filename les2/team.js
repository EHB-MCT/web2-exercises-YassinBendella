"use strict"



class Team {

constructor(teamname, trainer, roster)

this.teamname = 'Example teamname';

this.trainer = 'Example trainername';

this.roster = [];




describe() {

return `${this.teamname} with trainer ${this.trainername}

has these pokemons: ${[...this.pokemonTeam]} `;

}

}



export default Team;