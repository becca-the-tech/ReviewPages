function fibonnacciGenerator(number) {
    let generator = [];
    let previousNum1 = 0;
    let previousNum2 = 1;

    generator.push(previousNum1);
    generator.push(previousNum2);

    for (let i = 0; i < number - 2; i++) {
        generator.push(previousNum1 + previousNum2);
        previousNum1 = generator[generator.length - 2];
        previousNum2 = generator[generator.length - 1];
    }

    return generator;
}

console.log(fibonnacciGenerator(8));
