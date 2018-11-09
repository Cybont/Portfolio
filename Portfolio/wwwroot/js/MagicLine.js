var MagicLine = /** @class */ (function () {
    function MagicLine(el) {
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
    MagicLine.prototype.MoveOnHover = function (el) {
        this.magicLine.style.width = el.style.width;
        this.magicLine.style.left = el.style.left;
        return;
    };
    MagicLine.prototype.SetActive = function (el) {
        el.className += ", active";
    };
    return MagicLine;
}());
var menu;
var ml;
window.onload = function () {
    menu = document.getElementById("menu");
    ml = new MagicLine(menu);
};
var magicline = document.getElementById("magic-line");
//function moveMagicLine(a: HTMLLinkElement): MouseEvent  {
//    magicline.style.left = a.style.left;
//    magicline.style.width = a.style.width;
//    return this;
//}
//const el: HTMLElement = document.getElementById("menu");
//let ML: MagicLine = new MagicLine(el);
//var lel, leftPos, newWidth;
//Makes a new li with magic line css style
//("#menu").appendChild("<li id='magic-line'></li>");
//var magicLine = ("#magic-line");
//Getting rid of !$page error on home/default site
//if (!$page) {
//    $page = "work-gallery";
//}
//    var OriginL = ("[href='?page=" + page + "']").position().left + "px";
//    magicLine
//        .width(("[href='?page=" + page + "']").width())
//        .css("left", ("[href='?page=" + page + "']").position().left)
//        .data("origLeft", OriginL)
//        .data("origWidth", magicLine.width());
//    ("#menu li").find("a").hover(function () {
//        lel = (this);
//        leftPos = lel.position().left;
//        newWidth = lel.parent().width();
//        magicLine.stop().animate({
//            left: leftPos,
//            width: newWidth
//        });
//    },
//        function () {
//            magicLine.stop().animate({
//                left: magicLine.data("origLeft"),
//                width: magicLine.data("origWidth")
//            });
//        });
//});
//# sourceMappingURL=MagicLine.js.map