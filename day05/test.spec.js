const expect = require("chai").expect
var compute = require("./second").compute

describe("Fifth day", function() {
    
    describe("Second half", function() {
        it("Should stock 1 in position 5 as expected", () => compute([8,5,6,5,99,8,8]).then((res) => expect(res[5]).to.equal(1)));
        it("Should stock 0 in position 5 as expected", () => compute([7, 12, 8, 5, 99, -1]).then((res) => expect(res[5]).to.equal(0)));0
        it("[Long] Should stock get 1 as output", () => compute([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], ["22"]).then((res) => expect(res[13]).to.equal(1)));
        it("[Long] Should stock get 0 as output", () => compute([3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], ["0"]).then((res) => expect(res[13]).to.equal(0)));
        it("[Long] Should stock get 0 as output", () => compute([3,3,1105,-1,9,1101,0,0,12,4,12,99,1], ["16"]).then((res) => expect(res[12]).to.equal(1)));
    })
})
