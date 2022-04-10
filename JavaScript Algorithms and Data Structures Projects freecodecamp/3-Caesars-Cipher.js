/*
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
*/

function rot13(str) {
    return str.toUpperCase().split("").map((e) => {
        if (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90) {
            e = String.fromCharCode(e.charCodeAt(0) - 13);
            e = e.charCodeAt(0) < 65 ? String.fromCharCode(e.charCodeAt(0) + 26) : e;
        }
        return e;
    }).join("");
}

rot13("SERR PBQR PNZC");