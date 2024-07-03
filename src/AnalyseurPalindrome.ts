export class AnalyseurPalindrome {

    static Analyser(chaîne: string) : string {
        let miroir = chaîne.split('').reverse().join('')
        return "Bonjour" + "\n" + (chaîne == miroir
            ?  miroir + '\n' + 'Bien dit !'
            : miroir) + '\n' + "Au revoir"
    }
}