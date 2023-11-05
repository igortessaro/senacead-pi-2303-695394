import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LoginService {
    constructor(private http: HttpClient) {}

    public login(userName: string, password: string) {
        return this.http.post("http://localhost:5224/api/login", { userName, password });
    }
}
