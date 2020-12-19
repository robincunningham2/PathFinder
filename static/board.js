
let mousedown = false;
$(document.body).mousedown(function() {
    mousedown = true;
});

$(document.body).mouseup(function() {
    mousedown = false;
});

function nodeEvent(e) {
    if ($(e.target).attr('class') == 'wall') $(e.target).attr('class', 'unvisited');
    else $(e.target).attr('class', 'wall');
}

function updateNodes(nodes, grid) {
    $('#board').html(null);

    for (let r = 0; r < grid.h; r++) {
        $('#board').append('<tr></tr>');
        for (let c = 0; c < grid.w; c++) {
            $(`#board tr:nth-child(${r + 1})`).append(`<td></td>`);
        }
    }

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].role == null) {
            nodes[i].role = 'unvisited';
            if (nodes[i].isVisited) nodes[i].role = 'visited';

            $(`#board tr:nth-child(${nodes[i].y + 1}) td:nth-child(${nodes[i].x + 1})`).attr('class', nodes[i].role);
        }
    }

    $('#board td').mousedown(nodeEvent);
    $('#board td').mouseover(function(e) {
        if (mousedown) nodeEvent(e);
    });
}

function getSizes() {
    let h = $(window).height();
    let w = $(window).width();

    return {
        h: Math.floor((h - 155) / 25),
        w: Math.floor((w - 100) / 25)
    };
}

const win = getSizes();
const pathFinder = new PathFinder({ x: 5, y: 5 }, { x: 15, y: 5 });
updateNodes(pathFinder.nodes, win);

pathFinder.start();

updateNodes(pathFinder.nodes, win);
