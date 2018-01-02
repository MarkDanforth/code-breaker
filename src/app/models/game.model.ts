import { Round } from './round.model';

export class Game {
    public id: string;
    public rounds: Round[];
    public answer: Round;

    constructor(input: Object) {
        this.id = input['id'];
        this.rounds = (input['rounds']) ? (input['rounds'] as Object[]).map(val => new Round(val)) : [];
        this.answer = input['answer'];
    }
}
