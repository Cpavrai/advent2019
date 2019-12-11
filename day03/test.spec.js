const expect = require("chai").expect
var getDistance = [
    require("./first"),
    require("./second")
]

describe("Third day", function() {
    describe("First half", function() {
        it("Should get 159", () => expect(getDistance[0]([["R75","D30","R83","U83","L12","D49","R71","U7","L72"],["U62","R66","U55","R34","D71","R55","D58","R83"]])[0].value).to.equal(159))
        it("Should get 135", () => expect(getDistance[0]([["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"],["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"]])[0].value).to.equal(135))
    })
    describe("Second half", function() {
        it("Should get 610", () => expect(getDistance[1]([["R75","D30","R83","U83","L12","D49","R71","U7","L72"],["U62","R66","U55","R34","D71","R55","D58","R83"]])[0].steps).to.equal(610))
        it("Should get 410", () => expect(getDistance[1]([["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"],["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"]])[0].steps).to.equal(410))
    })
})