import {LangueFrançaise} from "../src/LangueFrançaise";
import {AnalyseurPalindromeBuilder} from "./utilities/analyseurPalindromeBuilder";
import {LangueAnglaise} from "../src/LangueAnglaise";

describe('ETANT DONNE une chaîne QUAND on l\'analyse ALORS on obtient son miroir',
    () => {
        test.each(["test", "ynov"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindromeBuilder.Default().Analyser(chaîne)
            let expected = chaîne.split('').reverse().join('')
            expect(résultat).toContain(expected)
        })
    });

describe('ETANT DONNE un palindrome QUAND on l\'analyse ALORS il ressort suivi de \'Bien dit !\'',
    () => {
        test.each(["radar", "kayak"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindromeBuilder.Default().Analyser(chaîne)
            expect(résultat).toContain(chaîne + '\n' + "Bien dit !")
        })
    });

describe('ETANT DONNE une chaîne ET un utilisateur parlant <langue> ' +
    'QUAND on analyse la chaîne ' +
    'ALORS \'Bonjour\' est envoyé avant toute réponse',
    () => {
        test.each([
                    ["radar", LangueFrançaise, "Bonjour"],
                    ["test", LangueFrançaise, "Bonjour"],
                    ["radar", LangueAnglaise, "Hello"],
                    ["test", LangueAnglaise, "Hello"],
                ])
        ('Cas %s %s => %s', (chaîne, langue, attendu) => {
            let résultat = new AnalyseurPalindromeBuilder()
                .AyantPourLangue(new langue())
                .Build()
                .Analyser(chaîne)
            let lignes = résultat.split('\n')
            expect(lignes[0]).toBe(attendu)
        })
    });

describe('ETANT DONNE une chaîne QUAND on l\'analyse ALORS \'Au revoir\' est envoyé après la réponse',
    () => {
        test.each(["radar", "test"])
        ('Cas %s', (chaîne) => {
            let résultat = AnalyseurPalindromeBuilder.Default().Analyser(chaîne)
            let lignes = résultat.split('\n').reverse()
            expect(lignes[0]).toBe("Au revoir")
        })
    });
