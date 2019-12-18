const expect = require("chai").expect
var half = [
    require("./first"),
    require("./second")
]

describe("Tenth day", function() {
    describe("First half", function() {
        it("Should find most efficient asteroid is (3, 4)", () => expect(half[0](".#..#\n.....\n#####\n....#\n...##")).is.eql([3, 4]))
        it("Should find most efficient asteroid is (5, 8)", () => expect(half[0]("......#.#.\n#..#.#....\n..#######.\n.#.#.###..\n.#..#.....\n..#....#.#\n#..#....#.\n.##.#..###\n##...#..#.\n.#....####")).is.eql([5, 8]))
        it("Should find most efficient asteroid is (1, 2)", () => expect(half[0]("#.#...#.#.\n.###....#.\n.#....#...\n##.#.#.#.#\n....#.#.#.\n.##..###.#\n..#...##..\n..##....##\n......#...\n.####.###.")).is.eql([1, 2]))
        it("Should find most efficient asteroid is (6, 3)", () => expect(half[0](".#..#..###\n####.###.#\n....###.#.\n..###.##.#\n##.##.#.#.\n....###..#\n..#.#..#.#\n#..#.#.###\n.##...##.#\n.....#.#..")).is.eql([6, 3]))
        it("Should find most efficient asteroid is (11, 13)", () => expect(half[0](".#..##.###...#######\n##.############..##.\n.#.######.########.#\n.###.#######.####.#.\n#####.##.#.##.###.##\n..#####..#.#########\n####################\n#.####....###.#.#.##\n##.#################\n#####.##.###..####..\n..######..##.#######\n####.##.####...##..#\n.#####..#.######.###\n##...#.##########...\n#.##########.#######\n.####.#.###.###.#.##\n....##.##.###..#####\n.#.#.###########.###\n#.#.#.#####.####.###\n###.##.####.##.#..##")).is.eql([11, 13]))
    })
    describe("Second half", function() {
        it("Should say first asteroid going to be destroyed is in (8, 1, 0)", () => expect(half[1](".#....#####...#..\n##...##.#####..##\n##...#...#.#####.\n..#.....#...###..\n..#.#.....#....##")[0]).is.eql({x: 8, y: 1, angle: 0}))
        it("Should say first asteroid going to be destroyed is in (9, 2, 45)", () => expect(half[1](".#....#####...#..\n##...##.#####..##\n##...#...#.#####.\n..#.....#...###..\n..#.#.....#....##")[4]).is.eql({x: 9, y: 2, angle: 45}))
        it("Should say first asteroid going to be destroyed is in (12, 3, 90)", () => expect(half[1](".#....#####...#..\n##...##.#####..##\n##...#...#.#####.\n..#.....#...###..\n..#.#.....#....##")[13]).is.eql({x: 12, y: 3, angle: 90}))
        it("Should say first asteroid going to be destroyed is in (2, 3, 270)", () => expect(half[1](".#....#####...#..\n##...##.#####..##\n##...#...#.#####.\n..#.....#...###..\n..#.#.....#....##")[19]).is.eql({x: 2, y: 3, angle: 270}))
    })
})