function pChoice() {
$(document).ready(function (){
    var x=document.getElementById("site_name");
    $("header#page_header h1", window.opener.document).hide();
    $("header#page_header h1.new", window.opener.document).html(x.value);
    $("header#page_header h1.new", window.opener.document).show();
    localStorage.setItem("site_name", x.value);

    var x=document.getElementById("header_color");
    var hcolr = "#".concat(x.value);
    $("header#page_header",window.opener.document).css("background-color",hcolr);
    $("footer#page_footer", window.opener.document).css("background-color",hcolr);
    localStorage.setItem("header_color", hcolr);
    
    var x=document.getElementById("gutter_color");
    var gcolr = "#".concat(x.value);
    $("body", window.opener.document).css("background-color",gcolr);
    localStorage.setItem("gutter_color", gcolr);

    var x=document.getElementById("posts_color");
    var pcolr = "#".concat(x.value);
    $("div#wrapper", window.opener.document).css("background-color",pcolr);
    localStorage.setItem("posts_color", pcolr);

    var x=document.getElementById("tab_color");
    var bcolr = "#".concat(x.value);
    $("header#page_header nav ul li", window.opener.document).css("background-color", bcolr);
    localStorage.setItem("tab_color", bcolr);

    var x=document.getElementById("text_color");
    var tcolr = "#".concat(x.value);
    $("body", window.opener.document).css("color",tcolr);
    localStorage.setItem("text_color", tcolr);
    
    var x=document.getElementById("link_color");
    var lcolr = "#".concat(x.value);
    $("a", window.opener.document).css("color",lcolr);
    localStorage.setItem("link_color", lcolr);
    
    var x=document.getElementById("mfont");
    $("body", window.opener.document).css("font-family",x.value);
    localStorage.setItem("mfont", x.value);
    
    var x=document.getElementById("hfont");
    $("header#page_header", window.opener.document).css("font-family",x.value);
    localStorage.setItem("hfont", x.value);

     $(function(){
         var canvas = window.opener.document.getElementById('logo');
         if (canvas.getContext){
         drawLogo(lcolr, canvas);
         }
     });
});
};
