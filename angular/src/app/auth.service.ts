import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor() {}

	isLoggingIn: boolean = false;
	redirectUrl: string;

	login(name: string, password: string): Observable<boolean> {
		const isLoggingIn = name == 'pikachu' && password == 'pikachu';
		return of(isLoggingIn).pipe(
			delay(1000),
			tap((isLoggingIn) => (this.isLoggingIn = isLoggingIn))
		);
	}

	logout() {
		this.isLoggingIn = false;
		this.redirectUrl = '/auth';
	}
}
