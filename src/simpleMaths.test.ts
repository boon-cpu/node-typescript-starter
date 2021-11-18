import {
  calcAreaSquare,
  calcAreaTriangle,
  calcPerimeterSquare,
} from "./simpleMaths";

test("Area Square", () => {
  expect(calcAreaSquare(4)).toBe(16);
});

test("Area Triangle", () => {
  expect(calcAreaTriangle(4, 5)).toBe(10);
});

test("Surface area of square", () => {
  expect(calcPerimeterSquare(4)).toBe(16);
});
