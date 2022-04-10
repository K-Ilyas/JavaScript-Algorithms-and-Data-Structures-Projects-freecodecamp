/*
Return true if the given string is a palindrome. Otherwise, return false. 
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/
function palindrome(str) {
    let strBackword = str.toLowerCase().replace(/([^a-z0-9])/g, "").split("");
    return strBackword.every((e, i) => {
        return e == strBackword[strBackword.length - 1 - i];
    });
}

palindrome("eye");