/*
1. isPrime returns boolean of whether arugument is a prime number

2. run checks if the argument can be written as a product of two prime numbers
*/



function isPrime(n) {
	function fn(j) {
		let i;
		for (i = 2; i < j; i++) {
			if (j % i === 0) {
				return false
			}
		}
		return true
	}
	if (n===1) return false;
	if (n===2 || n===3) return true;
	if (n>3) return fn(n)
}

function run(m) {
	let i;
	if (1 < m && m < (10**8)) {
		for (let i = 1; i <= m; i++) {
			 if (m % i === 0) {
				let firstRoot = i;
				let secondRoot = m / i;
				if (secondRoot != m) {
					if (isPrime(firstRoot)) {
						if (isPrime(secondRoot)) {
							return true
						} else {
							return false
						}
					} else {
						return false
					}
				}
			}
		}
	} else if (m === 1) {
		return false
	}
}
console.log("Are the following Prime numbers? ")
console.log("1 : " + isPrime(1))
console.log("7 : " + isPrime(7))
console.log("27 : " + isPrime(27))
console.log("231 : " + isPrime(231))
console.log("Can the following be written as a product of prime numbers?")
console.log("1 : " + run(1))
console.log("27 : " + run(27))
console.log("77 : " + run(77))
console.log("93 : " + run(93))
console.log("231 : " + run(231))
