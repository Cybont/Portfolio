var menu;
var ml;
window.onload = function () {
    menu = document.getElementById("menu");
    ml = new MagicLine(menu);
};
var MagicLine = /** @class */ (function () {
    // Url search variables //
    //public url : string = window.location.search;
    //public urlSplit : Array<string> = this.url.split('/', 2);
    //public urlAction : string = this.urlSplit[1];
    function MagicLine(element) {
        this.element = element;
        this.active = document.getElementsByClassName("active").item(0);
        this.magicLine = document.createElement("LI");
        this.magicLine.id = "magic-line";
        this.element.appendChild(this.magicLine);
    }
    MagicLine.prototype.MoveOnHover = function (listElement) {
    };
    MagicLine.prototype.MoveActive = function () {
    };
    return MagicLine;
}());
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