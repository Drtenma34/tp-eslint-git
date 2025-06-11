function additionner(a, b) {
    const result = a + b;
    console.log('Le résultat est', result);
    return result;
}

function division(x, y) {
    if (y === 0) {
        console.log('Division par zéro !');
        return;
    }
    return x / y;
}

console.log(additionner(5, 3));

const nombre = '10';
if (parseInt(nombre, 10) === 10) {
    console.log('Nombre égal à 10');
}

setTimeout(() => {
    console.log('Timeout');
}, 1000);

module.exports = {
    additionner,
    division,
};