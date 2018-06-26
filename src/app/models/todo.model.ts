import { v4 as uuid } from 'uuid';

export class Todo {
    public uuid: string;

    constructor(
        public description: string,
        public isChecked: boolean = false
    ) {
        this.uuid = uuid();
    }
}