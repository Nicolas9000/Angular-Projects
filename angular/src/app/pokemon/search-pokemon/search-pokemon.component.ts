import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import {
	Observable,
	Subject,
	switchMap,
	debounceTime,
	distinctUntilChanged,
	pipe,
} from 'rxjs';

@Component({
	selector: 'app-search-pokemon',
	templateUrl: './search-pokemon.component.html',
	styles: [],
})
export class SearchPokemonComponent implements OnInit {
	searchTerms = new Subject<string>();
	pokemons$: Observable<Pokemon[]>;

	constructor(
		private router: Router,
		private pokemonService: PokemonService
	) {}

	ngOnInit(): void {
		this.pokemons$ = this.searchTerms.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((term: string) => this.pokemonService.searchPokemon(term))
		);
	}

	search(term: string): void {
		this.searchTerms.next(term);
	}

	goToDetail(pokemon: Pokemon): void {
		this.router.navigate(['/pokemon', pokemon.id]);
	}
}
