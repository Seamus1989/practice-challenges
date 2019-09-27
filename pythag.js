var judgeSquareSum = function(c) {
	let sqRoot = Math. sqrt(c)
  let i;
	let result = [];
		for (i = 1; i <= sqRoot; i++) {
			let j;
			for (let j = 1; j <= sqRoot; j++) {
				if ((i*i)+(j*j) === c ) {
					result.push([i, j])
				}
			}
		}
		return result;
};
console.log(judgeSquareSum(25))
