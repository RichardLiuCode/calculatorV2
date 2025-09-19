export function factorial(input) {
    let n = input
    let result = 1;
    for (let i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}