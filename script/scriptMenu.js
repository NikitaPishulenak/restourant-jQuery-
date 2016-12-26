$(document).ready(function () {
    $("#btnVeg").click(function () {
        $("ul.meat").replaceWith("<li class='vegan'>Вегитарианское блюдо</li>");
        $m=$(".meat").detach();

        $("#btnNoVeg").click(function () {
            $(".mashroom").before($m);

        });

    });

});
