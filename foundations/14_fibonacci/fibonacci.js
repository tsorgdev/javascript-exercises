const fibonacci = function(target) {
    if (+target < 0){
        return "OOPS";
    } else if (+target === 0){
        return 0;
    } else if (+target === 1){
        return 1;
    } else {
        let prev = 0;
        let curr = 1;
        total = 0;
        for (let i = 1; i < (+target); i++){
            total = prev + curr;
            prev = curr;
            curr = total;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = fibonacci;
