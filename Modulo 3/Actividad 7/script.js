$("#down").click(function () {
    $(".xwing").animate({ "top": "+=50px" }, "slow");
});

$("#up").click(function () {
    $(".xwing").animate({ "top": "-=50px" }, "slow");
});
$("#right").click(function () {
    $(".xwing").animate({ "left": "+=50px" }, "slow");
});

$("#left").click(function () {
    $(".xwing").animate({ "left": "-=50px" }, "slow");
});

$("#normal").click(function () {
    $(".xwing-img").animate({ "width": "100%", "height": "100%" }, "slow");
});
$("#ampliar").click(function () {
    $(".xwing-img").animate({ "width": "+=50px", "height": "+=50px" }, "slow");
});
$("#reducir").click(function () {
    $(".xwing-img").animate({ "width": "-=50px", "height": "-=50px" }, "slow");
});
$("#visible").click(function () {
    $(".xwing").fadeIn("slow");
});
$("#invisible").click(function () {
    $(".xwing").fadeOut("slow");
});
