class SVG {
    constructor(){
        this.textElement=""
        this.shapeElement=""
    }
    render(){
        return`<svg version="1.1" width="300" height="200" >${this.shapeElement}${this.textElement}</svg>`
    }
    setText(message, color){
        this.textElement=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
    setShape(shape){
        this.shapeElement= shape.render()
    }
}
module.exports = SVG