import { Round } from './round.model';

export class Game {
    public id: string;
    public rounds: Round[];
    public answer: Round;
    public numSlots: number;
    public maxValues: number;

    constructor(input: Object) {
        this.id = input['id'];
        this.rounds = (input['rounds']) ? (input['rounds'] as Object[]).map(val => new Round(val)) : [];
        this.answer = input['answer'];
        this.numSlots = input['numSlots'] ? input['numSlots'] : 4;
        this.maxValues = input['maxValues'] ? input['maxValues'] : 6;
    }
}
