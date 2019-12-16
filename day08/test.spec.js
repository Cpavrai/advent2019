const expect = require("chai").expect
var half = [
    require("./first"),
    require("./second")
]

describe("Eighth day", function() {
    describe("First half", function() {
        it("Should say 4", () => expect(half[0].compute("012134526789", {x:4,y:3})).is.equal(4))
        it("Should say 12", () => expect(half[0].compute("0121021345207267890985534587", {x:7, y:4})).is.equal(12))
        it("Should say 2", () => expect(half[0].compute("012134526789", {x:4,y:1})).is.equal(2))
        it("Should say 2", () => expect(half[0].compute("0121021315207261820985534587", {x:7, y:1})).is.equal(2))
    })
    describe("Second half", function() {
        it("Should product a picture as 0110", () => expect(half[1].productPicture("0222112222120000", {x:2,y:2})).is.equal("0110"))
        // it("Should say 123444 is false", () => expect(Boolean(half[1].isGood(123444))).is.false)
        // it("Should say 111122 is true", () => expect(Boolean(half[1].isGood(111122))).is.true)
    })
})