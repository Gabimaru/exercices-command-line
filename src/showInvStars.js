const showInvStars = (nbr) => {
    for (let i = nbr; i >= 1; i -= 1) {
        console.log('*'.repeat(i))
    }
}

if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

let nb = Number(process.argv[2])

showInvStars(nb)

// Enoncé
/*
Ecrivez un script showInvStars.js qui prend en argument de la ligne de commande un nombre et affiche sur le terminal une pyramide comme ci-dessous:

% node showInvStars.js 3
***
**
*
% node showInvStars.js 10
**********
*********
********
*******
******
*****
****
***
**
*
*/
