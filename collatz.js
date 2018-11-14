function collatz(n) {
    if (isNaN(n) || n <= 0) return;
    while (n > 1) {
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