
class PathFinder {
    constructor(start, target, grid) {
        this.rows = [];
        for (let r = 0; r < grid.h; r++) {
            let cols = [];
            for (let c = 0; c < grid.w; c++) {
                if (r == start.y && c == start.x) cols.push('start');
                else if (r == target.y && c == target.x) cols.push('target');
                else cols.push('unvisited');
            }

            this.rows.push(cols);
        }
    }
}
