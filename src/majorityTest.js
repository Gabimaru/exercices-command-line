import readlineSync from 'readline-sync'
import chalk from 'chalk'

let name = readlineSync.question('Nom: ')
let firstName = readlineSync.question('Prénom: ')
let age = readlineSync.question('age: ')
if (age < 18) {
    console.log(
        chalk.red`Ah ! c'est dommage ${name} ${firstName}, mais vous ne pourrez obtenir une carte d'électeur`
    )
} else {
    console.log(
        chalk.green(`Hello ${name} ${firstName}, vous êtes en âge de voter`)
    )
}

// Enoncé
/*
Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
*/
