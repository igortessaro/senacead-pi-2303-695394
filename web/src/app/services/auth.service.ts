import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private router: Router, private http: HttpClient) {}

    get isLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    public login(userName: string, password: string): void {
        this.http.post("http://localhost:5224/api/login", { userName, password }).subscribe((res) => {
            this.loggedIn.next(true);
            this.router.navigate(['/']);
        });
    }

    public logout(): void {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}
