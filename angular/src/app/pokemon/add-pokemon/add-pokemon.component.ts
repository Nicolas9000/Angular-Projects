import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
	selector: 'app-add-pokemon',
	templateUrl: './add-pokemon.component.html',
	styles: [],
})
export class AddPokemonComponent implements OnInit {
	constructor(private pokemonService: PokemonService) {}

  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

	addPokemon(): void {

  }
}
