import $ from 'jquery';
class MagicLine {
    constructor(el) {
        // Url search variables //
        this.url = window.location.href;
        this.urlSplit = this.url.split('Home/', 2);
        this.urlAction = this.urlSplit[1];
        this.menu = el;
        this.active = document.getElementsByClassName("active").item(0);
        this.magicLine = document.createElement("LI");
        this.magicLine.id = "magic-line";
        this.menu.appendChild(this.magicLine);
    }
    //public MoveOnHover(listElement: HTMLLIElement) {}
    MoveOnHover(action) {
        jQuery(function ($) {
            var $lel, $leftPos, $newWidth;
            var $magicLine = $("#magic-line");
            var $OriginL = $('[' + action + ']').position().left + "px";
            $magicLine
                .width($('[' + action + ']').width())
                .css("left", $('[' + action + ']').position().left)
                .data("origLeft", $OriginL)
                .data("origWidth", $magicLine.width());
            $("#menu li").find("a").hover(function () {
                $lel = $(this);
                $leftPos = $lel.position().left;
                $newWidth = $lel.parent().width();
                $magicLine.stop().animate({
                    left: $leftPos,
                    width: $newWidth
                });
            }, function () {
                $magicLine.stop().animate({
                    left: $magicLine.data("origLeft"),
                    width: $magicLine.data("origWidth")
                });
            });
        });
    }
    SetActive(el) {
        el.className += ", active";
    }
}
let menu = document.getElementById("menu");
let ml = new MagicLine(menu);
let magicline = document.getElementById("magic-line");
// Fix performance, prop loading twice when clicking on something other than homepage(Index) because of the fact that for a brief moment "ml.urlAction" is null
if (!ml.urlAction) {
    ml.MoveOnHover('href="/"');
}
else {
    ml.MoveOnHover('href="/Home/' + ml.urlAction + '"');
}
$(document).ready(function () {
    if (ml.urlAction != null) {
        $("[href='Home/" + ml.urlAction + "']").addClass('active');
    }
});
//# sourceMappingURL=MagicLine.js.map