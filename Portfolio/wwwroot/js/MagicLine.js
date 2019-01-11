class MagicLine {
    // Pre appended MagicLine
    constructor(el) {
        // Url search variables //
        this.url = window.location.href;
        this.urlSplit = this.url.split('Home/', 2);
        this.urlAction = this.urlSplit[1];
        this.menu = el;
        this.magicLine = document.createElement("LI");
        this.magicLine.id = "magic-line";
    }
    // Append magicLine and do animation from active element to the "hover" object
    MoveOnHover(action, menu, ml) {
        jQuery(function ($) {
            var $lel, $leftPos, $newWidth;
            menu.appendChild(ml);
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
    SetActive(action) {
        jQuery(function ($) {
            $('[' + action + ']').addClass('active');
        });
    }
}
let menu = document.getElementById("menu");
let ml = new MagicLine(menu);
// ?? Performance could maybe be a litte tighter somehow
let jQueryStr;
if (ml.urlAction !== null) {
    jQueryStr = 'href="/Home/' + ml.urlAction + '"';
    ml.SetActive(jQueryStr);
}
if (!ml.urlAction) {
    jQueryStr = 'href="/"';
    ml.SetActive(jQueryStr);
}
ml.MoveOnHover(jQueryStr, ml.menu, ml.magicLine);
//# sourceMappingURL=MagicLine.js.map