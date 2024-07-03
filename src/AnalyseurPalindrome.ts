export class AnalyseurPalindrome {
    static Analyser(chaîne: string): string {
        let output = "";

        output += this.Greet(output);
        output += this.Reverse(chaîne);

        return output;
    }

    static Greet(chaine: string): string {
        return (chaine += "Bonjour\n");
    }

    static Reverse(chaine: string): string {
        const reversed = chaine.split("").reverse().join("");

        if (chaine == reversed) {
            return chaine + "\n" + "Bien dit !";
        }

        return reversed;
    }
}
