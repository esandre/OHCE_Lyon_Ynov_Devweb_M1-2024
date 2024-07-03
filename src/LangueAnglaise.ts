import {Langue} from "./Langue.interface";

export class LangueAnglaise implements Langue {
    Acquitter(): string {
        return "Goodbye"
    }

    Saluer(): string {
        return "Hello"
    }
}