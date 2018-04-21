$(document).ready(function () {
    let canvas = $("#pixelCanvas");
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        canvas.html("");
        makeGrid();
    });
});

function makeGrid() {
    let N = $("#inputHeight").val();
    let M = $("#inputWeight").val();


    for (let x = 1; x <= N; x++) //Adds Row
    {
        $("table").append("<tr></tr>");
    }
    for (let y = 1; y <= M; y++) //Add Cols
    {
        $("tr").append("<td></td>");
    }


    $("table").on("click", "td", function () {

        let colorPick = $("#colorPicker").val();
        console.log(colorPick);
        console.log(($(this).css("background-color")));
        if ($(this).css("background-color") == colorPick) {
            $(this).css("background-color","#ffff");
        } else {
            $(this).css("background-color", colorPick);
        }

    })


}
$.cssHooks.backgroundColor = {
    get: function (elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["backgroundColor"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("background-color");
        if (bg.search('rgba') > -1) {
            return '#00ffffff';
        } else {
            if (bg.search('rgb') == -1) {
                return bg;
            } else {
                bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }
                return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
            }
        }
    }
};