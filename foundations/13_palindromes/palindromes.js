const palindromes = function (str) {
    str = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,"");
    if (str.length === 0) return false;
    for (let i = 0; i < str.length; i++){
        if (i >= (str.length - i - 1)) return true;
        if (str.at(i) !== str.at(str.length - i - 1)) {
            return false;
        }
    }
};
palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
