// JavaScript Document
$(".div1 li").hover(function(){
	$(this).siblings().removeClass("current");
	$(this).addClass("current");
},function(){
});