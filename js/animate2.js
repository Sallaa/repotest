$(document).ready(function ($) {
    $(".ui.animated").addClass("load");
    // $('.ui.animated').delay(1200).transition({
    //     animation: 'fade',
    //     duration: 1600,
    // });

    $("#teste").click(function () {
        // alert("Handler for .click() called.");
        $("#image-6").attr("xlink:href", imgPath[i]).fadeIn("slow");
        if(imgPath.length == i)
            i = 0;
        else
            i++;
    });
});

var i=0;
var imgPath = ["img/photo2.jpg",
    "img/photo3.jpg",
    "img/photo4.jpg",
    "img/photo5.jpg",
    "img/photo6.jpg",
    "img/photo7.jpg",
    "img/photo8.jpg",
    "img/photo9.jpg",
    "img/photo1.jpg",
];