const inquirer = require("inquirer")
const {writeFile}=require ("fs/promises")
const {Square, Triangle, Circle}=require ("./lib/shapes")
const SVG = require("./lib/svg")
inquirer.prompt([
    {
        name:"text",
        type:"input",
        message:"enter 3 characters for logo",
        validate: (text) => {
            return text.length <= 3 || "must contain no more than 3 characters"
        }
    },
    {
        name:"textColor",
        type:"input",
        message:"what color do you want your text?",
    },
    {
        name:"shapeType",
        type:"list",
        message:"what type of shape would  you like for the logo?",
        choices:["square", "circle", "triangle"],

    },
    {
        name:"shapeColor",
        type:"input",
        message:"what color do you want your shape?",

    }
]).then(res=>{
    let shape;
    if (res.shapeType ==="circle") {
        //use circle class to set shape     
        shape=new Circle()
    }
    if (res.shapeType ==="square") {
        //use square class to set shape
        shape=new Square()

    }
    if (res.shapeType ==="triangle") {
        //use triangle class to set shape
        shape=new Triangle()

    }
    shape.setColor(res.shapeColor)
    let svg = new SVG ()
    svg.setShape(shape)
    svg.setText(res.text,res.textColor)
return writeFile("./examples/logo.svg", svg.render())
}).then(()=>{
    console.log("logo has been generated!")
})
