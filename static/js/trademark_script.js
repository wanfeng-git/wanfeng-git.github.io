;"use strict";

let tms = function (el){
    el.html(function(_, txt) {
        return txt.replace(/(®)/, "<sup>®</sup>");
    });
}

$(window).on("load", function(){
    tms($(".h0"));
    tms($("h1"));
    tms($("h2"));
    tms($("h3"));
    tms($("h4"));
    tms($(".h4"));
    tms($("p"));
});