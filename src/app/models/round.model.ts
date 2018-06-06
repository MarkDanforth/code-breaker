export class Round {
    public order: string;
    public slots: number[];
    public hints: number[];

    constructor(input: Object) {
        this.order = input['order'];
        this.slots = (input['slots']) ? (input['slots'] as number[]).map(val => val) : [];
        this.hints = new Array();
    }
}
