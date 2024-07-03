import {Langue} from "../../src/Langue.interface";

export class LangueQuandOnNeSaitPasQuoiMettre implements Langue {
    Acquitter(): string {
        return '';
    }

    Saluer(): string {
        return '';
    }
}