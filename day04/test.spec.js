const expect = require("chai").expect
var half = [
    require("./first"),
    require("./second")
]

describe("Fourth day", function() {
    describe("First half", function() {
        it("Should say 111111 is true", () => expect(Boolean(half[0].isGood(111111))).is.true)
        it("Should say 223450 is false", () => expect(Boolean(half[0].isGood(223450))).is.false)
        it("Should say 123789 is false", () => expect(Boolean(half[0].isGood(123789))).is.false)
    })
    describe("Second half", function() {
        it("Should say 112233 is true", () => expect(Boolean(half[1].isGood(112233))).is.true)
        it("Should say 123444 is false", () => expect(Boolean(half[1].isGood(123444))).is.false)
        it("Should say 111122 is true", () => expect(Boolean(half[1].isGood(111122))).is.true)
    })
})