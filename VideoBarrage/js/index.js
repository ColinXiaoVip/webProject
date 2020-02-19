$(() => {
    let video_width = $('#video').css('width');
    $('#barrage_btn').click(() => {
        let val_input = $('#barrage_input').val();
        let val = '<p>' + val_input + '</p>';
        $('#video').append(val)
        $('#barrage_input').val('');
    });

    setInterval(() => {
        function randomColor() {
            let color = "";
            for (let i = 0; i < 6; i++) {
                color += (Math.random() * 16 | 0).toString(16);
            }
            return "#" + color;
        }

        let color = randomColor();
        $('p').css('color', color);
    }, 1000);
    let index = 4;
    setInterval(()=>{
        index += 40;
        let margin_right = index + 'px';
        $('p').css('right', margin_right);
        console.log(index);
    },500)


});