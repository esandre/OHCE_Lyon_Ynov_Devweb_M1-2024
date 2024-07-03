import { AnalyseurPalindrome } from "../src/AnalyseurPalindrome";

describe("ETANT DONNE une chaîne QUAND on l'analyse ALORS on obtient son miroir", () => {
    test.each(["test", "ynov"])("Cas %s", (chaîne) => {
        let résultat = AnalyseurPalindrome.Analyser(chaîne);
        let expected = chaîne.split("").reverse().join("");
        expect(résultat).toContain(expected);
    });
});

describe("ETANT DONNE un palindrome QUAND on l'analyse ALORS il ressort suivi de 'Bien dit !'", () => {
    test.each(["radar", "kayak"])("Cas %s", (chaîne) => {
        let résultat = AnalyseurPalindrome.Analyser(chaîne);
        expect(résultat).toContain(chaîne + "\n" + "Bien dit !");
    });
});

describe("ETANT DONNE une chaine QUAND on l'analyse ALORS on obtient son miroir précédé de bonjour", () => {
    test("Cas bonjour", () => {
        const resultat = AnalyseurPalindrome.Analyser("test");

        expect(resultat).toContain("Bonjour");
    });

    test('cas bonjour est bien avant le miroir', () => {
        const resultat = AnalyseurPalindrome.Analyser("test");

        expect(resultat).toContain("Bonjour\ntset");
    })
});
