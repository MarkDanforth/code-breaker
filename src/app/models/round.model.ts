export class Round {
    public order: string;
    public slots: number[];
    public rnrp: number;
    public rnwp: number;

    constructor(input: Object) {
        this.order = input['order'];
        this.slots = (input['slots']) ? (input['slots'] as number[]).map(val => val) : [];;
        this.rnrp = 0;
        this.rnwp = 0;
    }
}
