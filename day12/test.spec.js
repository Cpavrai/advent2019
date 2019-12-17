const expect = require("chai").expect
var half = [
    require("./first"),
    require("./second")
]

describe("Twelvth day", function() {
    describe("First half", function() {
        it("Should give 179 as total sum energy", () => expect(half[0]([{x:-1, y:0, z:2}, {x:2, y:-10, z:-7}, {x:4, y:-8, z:8}, {x:3, y:5, z:-1}], 10).sumTotalEnergy()).is.equal(179));
        it("Should give 1940 as total sum energy", () => expect(half[0]([{x:-8, y:-10, z:0},{x:5, y:5, z:10},{x:2, y:-7, z:3},{x:9, y:-8, z:-3}], 100).sumTotalEnergy()).is.equal(1940));
    })
    describe("Second half", function() {
        it("Should find full loop step is 2772", () => expect(half[1]([{x:-1, y:0, z:2},{x:2, y:-10, z:-7},{x:4, y:-8, z:8},{x:3, y:5, z:-1}])).is.equal(2772))
        // it("Should find full loop step is 4686774924", () => expect(half[1]([{x:-8, y:-10, z:0},{x:5, y:5, z:10},{x:2, y:-7, z:3},{x:9, y:-8, z:-3}])).is.equal(4686774924))
    })
})