$(document).ready(function(){     
    //Dès qu'on clique sur #b1, on applique hide() au titre
    $("#afpa-description").click(function(){
        $("#afp").toggle("1500");
    });

    $("#manu-description").click(function(){
        $("#mn").toggle("1500");
    });

});