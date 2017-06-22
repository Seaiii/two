/**
 * Created by Administrator on 2017/6/3.
 */
var page=1;
var d=$('.li').width();
var len=$(".box1").find('li').length;
$(".index-banner-right").click(function(){
    $(".box-ul").each(function(){
        var y = $(this).children();
        for($i=0;$i< y.length;$i++){
            if(!$(".box1").is(":animated")) {
                if ($i<2) {
                    $(".box1").animate({left: "-=" + d}, "slow");

                }
            }
        }
    });
    });
$(".index-banner-left").click(function(){
    $(".box-ul").each(function(){
        var y = $(this).children();
        for($i=0;$i< y.length;$i++){
    if(!$(".box1").is(":animated")) {
        if($i>0){
            $(".box1").animate({left:"+="+d},"slow");
        }
    }}});
});