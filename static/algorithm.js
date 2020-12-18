
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

        this._getNode = function(x, y) {
            return this.rows[y][x];
        }

        this._setNode = function(x, y, value) {
            this.rows[y][x] = value;
        }

        this._handleNode = function(x, y) {
            if (this._endNodeFound) return;
            
        }

        this._endNodeFound = false;

        this.start = function(callback) {
            
        }
    }
}
