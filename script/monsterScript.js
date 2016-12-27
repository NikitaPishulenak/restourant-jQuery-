$(document).ready(function () {
    var headerClick=0,noseClick=0,eyesClick=0, mounthClick=0;
    lightnigt_one(11000);
    lightnigt_two(8000);
    lightnigt_tree(6000);

    $("#monsterHead").click(function () {
        if(headerClick<9){
            headerClick++;
            $(this).animate({left: "-=367px"}, "5000");
        }
        else{
            headerClick=0;
            $(this).animate({left: "0px"}, "5000");
        }

        console.log("Лоб= "+headerClick);
    });

    $("#monsterEyes").click(function () {
        if(eyesClick<9){
            eyesClick++;
            $(this).animate({left: "-=367px"}, "5000");
        }
        else{
            eyesClick=0;
            $(this).animate({left: "0px"}, "5000");
        }
        console.log("Глаза= "+headerClick);
    });

    $("#monsterNose").click(function () {
        if(noseClick<9){
            noseClick++;
            $(this).animate({left: "-=367px"}, "5000");
        }
        else{
            noseClick=0;
            $(this).animate({left: "0px"}, "5000");
        }
        console.log("Нос= "+headerClick);
    });

    $("#monsterMounth").click(function () {
        if(mounthClick<9){
            mounthClick++;
            $(this).animate({left: "-=367px"}, "5000");
        }
        else{
            mounthClick=0;
            $(this).animate({left: "0px"}, "5000");
        }
        console.log("Рот= "+headerClick);
    });

    $("#picure").click(function () {
        $("#picure").animate({
            width: "800px",
            height: "600px",
            left:"-=500px"},
        "5000");

        $("#picure").click(function () {
            $(this).animate({
                width: "400px",
                height: "300px",
                left:"800px"}, "5000");
        });

    });

});

function lightnigt_one(t) {
    $("#container #lightning1").fadeIn(200).fadeOut(250);
    setTimeout("lightnigt_one()",t);
};

function lightnigt_two(t) {
    $("#container #lightning2").fadeIn(250).fadeOut(250);
    setTimeout("lightnigt_two()",t);
};
function lightnigt_tree(t) {
    $("#container #lightning3").fadeIn(450).fadeOut(250);
    setTimeout("lightnigt_tree()",t);
};
