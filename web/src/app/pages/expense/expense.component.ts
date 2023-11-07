import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
    public formAddExpense!: FormGroup;
    public expenses: Expense[] = [];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.formAddExpense = this.formBuilder.group({
            description: new FormControl('', [Validators.required]),
            value: new FormControl('', [Validators.required]),
        });

        this.expenses = [
            new Expense('Gasolina', 582.34),
            new Expense('Almoço', 1050.10),
            new Expense('Lanche', 20.09)
        ];
    }

    onSubmit() {
        const expense = new Expense(this.formAddExpense.value.description, this.formAddExpense.value.value);
        this.expenses.push(expense);
        this.formAddExpense.reset();
    }

    deleteExpense(uuid: string) {
        this.expenses = this.expenses.filter((expense) => expense.uuid !== uuid);
    }
}
