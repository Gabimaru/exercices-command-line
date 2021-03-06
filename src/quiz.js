import readlineSync from 'readline-sync'
import chalk from 'chalk'

let index = readlineSync.keyInSelect(choix, 'Please select your choice: ')
let choix = ['start', 'continue', 'options', 'exit']

switch (index) {
    case 0:
        console.log('starting the game')
        break
    case 1:
        console.log('continue the game')
        break
    case 2:
        console.log('access to game options')
        break
    case 3:
        console.log('closing the game')
        break
    default:
        console.log('bad choice')
}

// Enoncé
/*
Ecrivez un qcm de 5. Le joueur devra repondre aux questions en entrant le nombre correspondant à la bonne réponse.
A la fin du qcm vous lui donnerez sa note qui correspondera au nombre de bonnes reponses sur les 5 questions.
Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

    Question 1: Le C++ est un:
    1: language => réponse attendue
    2: compilateur

    Question 2: TypeScript est une évolution de Javascript:
    1: Vrai => réponse attendue
    2: Faux

    Question 3: Lire les cours avant de faire les éxercices est inutile:
    1: Vrai
    2: Faux => réponse attendue

    Question 4: react.js a été developpé par Google:
    1: Vrai
    2: Faux => réponse attendue

    Question 5: Ethereum est une blockchain publique:
    1: Vrai => réponse attendu
    2: Faux
*/
