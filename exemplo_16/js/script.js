$(document).ready(function main(){
    $(".outro").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click:function(){
            $(this).css("background-color", "yellow");
        }
    });
    $("#btn1").click(function(){
        $(".texto").append("<b>Appended text</b>.");

    })
    $("#btn2").click(function(){
        $("ul").append("<li>Appended item</li>")
    })
});


