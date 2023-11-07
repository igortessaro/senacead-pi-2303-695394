import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Expense } from 'src/app/models/expense';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
    public formAddExpense!: FormGroup;
    public formEditExpense!: FormGroup;
    public expenses: Expense[] = [];

    constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {}

    public ngOnInit(): void {
        this.formAddExpense = this.formBuilder.group({
            description: new FormControl('', [Validators.required]),
            value: new FormControl('', [Validators.required]),
        });
        this.formEditExpense = this.formBuilder.group({
            uuid: new FormControl('', [Validators.required]),
            date: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            value: new FormControl('', [Validators.required]),
        });

        this.expenses = [
            new Expense('Gasolina', 582.34),
            new Expense('Almoço', 1050.10),
            new Expense('Lanche', 20.09)
        ];
    }

    public onSubmit() {
        const expense = new Expense(this.formAddExpense.value.description, this.formAddExpense.value.value);
        this.expenses.push(expense);
        this.formAddExpense.reset();
    }

    public deleteExpense(uuid: string) {
        this.expenses = this.expenses.filter((expense) => expense.uuid !== uuid);
    }

    public open(modal: any, expense: Expense): void {
        this.formEditExpense.setValue({
            uuid: expense.uuid,
            date: expense.date,
            description: expense.description,
            value: expense.value,
        });
        this.modalService.open(modal);
    }

    public onSubmitEdit() {
        const expense = this.expenses.find((expense) => expense.uuid === this.formEditExpense.value.uuid);
        if (expense) {
            expense.description = this.formEditExpense.value.description;
            expense.value = this.formEditExpense.value.value;
        }
        this.modalService.dismissAll();
    }
}
