/* istanbul ignore file */
const math = require('./math');

function main() {
    const addResult = math.add(1, 2);
    const subtractResult = math.subtract(1, 2);

    console.log(`addResult: ${addResult}`);
    console.log(`subtractResult: ${subtractResult}`);
}

main();