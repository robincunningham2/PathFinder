
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

function updateNodes(rows) {
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        $('#board').append('<tr draggable="false"></tr>')
        for (let c = 0; c < row.length; c++) {
            const col = row[c];
            $(`#board tr:nth-child(${r + 1})`).append(`<td class="${col}"></td>`);
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
const pathFinder = new PathFinder({ x: 5, y: 5 }, { x: 15, y: 5 }, win);
updateNodes(pathFinder.rows);
