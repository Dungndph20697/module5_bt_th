console.log('Happy developing ✨')
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let num = 10;
let sum = 0;

console.log("Dãy Fibonacci:");
for (let i = 0; i < num; i++) {
    const fib = fibonacci(i);
    console.log(fib);
    sum += fib;
}

console.log(`Tổng của ${num} số Fibonacci đầu tiên là: ${sum}`);