const sumAll = function (x, y) {
    if (typeof (x) === "number" && typeof (y) === "number") {
        if (Math.floor(x) === x && Math.floor(y) === y) {
            if(x <= 0 || y <= 0){
                return "ERROR";
            }
            if (x > y) {
                let sum = 0;
                for (let i = y; i <= x; i++) {
                    sum += i;
                }
                return sum;
            } else if (y > x) {
                let sum = 0;
                for (let i = x; i <= y; i++) {
                    sum += i;
                }
                return sum;
            } else {
                return x;
            }
        }else{
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
