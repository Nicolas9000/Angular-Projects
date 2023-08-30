import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit-pokemon',
	templateUrl: './edit-pokemon.component.html',
	styles: [],
})
export class EditPokemonComponent implements OnInit {
	pokemon: Pokemon | undefined;
	constructor(
		private route: ActivatedRoute,
		private pokemonService: PokemonService
	) {}

	ngOnInit(): void {
		this.getPokemon();
	}

	getPokemon(): void {
		const pokemonId: number = Number(
			this.route.snapshot.paramMap.get('id')
		);
		if (pokemonId) {
			this.pokemonService
				.getPokemonById(pokemonId)
				.subscribe((pokemon) => (this.pokemon = pokemon));
		}
	}
}
