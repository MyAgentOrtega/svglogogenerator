const { Circle, Triangle, Square} = require("./shapes");

describe("Circle", () => {
    test("When a shape is created, it should render the given color", () => {
        const testObj = new Circle();
        testObj.setColor("red")
        const result = testObj.render();
        
        expect(result).toBe(`<circle cx="150" cy="100" r="80" fill="red"/>`)
    })
})

describe("Square", () => {
    test("When a shape is created, it should render the given color", () => {
        const testObj = new Square();
        testObj.setColor("green")
        const result = testObj.render();
        
        expect(result).toBe(`<rect x="90" y="40" width="120" height="120" fill="green"/>`)
    })
})

describe("Triangle", () => {
    test("When a shape is created, it should render the given color", () => {
        const testObj = new Triangle();
        testObj.setColor("blue")
        const result = testObj.render();
        
        expect(result).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`)
    })
})