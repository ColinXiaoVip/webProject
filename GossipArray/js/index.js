$(() => {
    let index = 0;
    setInterval(() => {
        if (index == 360) {
            index = 0
        }
        let rotate = 'rotate(' + index + 'deg)';
        index++;
        $('#main').css('transform', rotate)
    }, 10)
});