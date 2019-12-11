const expect = require("chai").expect
var compute = [
    require("./first")
]

describe("Second day", function() {
    describe("First half", function() {
        it("Should get 3500", () => expect(compute[0]([1,9,10,3,2,3,11,0,99,30,40,50])[0]).to.equal(3500))
        it("Should get 2", () => expect(compute[0]([1,0,0,0,99])[0]).to.equal(2))
        it("Should get 6", () => expect(compute[0]([2,3,0,3,99])[3]).to.equal(6))
        it("Should get 9801", () => expect(compute[0]([2,4,4,5,99,0])[5]).to.equal(9801))
        it("Should get 30", () => expect(compute[0]([1,1,1,4,99,5,6,0,99])[0]).to.equal(30))
        it("Should also get 2", () => expect(compute[0]([1,1,1,4,99,5,6,0,99])[4]).to.equal(2))
    })
})