function fizzBuzz(N, M) {
	let sequence = ""
	let i
	for (i = N; i <= M; i++) {
		if (i%3 === 0 && i%5 !=0 && i!=M) {
			sequence += "Fizz, "
		} else if (i%5 === 0 && i%3 != 0 && i!=M) {
			sequence += "Buzz, "
		} else if (i%5 === 0 && i%3 === 0 && i!=M) {
			sequence += "FizzBuzz, "
		} else if (i===M) {
			if (i%3 === 0 && i%5 !=0) {
				sequence += "Fizz"
			} else if (i%5 === 0 && i%3 != 0) {
				sequence += "Buzz"
			} else if (i%5 === 0 && i%3 === 0) {
				sequence += "FizzBuzz"
			}
		} else {
			sequence += i+", "
		}
	}
	return sequence
}
console.log(fizzBuzz(5,86))
