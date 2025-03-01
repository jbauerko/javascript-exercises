const palindromes = function (string) {
    // Remove any spaces and punctuation
    string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Split the string into an array, reverse it, then join it back together
    reversed = string.split('').reverse().join('');

    for (let i=0;i<string.length;i++) {
        if (string[i] != reversed[i]) {return false;}
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
