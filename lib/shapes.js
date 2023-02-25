// Parent class that other classes inherit from
class Shape {
  constructor(backgroundColor, svgText, textColor) {
    this.backgroundColor = backgroundColor;
    this.svgText = svgText;
    this.textColor = textColor;
  }
}

// Circle class that inherits from parent (Shape)
class Circle extends Shape {
  constructor(backgroundColor, svgText, textColor) {
    // Inheritance from parent (Shape)
    super(backgroundColor, svgText, textColor);
  }

  // Render function that renders the actual html (which gets put in the .svg file later),
  // and bases some of it off user input (the rest is info for the basic svg, shape, and text, which user doesn't have access to)
  render() {
    return `<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="150" stroke="black" fill="${this.backgroundColor}" stroke-width="2" class="shape"/>
        <text x="250" y="275" font-size="60" text-anchor="middle" fill="${this.textColor}" font-family="verdana">${this.svgText}</text>
        </svg>`;
  }
}

// Triangle class that inherits from parent (Shape)
class Triangle extends Shape {
  constructor(backgroundColor, svgText, textColor) {
    // Inheritance from parent (Shape)
    super(backgroundColor, svgText, textColor);
  }

  // Render function that renders the actual html (which gets put in the .svg file later),
  // and bases some of it off user input (the rest is info for the basic svg, shape, and text, which user doesn't have access to)
  render() {
    return `<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,50 100,300 400,300" fill="${this.backgroundColor}" stroke="black" stroke-width="2"/>
        <text x="247.5" y="230" font-size="60" text-anchor="middle" fill="${this.textColor}" font-family="verdana">${this.svgText}</text>
        </svg>`;
  }
}

// Square class that inherits from parent (Shape)
class Square extends Shape {
  constructor(shape, backgroundColor, svgText, textColor) {
    // Inheritance from parent (Shape)
    super(backgroundColor, svgText, textColor);
  }

  // Render function that renders the actual html (which gets put in the .svg file later),
  // and bases some of it off user input (the rest is info for the basic svg, shape, and text, which user doesn't have access to)
  render() {
    return `<svg width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="100" width="300" height="300" fill="${this.backgroundColor}" stroke="black" stroke-width="2"/>
        <text x="250" y="270" font-size="60" text-anchor="middle" fill="${this.textColor}" font-family="verdana">${this.svgText}</text>
        </svg>`;
  }
}

// Exports all 3 classes
module.exports = { Circle, Square, Triangle };
