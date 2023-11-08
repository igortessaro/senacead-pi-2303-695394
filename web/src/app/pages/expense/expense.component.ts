import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Expense } from 'src/app/models/expense';
import { AuthService } from 'src/app/services/auth.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
    public formAddExpense!: FormGroup;
    public formEditExpense!: FormGroup;
    public expenses: Expense[] = [];
    private userUuid: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private expenseService: ExpenseService,
        private localStorageService: LocalStorageService) {}

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
        this.userUuid = this.localStorageService.get('user').uuid;

        this.expenseService.getAllByUser(this.userUuid).subscribe((expenses) => {
            this.expenses = expenses;
        });
    }

    public onSubmit() {
        this.expenseService.create(this.formAddExpense.value.description, this.formAddExpense.value.value, this.userUuid).subscribe((expense) => {
            this.formAddExpense.reset();
            this.expenses.push(expense);
        });
    }

    public deleteExpense(id: string) {
        this.expenses = this.expenses.filter((expense) => expense.id !== id);
    }

    public open(modal: any, expense: Expense): void {
        this.formEditExpense.setValue({
            id: expense.id,
            createdAt: expense.createdAt,
            description: expense.description,
            value: expense.value,
        });
        this.modalService.open(modal);
    }

    public onSubmitEdit() {
        const expense = this.expenses.find((expense) => expense.id === this.formEditExpense.value.id);
        if (expense) {
            expense.description = this.formEditExpense.value.description;
            expense.value = this.formEditExpense.value.value;
        }
        this.modalService.dismissAll();
    }
}
