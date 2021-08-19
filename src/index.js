module.exports = function reverse(n) {
    let result = Math.abs(n);
    result = String(result);
    return result.split("").reverse().join("");
};
