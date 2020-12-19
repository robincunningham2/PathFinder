
class Node {
    constructor(xy, role) {
        this.role = role;
        this.isVisited = false;
        this.x = xy.x;
        this.y = xy.y;
        this.path = '';
    }
}


class PathFinder {
    constructor(start, target) {
        this.nodes = [];

        this._getNode = function(x, y) {
            let found;
            for (let i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].x == x && this.nodes[i].y == y) {
                    found = this.nodes[i];
                    found._i = i;
                }
            }

            if (!found) {
                found = new Node({ x: x, y: y }, null);
            }

            return found;
        }

        this._setNode = function(x, y, value) {
            if (!this._getNode(x, y)) this.nodes.push(value);
            else {
                this.nodes[this._getNode(x, y)._i] = value;
            }
        }

        this._handleNode = function(x, y) {
            if (this._getNode(x, y).role == 'target') this._endNodeFound = true;
            if (this._endNodeFound) return;

            // Right
            if (this._getNode(x + 1, y).role != 'wall' && !this._getNode(x + 1, y).isVisited) {
                this._handleNode(x + 1, y);
            }

            // Down
            if (this._getNode(x, y - 1).role != 'wall' && !this._getNode(x, y - 1).isVisited) {
                this._handleNode(x, y - 1);
            }

            // Left
            if (this._getNode(x - 1, y).role != 'wall' && !this._getNode(x - 1, y).isVisited) {
                this._handleNode(x - 1, y);
            }

            // Up
            if (this._getNode(x, y + 1).role != 'wall' && !this._getNode(x, y + 1).isVisited) {
                this._handleNode(x, y + 1);
            }
        }

        this._endNodeFound = false;

        this.visitedNodes = function() {
            let nodes = [];
            for (let i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].isVisited) nodes.push(this.nodes[i]);
            }

            return nodes;
        }

        this.start = function() {
            this._setNode(start.x, start.y, new Node(start, 'start'));
            this._setNode(target.x, target.y, new Node(target, 'target'));
            // this._handleNode(start.x, start.y);
        }
    }
}
