
//'为你打开'动画
function upfzAnimate() {
	var downSpeed1 = 0,timer2=null;
	clearInterval(timer2)
	timer2= setInterval(function() {
		downSpeed1 += 0.1;
		$('.upfz').css({'bottom':0.5 + downSpeed1 + '%'});
		if (downSpeed1>5) {
			downSpeed1=0;
		}
	}, 20)
}
//滑动箭头
function sliderDown() {
	var speedDown = 0.1,oScale=1;
	var downSpeed = 0;
	clearInterval(timer)
	timer= setInterval(function() {
		downSpeed += speedDown;
		oScale-=0.005;
		$('.jiantou').css({'bottom':3 + downSpeed + '%','transform':'scale('+oScale+')'});
		if (downSpeed>5) {
			downSpeed=0;oScale=1;
		}
	}, 20)
}
//音乐图标
function setMusic(){
	var bol=false;
	$('.music').on('touchstart',function(){
		if(bol){//如果打开就关闭
			$('.music').attr('src','img/pass2/musicstop.png');
			$('.music').removeClass('rotateIn infinite');
			$('#audio').attr('src','##');
		}else{//如果关闭就打开
			$('.music').attr('src','img/pass2/music.png');
			$('.music').addClass('rotateIn infinite');
			$('#audio').attr('src','Shiftone_0.74.mp3');
		}
		bol=!bol;
	})

}