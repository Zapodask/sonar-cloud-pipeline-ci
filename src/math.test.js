const { add, subtract, multiply, divide, exponentiation } = require("./math");

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide", () => {
  expect(divide(6, 3)).toBe(2);
});

test("exponentiation", () => {
  expect(exponentiation(2, 3)).toBe(8);
})