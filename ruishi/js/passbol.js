var bol1=false,bol2=false,bol3=false,bol4=false,bol5=false,bol6=false,bol7=false,bol8=false,bol9=false,bol10=false,bol11=false,bol12=false,bol13=false,bol14=false,bol15=false;
//第二页
$('#jh1').on('touchstart',function(){
	bol1=true;
	$('#cha2').css('display','none');
	if(bol2){$('#di3').css('display','block');}
	if(bol3){$('#la2').css('display','block');}
})
$('#jh2').on('touchstart',function(){
	bol2=true;
	if(bol1){$('#cha2').css('display','block');}
	if(bol3){$('#la2').css('display','block');}
	$('#di3').css('display','none');

})
$('#jh3').on('touchstart',function(){
	bol3=true;
	if(bol1){$('#cha2').css('display','block');}
	if(bol2){$('#di3').css('display','block');}
	$('#la2').css('display','none');
})

//第三页
$('#jh4').on('touchstart',function(){
	bol4=true;
	$('#lan3').css('display','none');
	if(bol5){$('#lau3').css('display','block');}
	if(bol6){$('#sis3').css('display','block');}
})
$('#jh5').on('touchstart',function(){
	bol5=true;
	if(bol4){$('#lan3').css('display','block');}
	if(bol6){$('#sis3').css('display','block');}
	$('#lau3').css('display','none');
})
$('#jh6').on('touchstart',function(){
	bol6=true;
	if(bol4){$('#lan3').css('display','block');}
	if(bol5){$('#lau3').css('display','block');}
	$('#sis3').css('display','none');
})

//第四页
$('#jh7').on('touchstart',function(){
	bol7=true;
	if(bol8){$('#or3').css('display','block');}
	$('#av3').css('display','none');
})
$('#jh8').on('touchstart',function(){
	bol8=true;
	if(bol7){$('#av3').css('display','block');}
	$('#or3').css('display','none');
})

//第五页
$('#jh9').on('touchstart',function(){
	bol9=true;
	if(bol10){$('#fre4').css('display','block');}
	$('#bio4').css('display','none');
	$('#flash1').removeClass('fadeIn infinite')//清除背景闪烁效果
})
$('#jh10').on('touchstart',function(){
	bol10=true;
	if(bol9){$('#bio4').css('display','block');}
	$('#fre4').css('display','none');
	$('#flash1').removeClass('fadeIn infinite')
})

// 第六页
$('#jh11').on('touchstart',function(){
	bol11=true;
	$('.bo4').css('display','none');
	if(bol12){$('.ke4').css('display','block');}
	if(bol13){$('.lo4').css('display','block');}
})
$('#jh12').on('touchstart',function(){
	bol12=true;
	if(bol11){$('.bo4').css('display','block');}
	if(bol13){$('.lo4').css('display','block');}
	$('.ke4').css('display','none');
})
$('#jh13').on('touchstart',function(){
	bol13=true;
	if(bol11){$('.bo4').css('display','block');}
	if(bol12){$('.ke4').css('display','block');}
	$('.lo4').css('display','none');
})

//第七页
$('#jh14').on('touchstart',function(){
	bol14=true;
	if(bol15){$('.cl4').css('display','block');}
	$('.ph4').css('display','none');
	$('#ph1').css('zIndex',5);
	$('#ph1').addClass('animated fadeInRight')
})
$('#jh15').on('touchstart',function(){
	bol15=true;
	if(bol14){$('.ph4').css('display','block');}
	$('.cl4').css('display','none');
		$('#cl1').css('zIndex',5)
	$('#cl1').addClass('animated fadeInLeft')
})