function getRandomInclusive(minValue, maxValue) {
    return Math.floor(Math.random() * maxValue) + minValue;
}

module.exports = getRandomInclusive;