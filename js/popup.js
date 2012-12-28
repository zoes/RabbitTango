$(function(){
        $(".popup").click(function(event){
            event.preventDefault();
            var href=$(this).attr("href");
            var width = $(this).attr("data-width");
            var height = $(this).attr("data-height");
            window.open(href, "popup", "height=" + height + ",width=" + width +"");
        });
});
