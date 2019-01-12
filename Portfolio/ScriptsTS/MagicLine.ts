import $ from "jquery";

class MagicLine {
    // UL (menu) //
    public menu : HTMLUListElement;

    // Magic line LI //
    public magicLine : HTMLLIElement;

    // Url search variables //
    public url : string = window.location.href;
    public urlSplit : Array<string> = this.url.split('Home/', 2);
    public urlAction : string = this.urlSplit[1];

    // Pre appended MagicLine
    constructor(el : HTMLUListElement) {
        this.menu = el;
        this.magicLine = document.createElement("LI") as HTMLLIElement;
        this.magicLine.id = "magic-line";
    }

    // Append magicLine and do animation from active element to the "hover" object
    public MoveOnHover(action : string, menu : HTMLUListElement, ml: HTMLLIElement) {
        jQuery(function ($) {

                var $lel, $leftPos, $newWidth;

                menu.appendChild(ml);

                var $magicLine = $("#magic-line");
            
                var OriginL = $('['+ action +']').position().left+"px";

                $magicLine
                    .width($('['+ action + ']').width())
                    .css("left", $('['+ action + ']').position().left);
                    //.data("origLeft", OriginL)
                    //.data("origWidth", $magicLine.width());
            
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
                        //left: $magicLine.data("origLeft"),
                        //width: $magicLine.data("origWidth")
                        left: $('[class="magicLine active"]').position().left,
                        width: $('[class="magicLine active"]').width()
                    });
                });                
            });
    }

    // Adds css class (.active) to the a tag representing the current page
    public SetActive(action : string) {
        jQuery(function( $ ){
            $('['+ action +']').addClass('active');
        });
    }

    // On resize find current left and 
    public OnResize() {
        jQuery(function( $ ){
            $(window).resize(function(){
                var $magicLine = $("#magic-line");
        
                $magicLine
                .width($('['+ jQueryStr + ']').width())
                .css("left", $('['+ jQueryStr + ']').position().left);
              });
        });
    }
}

let menu: HTMLUListElement = document.getElementById("menu") as HTMLUListElement;
let ml: MagicLine = new MagicLine(menu);

// ?? Performance could maybe be a litte tighter somehow
let jQueryStr: string;

if (ml.urlAction !== null) {
    jQueryStr = 'href="/Home/' + ml.urlAction + '"';
    ml.SetActive(jQueryStr);
}

if (!ml.urlAction) {
    jQueryStr = 'href="/"';
    ml.SetActive(jQueryStr);
}

ml.MoveOnHover(jQueryStr, ml.menu, ml.magicLine);

ml.OnResize()


