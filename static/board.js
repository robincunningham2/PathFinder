
function getSizes() {
    let h = $(window).height();
    let w = $(window).width();

    return {
        h: Math.floor((h - 155) / 25),
        w: Math.floor((w - 100) / 25)
    };
}
