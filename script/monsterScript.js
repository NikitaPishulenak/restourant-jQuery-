$(document).ready(function () {
    var headerClick=0,noseClick=0,eyesClick=0, mounthClick=0;
    lightnigt_one(11000);
    lightnigt_two(8000);
    lightnigt_tree(6000);

    $("#monsterHead").click(function () {
        if(headerClick<9){
            headerClick++;
        }
        else{
            headerClick=0;
        }

        console.log("Лоб= "+headerClick);
    });

    $("#monsterEyes").click(function () {
        if(eyesClick<9){
            eyesClick++;
        }
        else{
            eyesClick=0;
        }
        console.log("Глаза= "+headerClick);
    });

    $("#monsterNose").click(function () {
        if(noseClick<9){
            noseClick++;
        }
        else{
            noseClick=0;
        }
        console.log("Нос= "+headerClick);
    });

    $("#monsterMounth").click(function () {
        if(mounthClick<9){
            mounthClick++;
        }
        else{
            mounthClick=0;
        }
        console.log("Рот= "+headerClick);
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
