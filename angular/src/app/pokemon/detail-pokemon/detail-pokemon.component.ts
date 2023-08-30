import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-detail-pokemon',
	templateUrl: './detail-pokemon.component.html',
	styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private router: Router,
		private pokemonService: PokemonService
	) {}

	pokemon: Pokemon | undefined;

	ngOnInit(): void {
		this.getPokemon();
	}

	getPokemon(): void {
		const pokemonId: number | null = Number(
			this.route.snapshot.paramMap.get('id')
		);
		if (pokemonId) {
			this.pokemonService
				.getPokemonById(pokemonId)
				.subscribe((pokemon) => (this.pokemon = pokemon));
		}
	}

	// goBack(): void {
	//   this.location.back();
	// }

	goToPokemon(): void {
		this.router.navigate(['/pokemons']);
	}

	goToEditPokemon(pokemonId: number): void {
		this.router.navigate(['/pokemon/edit', pokemonId]);
	}

	deletePokemon(pokemonId: number): void {
		this.pokemonService
			.deletePokemon(pokemonId)
			.subscribe(() => this.goToPokemon());
	}
}
