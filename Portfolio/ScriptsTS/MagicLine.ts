import $ from 'jquery';
class MagicLine {
    // UL (menu) //
    public menu : HTMLUListElement;

    // Magic line LI //
    public magicLine : HTMLElement;

    // LI Active //
    public active : HTMLLIElement;

    // Url search variables //
    public url : string = window.location.href;
    public urlSplit : Array<string> = this.url.split('Home/', 2);
    public urlAction : string = this.urlSplit[1];

    constructor(el : HTMLUListElement) {
        this.menu = el;
        this.active = <HTMLLIElement> document.getElementsByClassName("active").item(0);
        this.magicLine = document.createElement("LI");
        this.magicLine.id = "magic-line";
        this.menu.appendChild(this.magicLine);
    }
    //public MoveOnHover(listElement: HTMLLIElement) {}
    public MoveOnHover(action : string) {
            jQuery(function( $ ){
                var $lel, $leftPos, $newWidth;
            
                var $magicLine = $("#magic-line");
            
                var $OriginL = $('['+ action +']').position().left+"px";
            
                $magicLine
                    .width($('['+ action + ']').width())
                    .css("left", $('['+ action + ']').position().left)
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
                },
                function () {
                    $magicLine.stop().animate({
                        left: $magicLine.data("origLeft"),
                        width: $magicLine.data("origWidth")
                    });
                });
            });
    }

    // ?? Find a way to integrate window load here somehow to complete object oriented methodology
    public SetActive(el: HTMLElement) {
        el.className += ", active";
    }
}

let menu: HTMLUListElement = document.getElementById("menu") as HTMLUListElement;
let ml : MagicLine = new MagicLine(menu);

let magicline = document.getElementById("magic-line") as HTMLLIElement;

// Fix performance, prop loading twice when clicking on something other than homepage(Index) because of the fact that for a brief moment "ml.urlAction" is null

if (!ml.urlAction) {
    ml.MoveOnHover('href="/"');
}
else {
    ml.MoveOnHover('href="/Home/' + ml.urlAction +'"');
}

// ?? TS doesn't understand the "?" identifier here for some reason, look above for inspiration

// $(document).ready(function() {
//     if (ml.urlAction != null) {
//         $("[href='Home/" + ml.urlAction  + "']").addClass('active');
//     }
// });


