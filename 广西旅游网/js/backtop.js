// JavaScript Document
$(document).ready(function(){
var show_delay;
var scroll_left=parseInt((document.body.offsetWidth-1000)/2)+1001; //1000为页面宽度
$(".scroll").click(function (){
document.documentElement.scrollTop=0;
document.body.scrollTop=0;
});
$(window).resize(function (){
scroll_left=parseInt((document.body.offsetWidth-1000)/2)+1001;
$(".scroll").css("left",scroll_left);
});
reshow(scroll_left,show_delay);
});
function reshow(marign_l,show_d) {
$(".scroll").css("left",marign_l);
if((document.documentElement.scrollTop+document.body.scrollTop)!=0)
{
$(".scroll").css("display","block");
}
else
{
$(".scroll").css("display","none");}
if(show_d) window.clearTimeout(show_d);
show_d=setTimeout("reshow()",500);
} 