const randomgen = require("./index");

test("Test to check if random number is between 1 to 100", async () => {
	expect(await randomgen()).toBeGreaterThanOrEqual(1);
	expect(await randomgen()).toBeLessThanOrEqual(100);
})