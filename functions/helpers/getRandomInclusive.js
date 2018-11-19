function getRandomInclusive(minValue, maxValue) {

    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; 
}

module.exports = getRandomInclusive;