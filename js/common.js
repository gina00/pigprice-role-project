$(document).ready(function () {
    $("#choosePig").click(function () {
        $("#chooseWindowBox").toggle();
        if ($("#chooseWindowBox").is(':visible')) {
            $("#chooseWindowBoxFootBtn").click(function () {
                $("#chooseWindowBox").hide();
            });
        }
        var list = $(".chooseWindowBox li");
        for (var i = 0; i < list.length; i++) {
            list[i].onclick = function () {
                this.className = "selected";
                $(this).siblings().removeClass("selected");
            }
        }
    });

});