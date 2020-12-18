
function updateNodes(rows) {
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        $('#board').append('<tr></tr>')
        for (let c = 0; c < row.length; c++) {
            const col = row[c];
            $(`#board tr:nth-child(${r + 1})`).append(`<td class="${col}"></td>`);
        }
    }

    $('#board td').click(function() {
        if ($(this).attr('class') == 'wall') $(this).attr('class', 'unvisited');
        else $(this).attr('class', 'wall');
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
