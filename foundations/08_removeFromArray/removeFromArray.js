const removeFromArray = function(arr) {
    const args = Array.from(arguments).slice(1);

    for (const arg of args){
        arr = arr.filter((item)=>!(item === arg));
        
    }
    return arr;
};

removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
