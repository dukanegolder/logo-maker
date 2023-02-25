const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Triangle, Square } = require("./lib/shapes.js");

function svgPrompt() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What shape would you like for your svg?",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        message:
          'What would color would you like the background to be? you can use a color name OR hexidecimal code (please include "#" if using hex)',
        name: "backgroundColor",
        validate: function (input) {
          if (input === "") {
            return `\x1b[31mPlease enter a color\x1b[0m`; 
          }
          return true;
        },
      },
      {
        type: "input",
        message:
          "Enter your text (note: you can enter up to three characters):",
        name: "svgText",
        validate: function (input) {
          if (input.length > 3) {
            return `\x1b[31mInput must be 3 characters or less\x1b[0m`;
          }
          return true;
        },
      },
      {
        type: "input",
        message:
          "What would color would you like the text to be (you can use a color name or hexidecimal code)?",
        name: "textColor",
       
        validate: function (input) {
          if (input === "") {
            return `\x1b[31mPlease enter a color\x1b[0m`;
          }
          return true;
        },
      },

   
    ])
    .then((data) => {
     
      if (data.shape === "Triangle") {
        const triangle = new Triangle(); 
        triangle.backgroundColor = data.backgroundColor; 
        triangle.svgText = data.svgText; 
        triangle.textColor = data.textColor; /
        fs.writeFile("triangle.svg", triangle.render(), (err) => {
          err
            ? console.error(err)
            : console.log("\x1b[32mGenerated triangle.svg\x1b[0m");
        }); // generates the file, console logs in green text
      } else if (data.shape === "Circle") {
        const circle = new Circle();
        circle.backgroundColor = data.backgroundColor;
        circle.svgText = data.svgText;
        circle.textColor = data.textColor;
        fs.writeFile("circle.svg", circle.render(), (err) => {
          err
            ? console.error(err)
            : console.log("\x1b[32mGenerated circle.svg\x1b[0m");
        });
      } else {
        const square = new Square();
        square.backgroundColor = data.backgroundColor;
        square.svgText = data.svgText;
        square.textColor = data.textColor;
        fs.writeFile("square.svg", square.render(), (err) => {
          err
            ? console.error(err)
            : console.log("\x1b[32mGenerated square.svg\x1b[0m");
        });
      }
    });
}

svgPrompt();
