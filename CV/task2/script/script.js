$(document).ready(function() {
    var ArrayId1 = ["#star_div1-one", "#star_div1-two", "#star_div1-three", "#star_div1-four", "#star_div1-five"];
    var ArrayId2 = ["#star_div2-one", "#star_div2-two", "#star_div2-three", "#star_div2-four", "#star_div2-five"];
    var ArrayId3 = ["#star_div3-one", "#star_div3-two", "#star_div3-three", "#star_div3-four", "#star_div3-five"];
    var ArrayId4 = ["#star_div4-one", "#star_div4-two", "#star_div4-three", "#star_div4-four", "#star_div4-five"];
    var ArrayId5 = ["#star_div5-one", "#star_div5-two", "#star_div5-three", "#star_div5-four", "#star_div5-five"];
    var ArrayId6 = ["#star_div6-one", "#star_div6-two", "#star_div6-three", "#star_div6-four", "#star_div6-five"];

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
    setStar(ArrayId4);
    setStar(ArrayId5);
    setStar(ArrayId6);
})