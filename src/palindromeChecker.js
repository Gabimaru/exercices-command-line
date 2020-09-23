const isPalindrome = (el) => {
    let rev = el.split('').reverse().join('')
    return el === rev
        ? `${process.argv[2]} is a palindrome`
        : `${process.argv[2]} is not a palindrome`
}

let test = process.argv[2] // retruns true
isPalindrome(test)

// Enoncé
/*
Ecrivez un script palindromeChecker.js qui verifit si l'argument passé en ligne de commande est un palindrome:

% node palindromeChecker.js tenet
tenet is a palindrome
% node palindromeChecker.js 3133773313
3133773313 is a palindrome
% node palindromeChecker.js Alyra
Alyra is not a palindrome
*/
