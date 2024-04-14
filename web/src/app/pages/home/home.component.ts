import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ExpenseService } from 'src/app/services/expense.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    chart: any = [];
    private userUuid: string = '';

    constructor(private localStorageService: LocalStorageService, private expenseService: ExpenseService) {}

    ngOnInit(): void {
        this.userUuid = this.localStorageService.get('user').uuid;

        this.expenseService.getAllByUser(this.userUuid).subscribe((expenses) => {
            const categories = expenses.map(x => x.category).filter((thing, i, arr) => arr.findIndex(t => t === thing) === i).sort();
            console.log(categories);
            const datas: number[] = [];
            categories.forEach((category) => {
                const sum = expenses.filter((expense) => expense.category === category).map((expense) => expense.value).reduce((acc, value) => acc + value, 0);
                datas.push(sum);
            });
            console.log(datas);
            const sum = datas.reduce((sum, p) => sum + p);
            console.log(sum);
            this.chart = new Chart('canvas', {
                type: 'bar',
                data: {
                    labels: categories,
                    datasets: [
                        {
                            label: sum + ' gastos',
                            data: datas,
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        });
    }
}
