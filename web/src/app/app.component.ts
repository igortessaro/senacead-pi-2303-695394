import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'descomplica-gastos-web';
    isLoggedIn$: Observable<boolean>;

    constructor(private modalService: NgbModal, private authService: AuthService) {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }

    ngOnInit(): void {
    }

    public open(modal: any): void {
        this.modalService.open(modal);
    }
}
