var MagicLine = /** @class */ (function () {
    function MagicLine(element) {
        this.url = window.location.search.substring(1);
        this.urlSplit = this.url.split('/', 2);
        this.urlAction = this.urlSplit[1];
        this.magicLine = document.createElement("LI");
        this.magicLine.id = "magic-line";
        this.element.appendChild(this.magicLine);
    }
    MagicLine.prototype.MoveMagicLine = function (index) {
    };
    return MagicLine;
}());
window.onload = function () {
    var el = document.getElementById('menu');
    var magicLine = new MagicLine(el);
    magicLine.MoveMagicLine(magicLine.urlAction);
};
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