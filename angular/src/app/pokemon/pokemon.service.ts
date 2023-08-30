import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	};

	getPokemonList(): Observable<Pokemon[]> {
		return this.http.get<Pokemon[]>('api/pokemons').pipe(
			tap((res) => this.log(res)),
			catchError((error) => this.handleError(error, []))
		);
	}

	searchPokemon(term: string): Observable<Pokemon[]> {
		if (term.length === 0) {
			return of([]);
		}

		return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
			tap((res) => this.log(res)),
			catchError((error) => this.handleError(error, []))
		);
	}

	getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
		return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
			tap((res) => this.log(res)),
			catchError((error) => this.handleError(error, undefined))
		);
	}

	addPokemon(pokemon: Pokemon): Observable<Pokemon> {
		return this.http.post<Pokemon>('api/pokemons', pokemon).pipe(
			tap((res) => this.log(res)),
			catchError((error) => this.handleError(error, undefined))
		);
	}

	updatePokemon(pokemon: Pokemon): Observable<null> {
		return this.http.put('api/pokemons', pokemon, this.httpOptions).pipe(
			tap((res) => this.log(res)),
			catchError((error) => this.handleError(error, null))
		);
	}

	deletePokemon(pokemonId: number): Observable<null> {
		return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
			tap((res) => this.log(res)),
			catchError((error) => this.handleError(error, null))
		);
	}

	private log(response: any) {
		console.log(response);
	}

	private handleError(error: Error, errorValue: any) {
		console.log(error);
		return of(errorValue);
	}

	getPokemonTypeList(): string[] {
		return [
			'Plante',
			'Feu',
			'Eau',
			'Insecte',
			'Normal',
			'Electrik',
			'Poison',
			'Fée',
			'Vol',
			'Combat',
			'Psy',
		];
	}
}
