// Create variables for external inquirer and fs services
const inquirer = require("inquirer");
const fs = require("fs");

// Created variable for shape classes from internal file
const { Circle, Triangle, Square } = require("./lib/shapes.js");

// Prompts the user for svg generation choices
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
        // Validation to make sure user actually input characters
        validate: function (input) {
          if (input === "") {
            return `\x1b[31mPlease enter a color\x1b[0m`; // Set console text to color red
          }
          return true;
        },
      },
      {
        type: "input",
        message:
          "Enter your text (note: you can enter up to three characters):",
        name: "svgText",
        // Validation to make sure user's text is not over 3 characters
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
        // Validation to make sure user actually input characters
        validate: function (input) {
          if (input === "") {
            return `\x1b[31mPlease enter a color\x1b[0m`;
          }
          return true;
        },
      },

      // .then statement after inputs that takes in data
    ])
    .then((data) => {
      // If statement that selects what shape to generate based on user selection
      if (data.shape === "Triangle") {
        const triangle = new Triangle(); // Create new instance of the shape (triangle in this case)
        triangle.backgroundColor = data.backgroundColor; // Sets the bg color off user selection
        triangle.svgText = data.svgText; // Sets the text inside the svg to what the user chose (under 3 letters)
        triangle.textColor = data.textColor; // Sets the color of the text to what the user chose
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

// Function call for the above function
svgPrompt();
