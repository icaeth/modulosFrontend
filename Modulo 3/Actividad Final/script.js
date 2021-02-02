$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'magic.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function () {
        audioElement.play();
    }, true);
});


$(".add").click(function () {
    $(".data-p").data("test", "Texto de ejemplo Texto de ejemplo Texto Guardado en Data Texto de ejemplo Texto de ejemplo");
    $(".data-s").text($(".data-p").data("test"));
});
$(".get").click(function () {
    alert($(".data-p").data("test"))
});
$(".addClass").click(function () {
    $(".no-red").addClass("red");
});
$(".slideT").click(function () {
    $(".latrell").slideToggle("slow");
});
$(".append").click(function () {
    $(".apendicitis").append("<p>Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo</p>");
});
$(".val").click(function () {
    alert($("#valorant").val())
});
$(".fadeIn").click(function () {
    $(".latrell2").fadeIn("slow");
});
$(".fadeOut").click(function () {
    $(".latrell2").fadeOut("slow");
});
$(".focus").click(function () {
    alert("Modo Focus Activado, haz focus y observa la magia")
    $("#focusin").focus(function () {
        var obj = document.createElement("audio");
        obj.src = "magic.mp3";
        obj.play();
    });
});
$(".hide").click(function () {
    $(".hider").hide();
});
$(".show").click(function () {
    $(".hider").show();
});
$(".slideUp").click(function () {
    $(".slider").slideUp();
});
$(".slideDown").click(function () {
    $(".slider").slideDown();
});

