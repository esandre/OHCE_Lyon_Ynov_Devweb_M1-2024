import {AnalyseurPalindrome} from "../src/AnalyseurPalindrome";

describe('ETANT DONNE une chaîne QUAND on l\'analyse ALORS on obtient son miroir',
    () => {
        test.each(["test", "ynov"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindrome.Analyser(chaîne)
            let expected = chaîne.split('').reverse().join('')
            expect(résultat).toContain(expected)
        })
    });

describe('ETANT DONNE un palindrome QUAND on l\'analyse ALORS il ressort suivi de \'Bien dit !\'',
    () => {
        test.each(["radar", "kayak"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindrome.Analyser(chaîne)
            expect(résultat).toContain(chaîne + '\n' + "Bien dit !")
        })
    });

describe('ETANT DONNE une chaîne QUAND on l\'analyse ALORS \'Bonjour\' est envoyé avant toute réponse',
    () => {
        test.each(["radar", "test"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindrome.Analyser(chaîne)
            let lignes = résultat.split('\n')
            expect(lignes[0]).toBe("Bonjour")
        })
    });

describe('ETANT DONNE une chaîne QUAND on l\'analyse ALORS \'Au revoir\' est envoyé après la réponse',
    () => {
        test.each(["radar", "test"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindrome.Analyser(chaîne)
            let lignes = résultat.split('\n').reverse()
            expect(lignes[0]).toBe("Au revoir")
        })
    });
