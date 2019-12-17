const expect = require("chai").expect
var half = [
    require("./first")
]

describe("Twentith day", function() {
    describe("First half", function() {
        it("Should give 179 as total sum energy", () => expect(half[0]([{x:-1, y:0, z:2}, {x:2, y:-10, z:-7}, {x:4, y:-8, z:8}, {x:3, y:5, z:-1}], 10).sumTotalEnergy()).is.equal(179));
        it("Should give 1940 as total sum energy", () => expect(half[0]([{x:-8, y:-10, z:0},{x:5, y:5, z:10},{x:2, y:-7, z:3},{x:9, y:-8, z:-3}], 100).sumTotalEnergy()).is.equal(1940));
    })
    // describe("Second half", function() {
    //     it("Should product a picture as 0110", () => expect(half[1].productPicture("0222112222120000", {x:2,y:2})).is.equal("0110"))
    // })
})