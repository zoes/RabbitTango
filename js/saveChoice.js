function saveColorScheme() {
$(document).ready(function (){
    var name=(document.getElementById("schemeID")).value;

    localStorage.setItem(name.concat("site_name"), localStorage.getItem("site_name"));
    localStorage.setItem(name.concat("header_color"), localStorage.getItem("header_color"));
    localStorage.setItem(name.concat("posts_color"), localStorage.getItem("posts_color"));
    localStorage.setItem(name.concat("tab_color"), localStorage.getItem("tab_color"));
    localStorage.setItem(name.concat("link_color"), localStorage.getItem("link_color"));
    localStorage.setItem(name.concat("mfont"), localStorage.getItem("mfont"));
    localStorage.setItem(name.concat("hfont"), localStorage.getItem("hfont"));
    console.log(localStorage.getItem("hfont"));
});
};
function restoreColorScheme() {
$(document).ready(function(){

    var name=(document.getElementById("restoreID")).value;

    var site_name = localStorage.getItem(name.concat("site_name"));
    $("header#page_header h1.new").hide();
    $("header#page_header h1.new").html(site_name);
    $("header#page_header h1.new").show();

    var hcolr = localStorage.getItem(name.concat("header_color"));
    console.log(hcolr);
    $("header#page_header").css("background-color",hcolr);
    $("footer#page_footer").css("background-color",hcolr);
    
    var pcolr = localStorage.getItem(name.concat("posts_color"));
    $("div#wrapper").css("background-color",pcolr);

    var bcolr = localStorage.getItem(name.concat("tab_color"));
    $("header#page_header nav ul li").css("background-color", bcolr);

    var tcolr = localStorage.getItem(name.concat("text_color"));
    $("body").css("color",tcolr);
    
    var lcolr = localStorage.getItem(name.concat("link_color"));
    $("a").css("color",lcolr);
    
    var mfont = localStorage.getItem(name.concat("mfont"));
    $("body").css("font-family",mfont);
    
    var hfont = localStorage.getItem(name.concat("hfont"));
    console.log(hfont);
    $("header#page_header").css("font-family",hfont);

    $(function(){
         var canvas = document.getElementById('logo');
         if (canvas.getContext){
         drawLogo(lcolr, canvas);
         }
     });


});
};
function clearColorSchemes() {
    $(document).ready(function(){
       localStorage.clear();
});
};

