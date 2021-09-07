// Based on ISSN 2225-8787 by Beimar Lopez
function Eit(x) {
  if (x <= 0 || x - Math.floor(x) > 0) {
    return 0;
  } else {
    return 1;
  }
}

function printPrimeNumbersUpTo(x) {
  let aa = (2 * x + Math.pow(-1, x) - 1) / 6;
  let a = Math.round(aa, 0);
  let cc = (-1 + Math.sqrt(-2 + 3 * aa)) / 3;
  let c = -Math.floor(cc * -1);
  let m = c;
  let n = a - 1;
  let sum = 0;
  let k = 0;
  let t = 0;
  process.stdout.write("2, ");
  process.stdout.write("3, ");
  // Note: To improve the performance of the algorithm,
  //       Replaced Math.pow(-1, i) by i_even_odd that changes its sign every time i is even or odd
  //       Replaced Math.pow(-1, j) by j_even_odd that changes its sign every time j is even or odd
  //       Replaced Math.pow(-1, i + j) by i_j_even_odd that changes its sign every time (i+j) is even or odd
  for (
    let j = 1, i_j_even_odd = 1, j_even_odd = -1;
    j <= n;
    j++, i_j_even_odd *= -1, j_even_odd *= -1
  ) {
    for (
      let i = 1, i_even_odd = -1;
      i < m;
      i++, i_even_odd *= -1, i_j_even_odd *= -1
    ) {
      let r = Eit(
        (
          4 * j
          - j_even_odd
          + (2 * i + 1) * i_j_even_odd
          + (2 * i - 1) * i_even_odd
          - 12 * i * i
          + 5
        ) / (
          12 * i
          + 6 - 2 * i_even_odd
        )
      );
      k = r + k;
    }
    sum = Eit(k) + sum;
    if (Eit(k) === 0) {
      t = (-j_even_odd + 3 + 6 * j) / 2;
      process.stdout.write(`${t}, `);
    }
    k = 0;
  }
}

// Console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get prime numbers up to x
rl.question("Get prime numbers up to X (>3): ", (answer) => {
  const x = parseInt(answer);
  console.log("Prime numbers found:");
  printPrimeNumbersUpTo(x);
  rl.close();
});
