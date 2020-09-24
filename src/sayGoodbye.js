if (process.argv.length !== 3) {
    console.log("Vous n'avez pas entré le nombre d'arguments attendus !")
    process.exit(1)
}

if (!isNaN(process.argv[2])) {
    console.log(
        `ERROR: ${process.argv[2]} Vous devez entrer une chaîne de caractères`
    )
    process.exit(1)
}

let goodBye = process.argv[2]
console.log(`Goodbye, ${goodBye}`)

//node sayGoodbye.js React

// Enoncé
/*
Ecrivez un script sayGoodbye.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:

% node sayGoodbye.js React
Goodbye, React
*/
