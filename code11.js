function countBy(x, n) {
    let z = [];
    for (let i = 0; n >= i; i++) {
        z.push(z[i] + x)
    }

    return z;
}

console.log(countBy(2, 4))