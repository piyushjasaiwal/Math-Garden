const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const WIDTH = 15;
var cur_x = 0;
var cur_y = 0;
var pre_x = 0;
var pre_y = 0;

var canvas;
var context;
function prepareCanvas() {
    // console.log('preparing canvas');
    canvas = document.getElementById('my_canvas');
    context = canvas.getContext('2d');
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.strokeStyle = LINE_COLOR;
    context.lineWidth = WIDTH;
    context.lineJoin = 'round';
    var isMouseDown = false;

    document.addEventListener('mousedown', function (event) {
        isMouseDown = true;
        cur_x = event.clientX - canvas.offsetLeft;
        cur_y = event.clientY - canvas.offsetTop;
    });

    document.addEventListener('mousemove', function (event) {
        if (isMouseDown) {
            pre_x = cur_x;
            cur_x = event.clientX - canvas.offsetLeft;
            pre_y = cur_y;
            cur_y = event.clientY - canvas.offsetTop;

            context.beginPath();
            context.moveTo(pre_x, pre_y);
            context.lineTo(cur_x, cur_y);
            context.closePath();
            context.stroke();
        }
    });

    document.addEventListener('mouseup', function (event) {
        isMouseDown = false;
    });

    canvas.addEventListener('mouseleave', function (event) {
        isMouseDown = false;
    });

}

function clearCanvas(){
    cur_x = 0;
    cur_y = 0;
    pre_x = 0;
    pre_y = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);    
}
