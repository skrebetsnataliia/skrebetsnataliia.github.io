![photo](img/screenshot-2.jpg)

###John Smith<

UI/UX Designer & Developer

*{.far .fa-envelope}*
[jonh@smith.com](#)

*{.fas .fa-phone}*
[(123)456-7890](#)

*{.fas .fa-link}*
[http://joihnsmith.com](http://joihnsmith.com)

*{.fas .fa-map-marker}*
[1234 Main Street Cityname, ST 12345 United State](#)
                   
Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium, eligendi a modi reprehenderit, at possimus nam voluptatibus porro esse necessitatibus iure! Deleniti eaque labore minus obcaecati aperiam magnam voluptatum.

####Education
                
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non, officia ratione saepe praesentium atque autem tempora quam eveniet nisi!

#####Community College

Lorem ipsum dolor sit.
                
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe impedit laborum veritatis alias, magni explicabo sequi quos voluptate quam!

#####University Name

Lorem ipsum dolor sit amet consectetur.
                
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dignissimos recusandae, voluptates officiis nisi dolor eaque molestias ab praesentium beatae, quo ea aperiam ex provident. Adipisci praesentium laborum nulla illo.

####Experince

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nisi quod architecto.
                
#####Bussines & Co.

Intern & Entry Leavel Designer
                
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorum quibusdam, sapiente inventore corrupti sequi sed fugit? Non nobis dolor aperiam error, nesciunt reiciendis unde.

#####Design Inc.

Mid Leavel-Designer
                
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur sapiente nam animi id alias magni iure, cum sint ut, deleniti quae dolore, voluptatibus corrupti provident in magnam maiores molestias!
                
#####Self Employed LLC

Bussines Owner, Designer&Development

Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius, modi expedita incidunt pariatur praesentium est, labore ut blanditiis cum error asperiores, molestias perferendis ex amet quibusdam reiciendis delectus illum ratione excepturi culpa harum!

#####Skils
            
####Software
            
#####Photoshop

*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
         
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ea porro ducimus amet, libero maiores aliquid error et, qui eius quos nulla natus.

#####Sketch

*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star-half}*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ea porro ducimus amet, libero maiores aliquid error et, qui eius quos nulla natus.

#####Final cut Pro

*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star-half}*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ea porro ducimus amet, libero maiores aliquid error et, qui eius quos nulla natus.

####Programming Languages

#####HTML/CSS

*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ea porro ducimus amet, libero maiores aliquid error et, qui eius quos nulla natus.

#####Php

*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star-half"}*  

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ea porro ducimus amet, libero maiores aliquid error et, qui eius quos nulla natus.

#####JavaScript

*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star}*
*{.fas .fa-star-half"}* 

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore ea porro ducimus amet, libero maiores aliquid error et, qui eius quos nulla natus.

```javascript
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
```