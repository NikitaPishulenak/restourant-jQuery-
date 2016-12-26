$(document).ready(function () {
    $("#btnVeg").click(function () {
        $("li.mashroom").addClass("vList");
        $("ul.meat").replaceWith("<li class='vegan'>В2</li>");
        $m=$("li.meat").detach();

        $("#btnNoVeg").click(function () {


            $(".hideText").after($m);
            $(".vegan").detach();
            $m="";

        });

    });

});
