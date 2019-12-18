class AsteroidMap {
    constructor(map) {
        this.asteroids = [];
        let x = 0, y = 0;

        map.forEach(line => {
            x = 0;
            line.split('').forEach((element) => {
                if (element == "#") this.asteroids.push({x:x, y:y})
                x++;
            })
            y++;
        });
    }

    getMostEfficientAsteroid(variable) {
        var results = [], result = null;
        this.asteroids.forEach((e) => {
            results.push({...e, sight: []});
            this.asteroids.filter((a) => a.x != e.x || a.y != e.y).forEach((other_asteroid) => {
                if (results[results.length - 1].sight
                    .find((a) => 
                            (a.x - e.x)/(a.y - e.y) == (other_asteroid.x - e.x)/(other_asteroid.y - e.y)
                                && (Math.sign(a.x - e.x) == Math.sign(other_asteroid.x - e.x)
                                && Math.sign(a.y - e.y) == Math.sign(other_asteroid.y - e.y))) == undefined)
                    results[results.length - 1].sight.push(other_asteroid);
            })
        })
        result = results.sort((a, b) => b.sight.length - a.sight.length)[0];
        if (variable == "position") return [result.x, result.y];
        else if (variable == "detection_length") return result.sight.length;
        else return null;
    }

    nextDegree(map, origin, previous_degree) {
        let res = null, new_map = [...map];

        if (!map.length) return null;
        new_map = new_map
            .sort((a, b) => comparePoints(a, b, origin));
        let tmp_map = new_map
            .filter((a) => angle(origin.x, origin.y, a.x, a.y) > previous_degree);
        if (!tmp_map.length) tmp_map = new_map;
        res = tmp_map[0];
        return {...res, angle: angle(origin.x, origin.y, res.x, res.y)};
    }

    listQueueDestroy(origin) {
        var result = [], tmp_asteroids = [...this.asteroids], center = {x: origin[0], y: origin[1]};
        tmp_asteroids = tmp_asteroids.filter((a) => (a.x != center.x || a.y != center.y))

        result.push(this.nextDegree(tmp_asteroids, center, 359.9));
        tmp_asteroids = tmp_asteroids.filter((a) => (a.x != result[result.length - 1].x || a.y != result[result.length - 1].y));
        while (result.length < this.asteroids.length - 1) {
            result.push(this.nextDegree(tmp_asteroids, center, result[result.length - 1].angle));
            tmp_asteroids = tmp_asteroids.filter((a) => (a.x != result[result.length - 1].x || a.y != result[result.length - 1].y));
        }
        return result;
    }
}

function angle(origin_x, origin_y, ex, ey) {
    var dy = ey - origin_y;
    var dx = ex - origin_x;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    if (theta < 0) theta += 360; // range [0, 360)
    return (theta + 90) % 360;
}

function comparePoints(a, b, origin) {
    let a_degree = angle(origin.x, origin.y, a.x, a.y),
        b_degree = angle(origin.x, origin.y, b.x, b.y);
        
    if (a_degree - b_degree != 0) return a_degree - b_degree;
    else if ((a.x - origin.x) - (b.x - origin.x) != 0) return (Math.abs(a.x - origin.x) - Math.abs(b.x - origin.x));
    return (Math.abs(a.y - origin.y) - Math.abs(b.y - origin.y));
}

module.exports = AsteroidMap;