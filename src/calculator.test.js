const add = require("./calculator");

it("add correctly", () => {
  expect(add(3,5)).toBe(8);
})