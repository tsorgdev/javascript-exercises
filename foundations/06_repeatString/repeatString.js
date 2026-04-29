const repeatString = function(echoWord, repTimes) {
    if (repTimes < 0){
        return "ERROR";
    }
    let echo = "";
    for (let i = 1; i <= repTimes; i++){
        echo += echoWord;
    }
    return echo;
};

// Do not edit below this line
module.exports = repeatString;
