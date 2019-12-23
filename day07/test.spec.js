const expect = require("chai").expect
var half = [
    require("./first")
    // ,
    // require("./second")
]

describe("Seventh day", function() {
    describe("First half", function() {
        it("Should findMaxThruster egual to 43210", () => half[0].findMaxThruster([3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0], [4, 3, 2, 1, 0]).then((res) => expect(res.value).is.equal(43210)));
        it("Should findMaxThruster egual to 54321", () => half[0].findMaxThruster([3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0], [0,1,2,3,4]).then((res) => expect(res.value).is.equal(54321)));
        it("Should findMaxThruster egual to 65210", () => half[0].findMaxThruster([3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0], [0,1,2,3,4]).then((res) => expect(res.value).is.equal(65210)));


        // it("Should findMaxThruster egual to 43210", () => expect(half[0].findMaxThruster([3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0], [0, 1, 2, 3, 4])).is.equal(43210));
        // it("Should findMaxThruster egual to 54321", () => expect(half[0].findMaxThruster([3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0], [0,1,2,3,4])).is.equal(54321));
    })
    // describe("Second half", function() {
    //     it("Should say 112233 is true", () => expect(Boolean(half[1].isGood(112233))).is.true)
    //     it("Should say 123444 is false", () => expect(Boolean(half[1].isGood(123444))).is.false)
    //     it("Should say 111122 is true", () => expect(Boolean(half[1].isGood(111122))).is.true)
    // })
})