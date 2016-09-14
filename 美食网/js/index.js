// JavaScript Document
$(document).ready(function(){
 $(".ms_ph_c").mouseover(function(){
   $(".ms_ph_c").css("background-image","url(./images/ms_hot.jpg)");
   $(".ms_ph_h").css("background-image","url(./images/ms_click.jpg)");
   $(".ms_ph_c p").css("color","#fff");
   $(".ms_ph_h p").css("color","#666");
   $(".con2_y_d2").show(); 
 })
$(".ms_ph_h").mouseover(function(){
   $(".ms_ph_h").css("background-image","url(./images/ms_hot.jpg)");
   $(".ms_ph_c").css("background-image","url(./images/ms_click.jpg)");
   $(".ms_ph_h p").css("color","#fff");
   $(".ms_ph_c p").css("color","#666");
   $(".con2_y_d2").hide();
   })

$(".ms_ph_c1").mouseover(function(){
   $(".ms_ph_c1").css("background-image","url(./images/ms_hot.jpg)");
   $(".ms_ph_h1").css("background-image","url(./images/ms_click.jpg)");
   $(".ms_ph_c1 p").css("color","#fff");
   $(".ms_ph_h1 p").css("color","#666");
   $(".con2_y_d4").show(); 
 })
$(".ms_ph_h1").mouseover(function(){
   $(".ms_ph_h1").css("background-image","url(./images/ms_hot.jpg)");
   $(".ms_ph_c1").css("background-image","url(./images/ms_click.jpg)");
   $(".ms_ph_h1 p").css("color","#fff");
   $(".ms_ph_c1 p").css("color","#666");
   $(".con2_y_d4").hide();
   })
$("#sptj_b").mouseover(function(){
  $("#sptj_r").css("background-image","url(./images/sptj_b.gif)");
  $("#sptj_b").css("background-image","url(./images/sptj_r.gif)");
  $("#sptj_con1").hide();
  }) 
 $("#sptj_r").mouseover(function(){
  $("#sptj_b").css("background-image","url(./images/sptj_b.gif)");
  $("#sptj_r").css("background-image","url(./images/sptj_r.gif)");
  $("#sptj_con1").show();
  }) 
})

