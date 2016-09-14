// 第二页手指闪动函数
var timer3=null,i1=2;
function flashHand(){
	timer3=setInterval(function(){
		i1--;
		if(i1<=0){i1=2;}
		$('#hand2').attr('src','img/pass2/hand'+i1+'.png');
	},500)
}

// 加号闪动函数
function jiaFlash(){
	var timer4=null,i2=1;
	timer4=setInterval(function(){
		i2++;
		if(i2>=3){i2=1;}
		$('.plus').attr('src','img/pass2/jiahao'+i2+'.png');
	},400)
}

function clickFn(jh1,opBg,jh2,showHua,showDes1,hideDes1,hideDes2,jh3,whiteDes1,whiteDes2,whiteDes3){
	$(jh1).on('touchstart',function(){
		$(opBg).css('display','block');
		$(jh1).attr('src','img/pass2/jianhao.png');
		$(jh1).removeClass('fadeIn infinite');
		$(showHua).css('display','block');
		$(showDes1).css('display','block');
		$(hideDes1).css('display','none');
		$(hideDes2).css('display','none');
		$(jh2).attr('src','img/pass2/jiahao.png');
		$(jh3).attr('src','img/pass2/jiahao.png');
	})
}
