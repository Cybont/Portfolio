class MagicLine {
    // UL (menu) //
    public menu : HTMLElement;

    // Magic line LI //
    public magicLine : HTMLElement;

    // LI Active //
    public active : HTMLLIElement;

    // Url search variables //
    public url : string = window.location.href;
    public urlSplit : Array<string> = this.url.split('Home/', 2);
    public urlAction : string = this.urlSplit[1];

    constructor(el : HTMLElement) {
        this.menu = el;
        this.active = <HTMLLIElement> document.getElementsByClassName("active").item(0);
        this.magicLine = document.createElement("LI");
        this.magicLine.id = "magic-line";
        this.menu.appendChild(this.magicLine);
    }
    //public MoveOnHover(listElement: HTMLLIElement) {}
    public MoveOnHover(el: HTMLElement): MouseEvent {
        this.magicLine.style.width = el.style.width;
        this.magicLine.style.left = el.style.left;
        return;
    }

    public SetActive(el: HTMLElement) {
        el.className += ", active";
    }
}

let menu: HTMLElement;
let ml: MagicLine;

window.onload = () => {
    menu = document.getElementById("menu");
    ml = new MagicLine(menu);
}

//let menuListElements: NodeListOf<Element> = document.getElementsByClassName("magicLine");

let magicline = document.getElementById("magic-line");
//magicline.style.width = ml.active.style.width;
//magicline.style.left = ml.active.style.left;

(menu.querySelector("a").onmouseover(ml.MoveOnHover(this)));









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