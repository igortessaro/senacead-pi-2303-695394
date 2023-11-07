import { v4 as uuidv4 } from 'uuid';

export class Expense {
    constructor(description: string, value: number) {
        this.description = description;
        this.value = value;
    }

    uuid: string = uuidv4();
    description: string = '';
    value: number = 0;
    date: Date = new Date();
}
