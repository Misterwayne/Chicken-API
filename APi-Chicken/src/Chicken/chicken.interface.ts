export interface Chickens {
    name: String;
    birthday: Date;
    weight: Number;
    steps: Number;
    isRunning: Boolean;
}

export interface Chicken extends Chickens {
    id : number;
}