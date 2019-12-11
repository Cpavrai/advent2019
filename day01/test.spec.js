const expect = require("chai").expect
var computeTotalFuel = [
    require("./first"),
    require("./second")
]

describe("First day", function() {
    describe("First half", function() {
        it("Should get 2", () => expect(computeTotalFuel[0]([14])).to.equal(2))
        it("Should get also 2", () => expect(computeTotalFuel[0]([14])).to.equal(2))
        it("Should get 654", () => expect(computeTotalFuel[0]([1969])).to.equal(654))
        it("Should get 33583", () => expect(computeTotalFuel[0]([100756])).to.equal(33583))
    })
    describe("Second half", function() {
        it("Should get 2", () => expect(computeTotalFuel[1]([12])).to.equal(2))
        it("Should get 966", () => expect(computeTotalFuel[1]([1969])).to.equal(966))
        it("Should get 100756", () => expect(computeTotalFuel[1]([100756])).to.equal(50346))
    })
})