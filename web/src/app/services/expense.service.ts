import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ExpenseService {
    constructor(private http: HttpClient) {}

    public getAllByUser(userUuid: string): Observable<Expense[]> {
        return this.http.get<Expense[]>(`${environment.expenseApi}/api/user/${userUuid}/expenses`);
    }

    public create(description: string, value: number, category: string, userUuid: string): Observable<Expense> {
        const expense = new Expense(description, value, category, userUuid);
        return this.http.post<Expense>(`${environment.expenseApi}/api/expense`, expense);
    }

    public update(expense: Expense): Observable<Expense> {
        return this.http.put<Expense>(`${environment.expenseApi}/api/expense/${expense.id}`, expense);
    }

    public delete(id: string): Observable<Object> {
        return this.http.delete(`${environment.expenseApi}/api/expense/${id}`);
    }
}
