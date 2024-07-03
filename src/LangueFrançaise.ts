import {Langue} from "./Langue.interface";

export class LangueFrançaise implements Langue {
    public static readonly AU_REVOIR = "Au revoir"

    Acquitter(): string {
        return LangueFrançaise.AU_REVOIR
    }

    Saluer(): string {
        return "Bonjour"
    }
}