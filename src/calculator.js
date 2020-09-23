const add = (nb1, nb2) => {
    return nb1 + nb2
}

const sub = (nb1, nb2) => {
    return nb1 - nb2
}

const mul = (nb1, nb2) => {
    return nb1 * nb2
}

const div = (nb1, nb2) => {
    return nb1 / nb2
}

const calc = (op, nb1, nb2) => {
    switch (op) {
        case '+':
            console.log(add(nb1, nb2))
            break
        case '-':
            console.log(sub(nb1, nb2))
            break
        case '*':
            console.log(mul(nb1, nb2))
            break
        case '/':
            console.log(div(nb1, nb2))
            break
        default:
            console.log('Error: Unknown operator')
    }
}

if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}

if (isNaN(process.argv[3])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

if (isNaN(process.argv[4])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

let opx = process.argv[2]
let nb1x = Number(process.argv[3])
let nb2x = Number(process.argv[4])

calc(opx, nb1x, nb2x)

// Enoncé
/*
Ecrivez un script calculator.js qui effectue en ligne de commande des opérations arithmétiques simples:

% node calculator.js + 10 21
31
% node calculator.js - 10 1
9
% node calculator.js * 5 4
20
% node calculator.js / 10 2
5
*/
