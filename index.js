function randomgen(){
	const ans=(Math.floor(Math.random() * 100 + 1))
	return ans;
}

randomgen();

module.exports = randomgen;