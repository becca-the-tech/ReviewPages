const input = require("readline-sync");

function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);

console.log(firstColor.rgb());
console.log(firstColor.hex());

//without the new keyword, this applies to the window
//but when called as "new Color(0,0,0)" it makes a new object, sets 'this' to apply to the new object,
//then returns the new object behind the scenes
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};


// let color1 = new Color(40, 255, 60);
let color2 = new Color(255, 255, 255);

//console.log(color2.hex());
// color1.rgba(0.8);

//when defining a class, you need a "class" keyword, and it has to have a constructor
class OtherColor {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    greet() {
        return `Hello from ${this.name}!`;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {

        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a} )`;
    }
    hex() {
        //TODO: Troubleshoot this
        const { r, g, b } = this;
        return ("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`;
    }

    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%,${l}%)`;
    }

    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%,${l}%)`;
    }

    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        //Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        if (delta == 0) h = 0;
        else if (cmax == r)
            //Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            //Green is max
            h = (b - r) / delta + 2;
        else
            //Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        //Make negative hues positive behind 360 deg
        if (h < 0) h += 360;

        //Calculate lightness
        l = (cmax + cmin) / 2;

        //Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        //Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

// const c1 = new OtherColor(255, 67, 89, "tomato");
// console.log(c1.greet());
// const c2 = new OtherColor(255, 255, 255, "white");
// console.log(c2.rgba(.9));

// c1.calcHSL();
// c2.calcHSL();
// console.log(`H: ${c1.h}, S: ${c1.s}, L: ${c1.l}`);
// console.log(`H: ${c2.h}, S: ${c2.s}, L: ${c2.l}`);


//console.log(c2.fullySaturated());

const colorType = input.question("Which type of color do you want to convert from rgb? ('hsl' or 'hex' or find 'opposite'?) ").toLowerCase();
const red = input.question("What is the red color? (1st part in ex: rgb(255,0,255)) ");
const green = input.question("What is the green color? (2nd part in ex: rgb(255,0,255)) ");
const blue = input.question("What is the blue color? (3rd part in ex: rgb(255,0,255)) ");

const color = new OtherColor(red, green, blue);
console.log(color);

if (colorType === "hex") {
    console.log(`Your color is ${color}. The color is ${color.hex()}`);
} else if (colorType === "hsl") {
    console.log(`Your color is ${colorType}. The color is ${color.hsl()}`);
} else if (colorType === "opposite") {
    console.log(`Your color is ${colorType}. The color is ${color.opposite()}`);
} else {
    console.log("Invalid colorType.");
}

