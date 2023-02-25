// Created variable for shape classes from internal file
const { Circle, Triangle, Square } = require("./shapes.js");

// First test for circle class
describe("Render Circle", () => {
  it("Should pass if the paramaters match", () => {
    const circle = new Circle();
    circle.backgroundColor = "red";
    circle.svgText = "vdd";
    circle.textColor = "green";

    expect(circle.render())
      .toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="150" stroke="black" fill="blue" stroke-width="2" class="shape"/>
        <text x="250" y="275" font-size="60" text-anchor="middle" fill="white" font-family="verdana">abc</text>
        </svg>`);
  });
});

// Second test for triangle class
describe("Render Triangle", () => {
  it("Should pass if the paramaters match", () => {
    const triangle = new Triangle();
    triangle.backgroundColor = "red";
    triangle.svgText = "123";
    triangle.textColor = "black";

    expect(triangle.render())
      .toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,50 100,300 400,300" fill="red" stroke="black" stroke-width="2"/>
        <text x="247.5" y="230" font-size="60" text-anchor="middle" fill="black" font-family="verdana">123</text>
        </svg>`);
  });
});

// Third test for square class
describe("Render Square", () => {
  it("Should pass if the paramaters match", () => {
    const square = new Square();
    square.backgroundColor = "black";
    square.svgText = "SVG";
    square.textColor = "yellow";

    expect(square.render())
      .toEqual(`<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="100" width="300" height="300" fill="black" stroke="black" stroke-width="2"/>
        <text x="250" y="270" font-size="60" text-anchor="middle" fill="yellow" font-family="verdana">SVG</text>
        </svg>`);
  });
});
