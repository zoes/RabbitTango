function processColorChoice() {
$(document).ready(function (){

    var x=document.getElementById("site_name");
    $("header#page_header h1").hide();
    $("header#page_header h1.new").html(x.value);
    $("header#page_header h1.new").show();

    var x=document.getElementById("tab_color");
    var bcolr = "#".concat(x.value);
    $("header#page_header nav ul li").css("background-color", bcolr);

    var x=document.getElementById("header_color");
    var hcolr = "#".concat(x.value);
    $("header#page_header").css("background-color",hcolr);
    $("footer#page_footer").css("background-color",hcolr);
    
    var x=document.getElementById("posts_color");
    var pcolr = "#".concat(x.value);
    $("div#wrapper").css("background-color",pcolr);
    
    var x=document.getElementById("text_color");
    var tcolr = "#".concat(x.value);
    $("body").css("color",tcolr);
    
    var x=document.getElementById("link_color");
    var lcolr = "#".concat(x.value);
    $("a").css("color",lcolr);
    
    var x=document.getElementById("mfont");
    $("body").css("font-family",x.value);
    
    var x=document.getElementById("hfont");
    $("header#page_header").css("font-family",x.value);

    $(function(){
       var canvas = document.getElementById('logo');
       if (canvas.getContext){
         drawLogo(lcolr);
       }
    });
});
};

function saveColorChoice() {
$(document).ready(function (){
    var x=document.getElementById("site_name");
    localStorage.setItem("site_name", x.value);
});
};
