export class Expense {
    constructor(description: string, value: number, category: string, userUuid: string) {
        this.description = description;
        this.value = value;
        this.userUuid = userUuid;
        this.category = category;
    }

    id: string = '';
    userUuid: string = '';
    description: string = '';
    value: number = 0;
    createdAt: Date = new Date();
    category: string = '';
}
