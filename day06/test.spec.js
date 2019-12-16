const expect = require("chai").expect
var half = [
    require("./first"),
    require("./second")
]

describe("Sixth day", function() {
    describe("First half", function() {
        it("Should say orbits sum is 3", () => expect(half[0].sumOrbits(["COM)B","B)C"])).to.equal(3))
        it("Should say orbits sum is 42", () => expect(half[0].sumOrbits(["COM)B","B)C","C)D","D)E","E)F","B)G","G)H","D)I","E)J","J)K","K)L"])).to.equal(42))
    })
    describe("Second half", function() {
        it("Should say shortest path is 4 steps long", () => expect(half[1].findPath(["COM)B","B)C","C)D","D)E","E)F","B)G","G)H","D)I","E)J","J)K","K)L","K)YOU","I)SAN"])).is.equal(4))
        it("Should say shortest path is 5 steps long", () => expect(half[1].findPath(["COM)B","B)C","C)D","D)E","E)F","B)G","G)H","D)I","E)J","J)K","K)L","K)M","M)YOU","I)SAN"])).is.equal(5))
    })
})