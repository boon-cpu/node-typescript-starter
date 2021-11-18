export function calcAreaSquare(sideLength: number): number {
  return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
  return (width * height) / 2;
}

export function calcPerimeterSquare(sideLength: number): number {
  return sideLength * 4;
}
