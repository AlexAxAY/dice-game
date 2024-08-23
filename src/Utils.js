function d6() {
    return Math.floor(Math.random() * 6 + 1);
}



function getRolls(n) {
    return Array.from({ length: n }, function () {
        return d6();
    })
}
function sum(num) {
    return num.reduce(function (accValue, currValue) {
        return accValue + currValue;
    })
}
export { d6, getRolls, sum };