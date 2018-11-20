function getRandomInt(minValue, maxValue) {

    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; 
}

function getRandomElement(array) {

    let randomIndex = getRandomInt(0, array.length - 1);
    return array[randomIndex];
}

module.exports = {getRandomInt, getRandomElement};