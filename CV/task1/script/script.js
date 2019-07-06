$(document).ready(function() {
    var ArrayId1 = ["#div1_star-one", "#div1_star-two", "#div1_star-three", "#div1_star-four", "#div1_star-five"];
    var ArrayId2 = ["#div2_star-one", "#div2_star-two", "#div2_star-three", "#div2_star-four", "#div2_star-five"];
    var ArrayId3 = ["#div3_star-one", "#div3_star-two", "#div3_star-three", "#div3_star-four", "#div3_star-five"];

    function setStar(arr) {
        $(arr[0]).on(("mouseenter"), function() {
            if ($(arr[0]).hasClass("Bg_orange") == true) {
                for (var i = 0; i < 5; i++) {
                    $(arr[i]).removeClass("Bg_orange");
                }
            } else {
                $(arr[0]).addClass("Bg_orange");

            }
        });
        $(arr[1]).on("mouseenter", function() {
            if ($(arr[1]).hasClass("Bg_orange") == true) {
                for (var i = 1; i < 5; i++) {
                    $(arr[i]).removeClass("Bg_orange");
                }
            } else {
                for (var i = 0; i < 2; i++) {
                    $(arr[i]).addClass("Bg_orange");
                }

            }
        });
        $(arr[2]).on("mouseenter", function() {
            if ($(arr[2]).hasClass("Bg_orange") == true) {
                for (var i = 2; i < 5; i++) {
                    $(arr[i]).removeClass("Bg_orange");
                }
            } else {
                for (var i = 0; i < 3; i++) {
                    $(arr[i]).addClass("Bg_orange");
                }
            }
        });
        $(arr[3]).on("mouseenter", function() {
            if ($(arr[3]).hasClass("Bg_orange") == true) {
                for (var i = 3; i < 5; i++) {
                    $(arr[i]).removeClass("Bg_orange");
                }
            } else {
                for (var i = 0; i < 4; i++) {
                    $(arr[i]).addClass("Bg_orange");
                }
            }
        });
        $(arr[4]).on("mouseenter", function() {
            if ($(arr[4]).hasClass("Bg_orange") == true) {
                for (var i = 4; i < 5; i++) {
                    $(arr[i]).removeClass("Bg_orange");
                }
            } else {
                for (var i = 0; i < 5; i++) {
                    $(arr[i]).addClass("Bg_orange");
                }
            }
        });
    }
    setStar(ArrayId1);
    setStar(ArrayId2);
    setStar(ArrayId3);
})