const findTheOldest = function (arr) {
    return arr.sort((a, b) => {
        const date = new Date();
        const year = date.getFullYear();
        if (!("yearOfDeath" in a)) {
            a["yearOfDeath"] = year;
        }
        if (!("yearOfDeath" in b)) {
            b["yearOfDeath"] = year;
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })[0];
};


// Do not edit below this line
module.exports = findTheOldest;
