<<<<<<< HEAD
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function () {
    let canvas= $("#pixelCanvas");
    $("#sizePicker").submit(function (event) {
            event.preventDefault();
            canvas.html("");
            makeGrid();
        }
    );
=======
$(document).ready(function () {
    let canvas = $("#pixelCanvas");
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        canvas.html("");
        makeGrid();
    });
>>>>>>> master
});

function makeGrid() {
    let N = $("#inputHeight").val();
    let M = $("#inputWeight").val();
<<<<<<< HEAD
    
    
    for (let x = 1; x<= N; x++)//Adds Row
    {
        $("table").append("<tr></tr>");
    }
    for (let y = 1; y<= M; y++) //Add Data
    {
        $("tr").append("<td></td>");
    }
    

$("table").on ("click","td",function (){
     let colorPick=$("#colorPicker").val();
     $(this).css("background-color",colorPick);
 })

   
=======


    for (let x = 1; x <= N; x++) //Adds Row
    {
        $("table").append("<tr></tr>");
    }
    for (let y = 1; y <= M; y++) //Add Data
    {
        $("tr").append("<td></td>");
    }


    $("table").on("click", "td", function () {
        let colorPick = $("#colorPicker").val();
        $(this).css("background-color", colorPick);
    })


>>>>>>> master
}