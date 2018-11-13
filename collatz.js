function collatz(n) {
    if (isNaN(n) || n <= 0) return;
    for (let i = 0; i <= 100; i++) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        console.log('Numbers: ' + n);
    }
}
// natural numbers > 0 allowed
collatz(443);