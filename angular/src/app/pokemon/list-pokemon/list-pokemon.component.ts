import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-list-pokemon',
	templateUrl: './list-pokemon.component.html',
	styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
	constructor(
		private router: Router,
		private pokemonService: PokemonService
	) {}
	pokemons: Pokemon[];

	ngOnInit(): void {
		this.getPokemons();
	}

	getPokemons(): void {
		this.pokemonService
			.getPokemonList()
			.subscribe((pokemonList) => (this.pokemons = pokemonList));
	}

	goToPokemon(pokemon: Pokemon) {
		this.router.navigate(['/pokemon', pokemon.id]);
	}
}
