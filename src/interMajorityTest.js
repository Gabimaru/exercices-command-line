import readlineSync from 'readline-sync'
import chalk from 'chalk'

let name = readlineSync.question('Nom: ')
let firstName = readlineSync.question('Prénom: ')
let age = readlineSync.question('age: ')
let ageVote = process.argv[2]
if (age < ageVote) {
    console.log(
        chalk.red(
            `Ah ! c'est dommage ${name} ${firstName}, mais vous ne pourrez obtenir une carte d'électeur`
        )
    )
} else {
    console.log(
        chalk.green(`Hello ${name} ${firstName}, vous êtes en âge de voter`)
    )
}

// Enoncé
/*
Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme précedent
pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondera à l'age de la majorité
dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21

Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18

Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
*/
