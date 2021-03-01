module.exports = function reverse(n) {
    n = n + "";

    if (n > 0) {
        return n.split("").reverse().join("");
    } else {
        return n.slice(1).split("").reverse().join("");
    }
};
