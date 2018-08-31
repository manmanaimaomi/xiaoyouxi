var isTouch = "ontouchend" in document ? true : false,
	evStart = isTouch ? 'touchstart' : 'mousedown',
	evMove = isTouch ? 'touchmove' : 'mousemove',
	evEnd = isTouch ? 'touchend' : 'mouseup';

var urlhead ;

var myVideo=document.getElementById('myVedio');

var timer=null,timer1=null,page_num=0,page1_biao,page_time;
$('<img src="img/loading.png" alt="" />').load(function(){
    loadImg(0);
})
function loadImg(n){
    changeScene();
    if(n==imgArr.length){
        $('.loading p').html("100%");
        $('.loading').fadeOut(100, function(){
            windowLoad();
        });
    } else {
        $('<img src="'+imgArr[n]+'" alt="" />').load(function(){
            $('.loading p').html(parseInt(n/imgArr.length*100)+"%");
            loadImg(n+1);
        });
    }
}

function windowLoad(){
	weixin(myurl);
	changeScene();
	$('.got_ifo').css({'font-size': '50px'})
	pageAni();	
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	$('.nav li').eq(0).find('img').attr({'src':'o'+src[0]}).css({'width':'101%','right':'0','margin-top':'-2%'})
}
window.onresize = function(){
    changeScene();
	clearInterval(timer);
	clearTimeout(timer1);
    if(page_num==1){
		page2_rotate();
    }
    personal_css_init()
    clearInterval(m);
	clearTimeout(n);
	var inner_h=$('#inner').height()/2;
	var outer_h=$('#outer').height();
	bi=inner_h/outer_h;
	if(page_num==2){
		m=setInterval(run,10);
	}
	if(page_num==4){
		page5_calculate(page5_a_bar,page5_a_word)
	}
	if(page_num==7){
		clearInterval(big_pic_time);
		big_pic();
	}
	var list_t=$('.prize_head').height();
	var prize_h=$('.personal_ban').height()*0.3;
	$('.personal_prize').height(prize_h)
	var list_h=prize_h*0.98-$('.prize_head').height();
    $('.prize_list').css({'top':list_t,'height':list_h})
    prize_scroll();
}
function pageAni(){
	changeScene();
	page1_biao=0;
	$('.logo').fadeIn(800);
	$('.menu').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);

	$('.door').fadeIn();
	$('.light').delay(100).fadeIn();
	$('.kenan').addClass("kenan_delay back");
	$('.btn').fadeIn(800);
	$('.page1_share_btn').fadeIn(800);
	$('.page1_share_word1').delay(1800).fadeIn().delay(800).fadeOut();
	$('.suger1').addClass("animate5");
	$('.suger2').addClass("animate6");
	$('.suger3').addClass("animate7");
	$('.btn1').delay(1200).fadeIn();
}
// page2动画
function pageAni2(){ 
	changeScene();
	page1_biao=1;
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);

	$('.page2_bc1').removeClass('kenan_delay').addClass("animate_bc1");
	$('.page2_bc2').removeClass('kenan_delay').addClass("animate_bc2");
	$('.page2_bc3').removeClass('kenan_delay').addClass("animate_bc1");
	$('.page2_title').removeClass('kenan_delay').addClass("animatepage2_3");
	$('.lvjing2').removeClass('kenan_delay').addClass("lv_delay back_lv");
	$('.page2_word').delay(1900).fadeIn();
	$('.internetke').delay(2000).fadeIn(1000);
	setTimeout(page2_rotate,2200)
}
// page3动画
var bi;
function pageAni3(){
	page1_biao=2;
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);
	// page3动画
	$('.page3_bc1').removeClass('kenan_delay').addClass("animate_bc3");
	$('.page3_bc2').removeClass('kenan_delay').addClass("animate_bc4");
	$('.page3_bc3').removeClass('kenan_delay').addClass("animate_bc3");
	$('.page3_title').removeClass('kenan_delay').addClass("animatepage2_3");
	$('.lvjing3').removeClass('kenan_delay').addClass("lv_delay back_lv");
	$('.page3_prize_list').removeClass('kenan_delay').addClass('pu_delay back');
	$('.page3_conan').removeClass('kenan_delay').addClass('pu_delay back');
	$('.turnplate_box').delay(800).fadeIn(800);
	prize_list();

}
$('#btn-20').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-56']);
	// if(user_state){
		// console.log('抽奖一次')
		prize_zige();
	/*}else{
		alert('请先登录')
	}*/
})
// page4动画 tvc
function pageAni4(){
	changeScene();
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);
	page1_biao=3;
	myVideo.play();
}
// page5动画 棒棒糖
function pageAni5(){ 
	changeScene();
	page1_biao=4;
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);

	$('.page5_bc1').removeClass('kenan_delay').addClass("animate_bc1");
	$('.page5_bc2').removeClass('kenan_delay').addClass("animate_bc2");
	$('.page5_bc3').removeClass('kenan_delay').addClass("animate_bc1");

	$('.page5_bao').addClass("animatepage5_3");
	$('.lvjing5').removeClass('kenan_delay').addClass("lv_delay back_lv");
	setTimeout(big_pic,1000)
}
// page6 游戏动画
function pageAni6(){ 
	changeScene();
	page1_biao=5;
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);
	$('.page6_bc1').addClass("animate_bc1");
	$('.page6_bc2').addClass("animate_bc2");
	$('.page6_bc3').addClass("animate_bc1");
	$('.page6_ban').delay(800).fadeIn();
	$('.page6_btn').fadeIn();
	$('.page6_conan').addClass('pu_delay1 back').removeClass("kenan_delay");
	$('.page6_word').addClass("animatepage2_1");
}
// rule动画
function pageAniRule(){
	changeScene();
	page1_biao=6;
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);

   
	$('.page_rule_bc1').removeClass('kenan_delay').addClass("animate_bc1");
	$('.page_rule_bc2').removeClass('kenan_delay').addClass("animate_bc2");
	$('.rule_ban').removeClass('kenan_delay').addClass("animatepage5_3");
	$('.lvjing_rule').removeClass('kenan_delay').addClass("lv_delay back_lv");
	var rule_ban_h=$('.rule_ban_pic').height();
    $('.rule_tab').css({'height':rule_ban_h*0.7})
	rule_calculate( a_bar,a_word) 
}
// personal动画
function pageAniPersonal(){
	changeScene();
	page1_biao=7;
	$('.menu').fadeIn(800);
	$('.logo').fadeIn(800);
	$('.logo_kenan').fadeIn(800);
	$('.logo_new').fadeIn(800);

	$('.page8_bc1').removeClass('kenan_delay').addClass("animate_bc3");
	$('.page8_bc2').removeClass('kenan_delay').addClass("animate_bc4");
	$('.page8_bc3').removeClass('kenan_delay').addClass("animate_bc3");
	$('.personal_out').addClass("animatepage5_2");
	$('.lvjing_personal').removeClass('kenan_delay').addClass("lv_delay back_lv");
	var list_t=$('.prize_head').height();
	var prize_h=$('.personal_ban').height()*0.3;
	$('.personal_prize').height(prize_h)
	var list_h=prize_h*0.98-$('.prize_head').height();
    $('.prize_list').css({'top':list_t,'height':list_h})
    prize_scroll();
	my_prize();
}
function pageUnAni(){
	clearInterval(m);
	clearTimeout(n);
	myVideo.pause();
	 myVideo.currentTime=0;
	// $('.logo_new').fadeOut();
	$('.door').fadeOut();
	$('.light').fadeOut();
	$('.kenan').removeClass("back kenan_delay");
	$('.suger1').addClass('kenan_delay').removeClass("animate5");
	$('.suger2').addClass('kenan_delay').removeClass("animate6");
	$('.suger3').addClass('kenan_delay').removeClass("animate7");
	$('.btn').fadeOut();
	$('.page1_share_btn').fadeOut();
	$('.page1_logo_kenan').fadeOut();
	$('.btn1').fadeOut();
	// page2动画
	$('.page2_bc1').addClass('kenan_delay').removeClass("animate_bc1");
	$('.page2_bc2').addClass('kenan_delay').removeClass("animate_bc2");
	$('.page2_bc3').addClass('kenan_delay').removeClass("animate_bc1");
	$('.page2_title').addClass('kenan_delay').removeClass("animatepage2_3");
	$('.lvjing2').addClass('kenan_delay').removeClass("lv_delay back_lv");
	$('.page2_logo_kenan').fadeOut();
	$('.page2_word').fadeOut();
	$('.internetke').fadeOut();
	// page3动画
	$('.page3_tan').fadeOut();
	$('.page3_bc1').addClass('kenan_delay').removeClass("animate_bc3");
	$('.page3_bc2').addClass('kenan_delay').removeClass("animate_bc4");
	$('.page3_bc3').addClass('kenan_delay').removeClass("animate_bc3");
	$('.page3_title').addClass('kenan_delay').removeClass("animate3");
	$('.page3_conan').addClass('kenan_delay').removeClass('pu_delay back');
	$('.lvjing3').addClass('kenan_delay').removeClass("lv_delay back_lv");
	$('.page3_prize_list').addClass('kenan_delay').removeClass('pu_delay back');
	$('.turnplate_box').fadeOut();
	// page4动画 tvc

	// page5动画 棒棒糖
	$('.page5_bc1').addClass('kenan_delay').removeClass("animate_bc1");
	$('.page5_bc2').addClass('kenan_delay').removeClass("animate_bc2");
	$('.page5_bc3').addClass('kenan_delay').removeClass("animate_bc1");
	$('.page5_bao').removeClass("animatepage5_3");
	$('.lvjing5').addClass('kenan_delay').removeClass("lv_delay back_lv");
	clearInterval(big_pic_time);
	// page6动画
	cishu=0;
	r2=0;
	clearInterval(game_timer);
	clearTimeout(changPeo_time);
	clearTimeout(up_time);
	$('.page6_bc1').addClass('kenan_delay').removeClass("animate_bc1");
	$('.page6_bc2').addClass('kenan_delay').removeClass("animate_bc2");
	$('.page6_bc3').addClass('kenan_delay').removeClass("animate_bc1");

	$('.page6_ban').fadeOut();
	$('.page6_conan').removeClass('pu_delay1 back').addClass("kenan_delay");
	$('.page6_word').removeClass("animatepage2_1");

	$('.page6_btn').fadeOut();
	$('.page6_game_conan').removeClass('kenan_delay1 back');
	$('.page6_game1_word').removeClass("animate2");
	$('.page6_game2_word').removeClass("animate2");
	$('.page6_game3_word').removeClass("animate2");
	$('.page6_game1_btn').css('display','none');
	$('.page6_game2_btn').css('display','none');
	$('.page6_game3_btn').css('display','none');
	$('.xianjie_p').removeClass('kenan_delay1 back');
	$('.end_word').removeClass("animate2");
	$('.s_word3').removeClass("animate2")
	$('.page6_x_btn').css('display','none');

	// rule动画
	$('.page_rule_bc1').addClass('kenan_delay').removeClass("animate_bc1");
	$('.page_rule_bc2').addClass('kenan_delay').removeClass("animate_bc2");
	$('.rule_ban').addClass('kenan_delay').removeClass("animatepage5_3");
	$('.lvjing_rule').addClass('kenan_delay').removeClass("lv_delay back_lv");

	// personal动画
	$('.page8_bc1').addClass('kenan_delay').removeClass("animate_bc3");
	$('.page8_bc2').addClass('kenan_delay').removeClass("animate_bc4");
	$('.page8_bc3').addClass('kenan_delay').removeClass("animate_bc3");
	$('.personal_out').removeClass("animatepage5_2");
	$('.lvjing_personal').addClass('kenan_delay').removeClass("lv_delay back_lv");
}
$('.menu').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-3']);
	$('.fu').fadeIn();
	// $('#btn-48').show();
	$('#btn-48').height($('.user').height())
})
$('.menu_close').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-9']);
	$('.fu').fadeOut()
})
$('.btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-4'])
	page_num=7;
	$('.con').fadeOut().eq(page_num).fadeIn();
	pageUnAni();

	setTimeout(pageAniRule,500)
	// pageAniRule();
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	setTimeout(function(){
		$('.con').css({'background':"url(img/page7_bc.png)","background-size":'cover'})
	},1000)
})
$('.page1_share_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-2']);
	if(isWeiXin()){
		// _utaq.push(['trackEvent','btn-5']);
		$('.share_fu_w').fadeIn();
	}
	else{
		$('.share_fu').fadeIn();
	}
})
$('.share_close').on(evStart,function(){
	$('.share_fu').fadeOut();
})
$('.share_fu_w').on(evStart,function(){
	$('.share_fu_w').fadeOut();
})
$('.btn1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-1']);

	// if(user_state){
		page_num=5;
		$('.con').fadeOut().eq(page_num).fadeIn();
		pageUnAni();
		for (var i = 0; i < src.length; i++) {
			$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
		};
		setTimeout(pageAni6,500)
		// pageAni6();
		setTimeout(function(){
			$('.con').css({'background':"url(img/page_game_bc.png)","background-size":'cover'})
		},1000)
	/*}else{
		alert('请先登录')
	}*/
})
var user_inf,user_state=false,user_pic,user_name=null,user_pic;
$('.user').on(evStart,function() {

	if(user_state){
		personnal_show();
	}	
});


urlhead = "http://www.alpenliebe.com.cn/conan/index.php";
if(isWeiXin()){
	// urlhead = "http://alpenliebe.com.cn/conan/index.php";

	user_name=GetQueryString('nickname');
	user_pic=GetQueryString('avatar');
}
else{

	$.ajax({
		url: urlhead+'?control=Api&action=getLoginInfo',
		type: 'get',
		dataType: 'json',
		success: function(data) {
			if(data.state){
				user_name=data.data.nickname;
				user_pic=data.data.avatar;
				cookieinfo();
			}
		}
	})
}

function cookieinfo(){
	// if (user_name!=null){
		user_state=true;
		$('#btn-48').hide();
  		// 执行
		$('.user').attr('src', user_pic);
		$('.user_down_word').html('个人中心');
		$('.user_pic').attr('src',user_pic);
		$('.personal_name').html(user_name);
		// 点击跳转
		$('.user').on(evStart,function() {
			personnal_show();
		});
	// }
	// else{
	// 	denglu();
	// }
}
var openId_chuan;
function denglu(){
	// 没有cookie值 判断是否为微信浏览器\
	if(isWeiXin()){
		// 微信浏览器 微信授权登录
		user_state=true;
		window.location.href= 'http://alpenliebe.com.cn/conan/index.php?control=Api&action=wxLogin';
	}
	else{
	// 非微信浏览器 qq第三方登录
		$('#btn-48').show();
	}
}

function getCookie(objName){
	var arrStr = document.cookie.split("; ");
	for ( var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName)
			return unescape(temp[1]);
	}
}

function GetQueryString(name){
  var reg =new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = decodeURI(window.location.search).substr(1).match(reg);
  if(r!=null)return unescape(r[2]);return null;
}

//判断是否是微信打开
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
function personnal_show(){
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	page_num=7;
	$('.con').fadeOut().eq(page_num+1).fadeIn();
	pageUnAni();

	
	$('.fu').fadeOut();
	setTimeout(pageAniPersonal,500)
	// pageAniPersonal();
	personal_css_init();
	prize_scroll();
	setTimeout(function(){
		$('.con').css({'background':"url(img/page8_bc.png)","background-size":'cover'})
	},1000)
}
// 个人中心页面初始化
function personal_css_init(){
	$('.each_class').height($('.prize_head').height());
	for (var i = 0; i < $('.each_class').length; i++) {
		$('.each_class').eq(i).css('top',($('.each_class').height()+2)*i)
		if((i+1)%2==1){
			$('.each_class').eq(i).css('background','#fdfcf4')
		}
		if((i+1)%2==0){
			$('.each_class').eq(i).css('background','#ffffff')
		}
	};
	$('.prize_list_inner').height(($('.prize_head').height()+2)*$('.each_class').length+2)
}
// 个人中心 奖品名单
function my_prize(){
	/*$.ajax({
		url: urlhead+'?control=Api&action=getUserWinlist',
		type: 'get',
		dataType: 'json',
		success: function(data) {
			$('.personal_int').html(data.data.user.points);
			if(data.state==1){
				var jilu="";
				if(data.data.list.length<1){
					// 没有记录
					$('.notice').show();
				}
				else{
					//有记录
					$('.notice').hide();
					for (var i = 0; i < data.data.list.length; i++){
		                jilu+='<div class="each_class"><div class="got_ifo1 got_ifo">'+data.data.list[i].name+'</div><div class="got_ifo2 got_ifo">'+data.data.list[i].create_time.substring(0,10)+'</div><div class="got_ifo3 got_ifo" id="btn-'+(i+57)+'">查看</div></div>'
					};
					$('.prize_list_inner').html(jilu);
					personal_css_init()
					var list_t=$('.prize_head').height();
					var prize_h=$('.personal_ban').height()*0.3;
					$('.personal_prize').height(prize_h)
					var list_h=prize_h*0.98-$('.prize_head').height();
				    $('.prize_list').css({'top':list_t,'height':list_h})
				    prize_scroll();
					changeScene();
				}
			}
		},
		error:function(){
		}
	})*/

					$('.notice').show();

}
$(".got_ifo3").on(evStart,function(){
	// _utaq.push(['trackEvent','btn-53'])
	real_info();
})
function personal_tan_show(){
	$('.tianxie').show();
	$('.personal_tan').fadeIn();
}
function personal_tan_hide(){
	$('.tianxie').hide();
	$('.personal_tan').fadeOut();
}
// 获取用户信息
function real_info(){
/*	$.ajax({
		url: urlhead+'?control=Api&action=getUserInfo',
		type: 'get',
		dataType: 'json',
		success: function(data) {
			$('.uesr_name').val(data.data.realname);
			$('.pid').val(data.data.idcard);
			$('.phone').val(data.data.phone);
			$('.address').val(data.data.address);
			$('.code').val(data.data.postcode);
			$('.note').val(data.data.note);
			personal_tan_show();
		}
	})*/
			$('.uesr_name').val(data.data.realname);
			$('.pid').val(data.data.idcard);
			$('.phone').val(data.data.phone);
			$('.address').val(data.data.address);
			$('.code').val(data.data.postcode);
			$('.note').val(data.data.note);
			personal_tan_show();
}
// 用户信息更改接口
var realname,phone,idcard,address,postcode,note;
function user_info_change(){
	$.ajax({
		type: 'post',
		dataType: 'json',
		data:{realname:realname,phone:phone,idcard:idcard,address:address,postcode:postcode,note:note},
		url: urlhead+'?control=Api&action=editUserInfo',
		success: function(data) {

		}
	})
}
$('.tianxie_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-55'])

	realname=$('.tianxie .uesr_name').val();
	idcard=$('.tianxie .pid').val();
	phone=$('.tianxie .phone').val();
	address=$('.tianxie .address').val();
	postcode=$('.tianxie .code').val();
	note=$('.tianxie .note').val()
	id_check(idcard);
	phone_check(phone);
	code_check(postcode);
	if(check_input1&&check_input2&&check_input3){
		user_info_change();
		personal_tan_hide();
	}
})
// 个人中心页面滚动条
function prize_scroll(){
	$('.prize_list_inner').css('top',0);
	var list_inner=$('.prize_list_inner').height();
	var prize_list=$('.prize_list').height();
	var prize_score=prize_list/list_inner;
	var pos_change=list_inner*(1.1-prize_score);
	/*设置开始位置 和结束位置*/
	var startY,endY,move_dis;
	$('.prize_list_inner').on('touchstart',function(e) {
	    prize_touch = e.originalEvent.targetTouches[0]; 
	    if(biao_hengshu==1){
			startY = prize_touch.pageY;
	    }else if(biao_hengshu==2){
			startY = prize_touch.pageX;
	    }
		var start_top=$('.prize_list_inner').css('top');
		$('.prize_list_inner').on('touchmove',function(e) {
		  	prize_touch = e.originalEvent.targetTouches[0]; 
		  	if(biao_hengshu==1){
				endY = prize_touch.pageY;
		    }else if(biao_hengshu==2){
				endY = prize_touch.pageX;
		    }
		  	// endY = prize_touch.pageY;
		  	if(biao_hengshu==1){
				move_dis=endY-startY;
		    }else if(biao_hengshu==2){
				move_dis=startY-endY;
		    }
		  	var bai=parseInt(start_top)+move_dis;
		  	if(bai<-pos_change){
		  		bai=-pos_change;
		  	}
		  	else if(bai>=0){
		  		bai=0;
		  	}
		  	$('.prize_list_inner').css('top',bai+"px");
		});
	});
	$('.prize_list_inner').on('touchend',function(e) {
		$('.prize_list_inner').on('touchmove',function(e) {
		  	return null;
		});
	});
}
/**********************************游戏start**********************************/
//引导页    闯关难度选择按钮
var all_time=0,mode=null,only;
$('.page6_btn').on(evStart,function(){
	mode=$(this).attr('myAttr');
	if(mode==1){
		// _utaq.push(['trackEvent','btn-17'])
		$('.game_num').css('display','none').eq(1).css('display','block');
		only=new Array(3)
	}else if(mode==2){
		// 中级
		// _utaq.push(['trackEvent','btn-18'])
		$('.game_num').css('display','none').eq(1).css('display','block');
		only=new Array(4)
	}else if(mode==3){
		// 高级
		// _utaq.push(['trackEvent','btn-19'])
		$('.game_num').css('display','none').eq(1).css('display','block');
		only=new Array(5)
	}
	// $('.page6_ban').addClass("kenan_delay").css("width",'100%');
	$('.page6_conan').addClass("kenan_delay").removeClass('pu_delay1 back kenan_delay1');
	$('.page6_word').removeClass("animatepage2_1 animate1");
	$('.page6_btn').css('display','none');;
	game1_start();
})
var game_timer=null,index=1,result=true,second,persont;
function game_time(all,index) {
 	second=0;
	var interval = function(){
		// 计时
		percent =1-((all - second)/all);
		$(".progress").css({
			width: percent*100 + "%"
		});
		// 结束
		if (percent >= 1) {
			$('.game').fadeOut();
			// 结果判断衔接页面
			// 第一关
			if(index==1){
				if(result){
					game1_x_suc();
				}
				else{
					game1_x_fail();
				}
			}
			// 第二关
			else if(index==2){
				if(result){
					game2_x_suc();
				}
				else{
					game2_x_fail();
				}
			}
			// 第三关
			else if(index==3){
				if(result){
					// game3_x_suc();
					game_jiekou()
				}
				else{
					game3_x_fail();
				}
			}
			clearInterval(game_timer);
			$(".progress").css({
				width: '0'
			});
		}
	};
	interval();
	game_timer = setInterval(function() {
		second = second +0.01;
		$('.time_num').html(all-Math.floor(second));
		interval();
	},10)
}
// 前言页面淡出函数
function game1_start(){
	$('.logo_kenan').fadeIn();
	$('.logo').fadeIn();
	$('.logo_new').fadeIn();
	$('.page6_game_conan').addClass('kenan_delay1 back');
	$('.page6_game1_word').addClass("animate2");
	$('.page6_game1_btn').css('display','block');
}
function game2_start(){
	$('.logo_kenan').fadeIn();
	$('.logo').fadeIn();
	$('.logo_new').fadeIn();
	$('.page6_game_conan').addClass('kenan_delay1 back');
	$('.page6_game2_word').addClass("animate2");
	$('.page6_game2_btn').css('display','block');
}
function game3_start(){
	$('.logo_kenan').fadeIn();
	$('.logo').fadeIn();
	$('.logo_new').fadeIn();
	$('.page6_game_conan').addClass('kenan_delay1 back');
	$('.page6_game3_word').addClass("animate2");
	$('.page6_game3_btn').css('display','block');
}
//前言页面点击按钮事件
/********game1********/
var daojicishu1=0;
$('.page6_game1_btn').on(evStart,function(){
	$('.menu').fadeOut();
	daojicishu1=0;
	$(this).css('display','none');
	// 标记 分数 结果初始化
	result=false;
	$('svg').css('display','none');
	for (var i=0;i<only.length ;i++ ){
	 	only[i]=0;
	}
	all_time=30;
	$('.time_num').html(all_time);
	// 随机选择找茬图片
	if(mode==1){
		// 低级
		// _utaq.push(['trackEvent','btn-20']);
		$('.game1_p').css('display','none').eq(0+Math.floor(Math.random()*3)).css('display','block');
	}else if(mode==2){
		// 中级
		// _utaq.push(['trackEvent','btn-22']);
		$('.game1_p').css('display','none').eq(3+Math.floor(Math.random()*3)).css('display','block')
	}else if(mode==3){
		// 高级
		// _utaq.push(['trackEvent','btn-24']);
		$('.game1_p').css('display','none').eq(6+Math.floor(Math.random()*3)).css('display','block')
	}

	// game1 页面出现 动画
	$('.logo_kenan').fadeOut();
	$('.logo').fadeOut();
	$('.logo_new').fadeOut();
	$('.page6_game_conan').addClass("kenan_delay").removeClass('kenan_delay1 back');
	$('.page6_game1_word').removeClass("animate2");
	$('.game').fadeOut();
	$('.game1').fadeIn();

	// index设置关卡 第一关
	index=1;
	// game1游戏开始计时
	game_time(all_time,index);
})
$('.mark').on(evStart,function(){
	var a=$(this).index()-1;

	only[a]=1;
	$('.mark'+$(this).index()).find('svg').show();
	$('.mark'+$(this).index()).find('svg').show();
	// 每次标记都计算下总分数
	jisuan_game1();
})
function jisuan_game1(){
	var r=0;
	for (var i=0;i<only.length ;i++ ){
	 	r=only[i]+r;
	}
	// 表示第几个标记出现
	if(r==only.length){
		// 成功
		result=true;
		clearInterval(game_timer);
		setTimeout(function(){
			$('.game').fadeOut();
			game1_x_suc();
		},800)
	}
	else{
		// 失败
		result=false;
	}
}
$('.daoju1').on(evStart,function(){
	if(mode==1){
		// 低级
		// _utaq.push(['trackEvent','btn-21']);
	}else if(mode==2){
		// 中级
		// _utaq.push(['trackEvent','btn-23']);
	}else if(mode==3){
		// 高级
		// _utaq.push(['trackEvent','btn-25']);
	}


	if(daojicishu1<=0){
		for (var i=0;i<only.length ;i++ ){
			if(only[i]==0){
				only[i]=1;
				$('.mark'+(i+1)).find('svg').show();
				$('.mark'+(i+1)).find('svg').show();
				daojicishu1++;
				break;
			}

		}
	}
	else{

	}
	jisuan_game1();
})
/********game2********/
var game2_imgSrc=["img/game2_p1.png","img/game2_p2.png","img/game2_p3.png"];
var picWidth=["30.6","15.4","18.1"];
var changPeo_time,up_time,speed,t,caught_time,cishu,r2;
var daojicishu2=0;
$('.page6_game2_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-28'])
	people_src();
	cishu=0;
	r2=0;
	$('.menu').fadeOut();
	daojicishu2=0;
	$(this).css('display','none');
	// 初始化
	result=true;
	all_time=15;
	$('.time_num').html(all_time);

	// 设置速度
	if(mode==1){
		// 低级
		// speed=3000;
		speed=2000;
	}else if(mode==2){
		// 中级
		// speed=2500;
		speed=1500;
	}else if(mode==3){
		// 高级
		// speed=2000;
		speed=1000;
	}

	caught_time=new Array((30000/speed)+1);
	for (var i=0;i<caught_time.length ;i++ ){
	 	caught_time[i]=0;
	}
	// game2页面
	$('.logo_kenan').fadeOut();
	$('.logo').fadeOut();
	$('.logo_new').fadeOut();
	$('.page6_game_conan').addClass("kenan_delay").removeClass('kenan_delay1 back');
	$('.page6_game2_word').removeClass("animate2");
	$('.game').fadeOut();
	$('.game2').fadeIn();
	// 关卡
	index=2;
	// 游戏开始计时
	game_time(all_time,index);
	up_down()
})
// game2机制
function up_down(){
	r2=0;
	clearTimeout(up_time);
	$(".people").addClass("hide_down");
	// 每次移动结束都计算下总分数
	for (var i=0;i<=cishu ;i++ ){
	 	r2=caught_time[i]+r2;
	}
	if(r2<cishu-2){
		result=false;
		$('.game').fadeOut();
		game2_x_fail();
		clearInterval(game_timer);
	}
	
	//最下面的时候换路径
	if(result==true){
		/*up_time=setTimeout(function(){
			fnLuanXu();
			$(".people").removeClass("hide_down");
		},(speed-400)/2);*/

		up_time=setTimeout(function(){
			fnLuanXu();
			$(".people").removeClass("hide_down");
		},250);

		cishu++;
		changPeo_time=setTimeout(up_down,speed);
	}
}
// 打乱人物图片路径函数
function fnLuanXu() {
	// var game2_imgSrc=["img/game2_p1.png","img/game2_p2.png","img/game2_p3.png"];
	for (var i = 0; i < game2_imgSrc.length; i++) {  
    	// 选择任意位置
        var iRand = parseInt(game2_imgSrc.length * Math.random());
        // 把本次位置的值赋给变量temp
        var temp = game2_imgSrc[i];  
        var Wtemp=picWidth[i];
        // 把选择的任意位置以及本次的位置的值交换
        game2_imgSrc[i] = game2_imgSrc[iRand]; 
        picWidth[i] = picWidth[iRand]; 
        game2_imgSrc[iRand] = temp;  
        picWidth[iRand] = Wtemp;  
    }  
    people_src();
    return game2_imgSrc;  
}     
// game2 人物图片路径赋值
function people_src(){
	for (var i = 0; i < $('.people').length; i++) {
		$('.people').eq(i).attr('src',game2_imgSrc[i]).css({"width":picWidth[i]+"%",'left':16.5-picWidth[i]/2+i*33+"%"})
	};	
}
//抓黑衣人事件
$('.game2_camera').on(evStart,function(){
	var  criminal=0;
	for (var i = 0; i < game2_imgSrc.length; i++) {
		if(game2_imgSrc[i]=="img/game2_p1.png"){
			criminal=i;
		}
	};
	if(criminal==$(this).index()-7){
		// 每次点击都给赋值
		caught_time[cishu-1]=1;
		$('.camera_light').css('left',16.5-picWidth[criminal]/2+criminal*33+"%").fadeIn(100).delay(100).fadeOut(100);
	}
	else{

	}
})
$('.daoju2').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-29']);
	if(daojicishu2<=0){
		clearInterval(game_timer);
		second+=0.5;
		game_time_game2(all_time)
	}
	else{

	}
	daojicishu2++;
})
function game_time_game2(all) {
	var interval = function(){
		// 计时
		var percent1 =1-((all - second)/all);
		$(".progress").css({
			width: (percent+percent1)*100 + "%"
		});
		// 结束
		if ((percent+percent1) >= 1) {
			$('.game').fadeOut();
			if(result){
				game2_x_suc();
			}
			else{
				game2_x_fail();
			}
			clearInterval(game_timer);
			$(".progress").css({
				width: '0'
			});
		}
	};
	interval();
	game_timer = setInterval(function() {
		second = second +0.01;
		$('.time_num').html(all - Math.floor(second));
		interval();
	},10)
}
/********game3********/
var imgGame3=new Array(12);
var game3_num,game3_chengji;
var game3_i,game3_time,pai1,pai2,game3_index,game3_index1,name,name1;
var daojicishu3=0;
$('.page6_game3_btn').on(evStart,function(){

	$('.menu').fadeOut();
	daojicishu3=0;
	$(this).css('display','none');
	// 初始化
	game3_i=0;
	game3_num=0;
	game3_chengji=0;

	result=false;
	game3_pic_position();
	$('.inner').css('display','block')
	$('.vertical .card_bc').css({"display": "block","width": "100%"})
	$('.vertical .info').css({"display": "none","width": "0"})

	// 设置时间 控制难度
	if(mode==1){
		// 低级
		// _utaq.push(['trackEvent','btn-32'])
		all_time=30;
		imgGame3=["img/card/card (1).jpg","img/card/card (2).jpg","img/card/card (3).jpg","img/card/card (4).jpg","img/card/card (5).jpg","img/card/card (6).jpg","img/card/card (1).jpg","img/card/card (2).jpg","img/card/card (3).jpg","img/card/card (4).jpg","img/card/card (5).jpg","img/card/card (6).jpg"];
	}else if(mode==2){
		// 中级
		// _utaq.push(['trackEvent','btn-34'])
		all_time=25;
		imgGame3=["img/card/card (7).jpg","img/card/card (8).jpg","img/card/card (9).jpg","img/card/card (10).jpg","img/card/card (11).jpg","img/card/card (12).jpg","img/card/card (7).jpg","img/card/card (8).jpg","img/card/card (9).jpg","img/card/card (10).jpg","img/card/card (11).jpg","img/card/card (12).jpg"];
	}else if(mode==3){
		// 高级
		// _utaq.push(['trackEvent','btn-36'])
		all_time=20;
		imgGame3=["img/card/card (13).jpg","img/card/card (14).jpg","img/card/card (15).jpg","img/card/card (16).jpg","img/card/card (17).jpg","img/card/card (18).jpg","img/card/card (13).jpg","img/card/card (14).jpg","img/card/card (15).jpg","img/card/card (16).jpg","img/card/card (17).jpg","img/card/card (18).jpg"];
	}
	$('.time_num').html(all_time);
	newSrc();
	// game3 页面进入
	$('.logo_kenan').fadeOut();
	$('.logo').fadeOut();
	$('.logo_new').fadeOut();
	$('.page6_game_conan').addClass("kenan_delay").removeClass('kenan_delay1 back');
	$('.page6_game3_word').removeClass("animate2");
	$('.game').fadeOut();
	$('.game3').fadeIn();
	// 设置关卡
	index=3;
	// 游戏开始计时
	// allturn();
	game3_time=setInterval(allturn,500)
	setTimeout(function(){
		game_time(all_time,index);
	},6000)
})
// 道具3
$('.daoju3').on(evStart,function(){
	if(mode==1){
		// 低级
		// _utaq.push(['trackEvent','btn-33']);
	}else if(mode==2){
		// 中级
		// _utaq.push(['trackEvent','btn-35']);
	}else if(mode==3){
		// 高级
		// _utaq.push(['trackEvent','btn-37']);
	}
	if(daojicishu3<=0){
		clearInterval(game_timer);
		second-=1.5;
		game_time_game3(all_time)
	}
	else{

	}
	daojicishu3++;
})
function game_time_game3(all) {
	var interval = function(){
		// 计时
		percent =1-((all - second)/all);
		$(".progress").css({
			width: (percent)*100 + "%"
		});
		// 结束
		if ((percent) >= 1) {
			$('.game').fadeOut();
			if(result){
				// game3_x_suc();
				game_jiekou();
			}
			else{
				game3_x_fail();
			}
			clearInterval(game_timer);
			$(".progress").css({
				width: '0'
			});
		}
	};
	interval();
	game_timer = setInterval(function() {
		second = second +0.01;
		$('.time_num').html(all - Math.floor(second));
		interval();
	},10)
}
//game3机制
//用来重新排序整套图片
function newSrc(){
	for (var i = 0; i < imgGame3.length; i++) {  
    	// 选择任意位置
        var iRand = parseInt(imgGame3.length * Math.random());
        // 把本次位置的值赋给变量temp
        var temp = imgGame3[i];  
        // 把选择的任意位置以及本次的位置的值交换
        imgGame3[i] = imgGame3[iRand];  
        imgGame3[iRand] = temp;   
    }  
    info_src();
    return imgGame3; 
}
function info_src(){
	for (var i = 0; i < $('.inner').length; i++) {
		$('.inner').eq(i).find('.info').attr('src',imgGame3[i]);
	};	
}
// 设置位置用的
function game3_pic_position(){
	for (var j = 0; j<6; j++) {
		for (var i = 0; i < ($(".inner").length)/2; i++) {
			$(".inner").eq(i+j*6).css({"left":16*i+'%'});
			$(".inner").eq(i+j*6).css({"top":56*j+'%'});
		};
	};
}
// 初始化依次翻转
function allturn(){
	$('.inner').eq(game3_i).find('.card_bc').stop().animate({'width':0},100,function(){
		$(this).hide().next().show();
		$(this).next().animate({'width':100+'%'},100);
	});
	game3_i++;
	// 翻转完了 计时 图片都扣上
	// game3_time=setTimeout(allturn,500);
	if(game3_i>12){
		game3_init();
	}
}
// 一次性图片都扣上
function game3_init(){
	clearInterval(game3_time);
	game3_num==0;
	$('.info').animate({'width':0},100,function(){
		$(this).hide().prev().show();
		$(this).prev().animate({'width':100+'%'},100);
	}); 
}
// 点击
$('.inner').on(evStart,function(){
	if(game3_i<12){
	}
	// 可点击了
	else{
		clearInterval(game3_time);
		// 点击奇数次
 		game3_num++;
		if(game3_num%2==1){
			game3_index=$(this).index();
			$(this).find('.card_bc').stop().animate({'width':0},100,function(){
				$(this).hide().next().show();
				$(this).next().animate({'width':100+'%'},100);
				pai1=$(this).next().attr("src");
			});
		}
		//点击第二次
		else if(game3_num%2==0){
			game3_index1=$(this).index();
			// 判断不重复点击
			if(game3_index1==game3_index){
				game3_num--;
			}
			// 点击完了
			else{
				// 翻转动画
				var index1=game3_index1;
				var index2=game3_index;
				$(this).find('.card_bc').stop().animate({'width':0},100,function(){
					$(this).hide().next().show();
					$(this).next().animate({'width':100+'%'},100);
					pai2=$(this).next().attr("src");
					//翻转完了 查看结果 看是否消失
					game3_result(index1,index2)
					// setTimeout(function(){game3_result(index1,index2)},300);
				});
				// 翻转
				setTimeout(function(){game3_init1(index1,index2)},300);
			}
		}
	}
})
/*点击后还原*/
function game3_init1(a,b){
	$('.inner').eq(a).find('.info').animate({'width':0},100,function(){
		$(this).hide().prev().show();
		$(this).prev().animate({'width':100+'%'},100);
	}); 
	$('.inner').eq(b).find('.info').animate({'width':0},100,function(){
		$(this).hide().prev().show();
		$(this).prev().animate({'width':100+'%'},100);
	}); 
}
//结果
function game3_result(a,b){
		// 计算结果
		if( pai1==pai2){
			game3_chengji++;
			setTimeout(function(){
				$('.inner').eq(a).hide();
				$('.inner').eq(b).hide();
			},300)
		}
		if(game3_chengji>=6){
			//alert("闯关成功")
			result=true;
			clearInterval(game_timer);
			$('.game').fadeOut();
			// game3_x_suc();
			game_jiekou()
		}
		else{
			//alert("继续努力");
			result=false;
		}
};
//衔接页面样式
function game1_x_suc(){
	$('.menu').fadeIn(800);
	$('.logo_kenan').show();
	$('.suc1').addClass('kenan_delay1 back');
	$('.suc2').addClass('kenan_delay1 back');
	$('.s_word1').addClass("animate2");
	$('.page6_xc1_btn').css({'left':'37.9%','top':'68.4%'}).fadeIn();
}
function game1_x_fail(){
	$('.menu').fadeIn(800);
	$('.logo_kenan').show();
	$('.fail').addClass('kenan_delay1 back');
	$('.fail_word1').addClass("animate2");
	$('.page6_x1_btn').css({'left':'37.1%','top':'70.83%'}).fadeIn();
}
function game2_x_suc(){
	$('.menu').fadeIn(800);
	clearTimeout(changPeo_time);
	clearTimeout(up_time);
	$('.logo_kenan').show();
	$('.suc1').addClass('kenan_delay1 back');
	$('.suc2').addClass('kenan_delay1 back');
	$('.s_word2').addClass("animate2");
	$('.page6_xc2_btn').css({'left':'37.9%','top':'68.4%','display':'block'});
}
function game2_x_fail(){
	clearTimeout(changPeo_time);
	clearTimeout(up_time);
	$('.menu').fadeIn(800);
	$('.logo_kenan').show();
	$('.fail').addClass('kenan_delay1 back');
	$('.fail_word2').addClass("animate2");
	$('.page6_x2_btn').css({'left':'37.1%','top':'70.83%','display':'block'});
}
function game3_x_suc(){
	$('.menu').fadeIn(800);
	$('.logo_kenan').show();
	$('.game_uer').attr('src',user_pic);
	if(game_level==1){
		$('.game_t_j').attr('src','img/game_t_j1.png');
	}
	else if(game_level==2){
		$('.game_t_j').attr('src','img/game_t_j2.png');
	}
	else if(game_level==3){
		$('.game_t_j').attr('src','img/game_t_j3.png');

	}
	$('.s_word3').addClass("animate2");
	$('.page6_t_btn').fadeIn();
}
function game3_x_fail(){
	$('.menu').fadeIn(800);
	$('.logo_kenan').show();
	$('.fail').addClass('kenan_delay1 back');
	$('.fail_word3').addClass("animate2");
	$('.page6_x3_btn').css({'left':'37.1%','top':'70.83%','display':'block'});
}
// 衔接页面点击事件
$('.page6_x1_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-27']);
	$('.page6_x1_btn').css({'display':'none'});
	$('.end_word').removeClass("animate2");
	$('.xianjie_p').removeClass('kenan_delay1 back');
	// 失败
	game1_start()
})
$('.page6_xc1_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-26']);
	$('.page6_xc1_btn').css({'display':'none'});
	$('.end_word').removeClass("animate2");
	$('.xianjie_p').removeClass('kenan_delay1 back');
	// 成功
	game2_start()
})
$('.page6_x2_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-31']);
	clearTimeout(changPeo_time);
	clearTimeout(up_time);
	$('.end_word').removeClass("animate2");
	$('.xianjie_p').removeClass('kenan_delay1 back');
	$('.page6_x2_btn').css({'display':'none'});
	// 失败
	game2_start();
})
$('.page6_xc2_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-30']);
	clearTimeout(changPeo_time);
	clearTimeout(up_time);
	$('.end_word').removeClass("animate2");
	$('.xianjie_p').removeClass('kenan_delay1 back');
	$('.page6_xc2_btn').css({'display':'none'});
	// 成功
	game3_start();
})
$('.page6_x3_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-38']);
	$('.end_word').removeClass("animate2");
	$('.xianjie_p').removeClass('kenan_delay1 back');
	$('.page6_x3_btn').css({'display':'none'});
	if(!result){
		game3_start();
	}
})
//通关页面三个btn
$('.page6_t1_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-39'])
	$('.page6_t_btn').css({'display':'none'});
	$('.s_word3').removeClass("animate2");
	$('.page6_ban').delay(1000).fadeIn();
	$('.page6_btn').fadeIn();
	$('.page6_conan').addClass('kenan_delay1 back').removeClass("kenan_delay");
	$('.page6_word').addClass("animate1");
})
$('.page6_t2_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-40'])
	// pageUnAni();
	$('.page6_t_btn').css({'display':'none'});
	$('.s_word3').removeClass("animate2");
	$('.page6_bc1').removeClass("animate_bc1");
	$('.page6_bc2').removeClass("animate_bc2");
	$('.page6_bc3').removeClass("animate_bc1");
	$('.page6_ban').fadeOut();
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	$('.nav li').eq(2).find('img').attr({'src':'o'+src[2]}).css({'width':'101%','right':'0','margin-top':'-2%'})
	$('.con').css({'background':"url(img/page_game_bc.png)","background-size":'cover'})
	$('.con').fadeOut().eq(2).fadeIn();
	pageAni3();
	page_num=2;
	setTimeout(function(){
		$('.con').css({'background':"url(img/page3_bc.png)","background-size":'cover'})
	},1000)
})

$('.page6_t3_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-41'])
	if(isWeiXin()){
		$('.share_fu_w').fadeIn();
	}
	else{
		$('.share_fu').fadeIn();
	}
})
//游戏接口
var game_win,game_level=0;
// 玩过关了 才会调用的接口 只有成功一次 以及重复完成两种可能
function  game_jiekou(){
	/*$.ajax({
       type: "POST",
       dataType: 'json',
       data:{level:mode},
       url: urlhead+"?control=Api&action=gamedone",
       success: function(data){
       		if(data.state==1){
            	// 成功
            	
            	$('.game_jifen').show().html(data.data.number)
            	$('.s_word3_img2').hide();
            	$('.s_word3_img1').show();
            	game3_x_suc();
            }
            else if(data.state==0){
            	if(game_level<=mode){
            		game_level=data.data.level;
            	}
            	$('.game_jifen').hide();
            	$('.s_word3_img1').hide();
            	$('.s_word3_img2').show();
            	game3_x_suc();
            }
        }
    });*/
	$('.game_jifen').show().html(data.data.number)
            	$('.s_word3_img2').hide();
            	$('.s_word3_img1').show();
            	game3_x_suc();
}
/**********************************游戏end**********************************/
// 菜单栏按钮
var ani_num=1;

var src=["img/page1_menu_on1.png", "img/page1_menu_on2.png", "img/page1_menu_on3.png", "img/page1_menu_on4.png", "img/page1_menu_on5.png", "img/page1_menu_on6.png"];

$('.nav li').on(evStart,function(){
	if($(this).index()==page1_biao){
		$('.fu').fadeOut();
	}else{
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	$('.nav li').eq($(this).index()).find('img').attr({'src':'o'+src[$(this).index()]}).css({'width':'101%','right':'0','margin-top':'-2%'})
	$('.fu').fadeOut();
	pageUnAni();
	if(page_num!=3){
		$('.con').css({'background': "url(img/page"+(page_num+1)+"_bc.png)",'background-size':'cover'});
	}
	page_num=$(this).index();
	if(page_num!=5){
		setTimeout(function(){
			$('.con').fadeOut().eq(page_num).fadeIn();
			if(page_num==0){
				// _utaq.push(['trackEvent','btn-11']);
				$('.con').css({'background': "url(img/page1_bc.png)",'background-size':'cover'})
				setTimeout(pageAni,500);
				// pageAni();
			}
			if(page_num==1){
				// _utaq.push(['trackEvent','btn-12'])
				setTimeout(pageAni2,500);
				// pageAni2();
			}
			if(page_num==2){
				// _utaq.push(['trackEvent','btn-13'])
				setTimeout(pageAni3,500);
				// pageAni3();
			}
			if(page_num==3){
				// _utaq.push(['trackEvent','btn-14'])
				setTimeout(pageAni4,500);
				// pageAni4();
			}
			if(page_num==4){
				// _utaq.push(['trackEvent','btn-15'])
				setTimeout(pageAni5,500);
				// pageAni5();
			}
		},500);
	}
	else{
		// _utaq.push(['trackEvent','btn-16'])
		// 菜单跳出页面
		window.location.href="https://perfetti.tmall.com/shop/view_shop.htm?spm=a220m.1000862.1000730.2.uybvGy&user_number_id=756099224&rn=dbeba0465a89333e1abb5dfd23e285dc";
	}
}
})
//卡牌函数
var deg=18,cnt,dim,centerX,centerY,images;
function rotate(step,total){
	clearTimeout(timer1);
	var jtotal=total;
	if (deg>=342) {
		deg=18;
	};
	// deg 是整体累加转到的角度
	deg+=step;
	
	var eSin,eCos,newWidth,newHeight,q;

	for(var i=0;i<cnt;i++){
		q = ((360/cnt)*i+deg)*Math.PI/180;
		eSin		= Math.sin(q);
		eCos		= Math.cos(q);
		q = (0.9+eSin*0.2);
		newWidth	= q*dim.width;
		newHeight	= q*dim.height;
		images.eq(i).css({
			top			: centerY*(1+eSin),
			left		: centerX*(1+eCos/1.2),
			marginLeft	: -newWidth/2,
			zIndex		: Math.round(80+eSin*20)
		}).width(newWidth).height(newHeight);
	}

	if(jtotal>0){
		total-=Math.abs(step);
		if(total<=0) return false;
	}else{
		total+=Math.abs(step);
		if(total>=0) return false;
	}
	timer1=setTimeout(function(){rotate(step,total)},40);
}
function page2_rotate(){
	clearInterval(timer);
	clearTimeout(timer1);

	images	= $('#stage img').removeClass('default').addClass('animationReady');
	dim		= { width:$('#stage').width()*0.2368,height:$('#stage').height()*0.692};
	
	cnt = images.length;
	
	centerX = $('#stage').width()/2;
	centerY = $('#stage').height()/2 - dim.height/2;
	rotate(4,360/cnt);
	timer=setInterval(function(){
		rotate(4,360/cnt);
	;},1500);

	/*var startX,endX,end;
	document.addEventListener('touchstart', function (e) {
		clearInterval(timer);
		clearTimeout(timer1);
        startX = e.targetTouches[0].pageX;
    });

	document.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].pageX;
        end=endX-startX;
        if(end>0){
        	rotate(-4,360/cnt);
	        timer=setInterval(function(){
				clearTimeout(timer1);
				rotate(4,360/cnt);
			},1500);
        }
        else if(end<0){	
        	rotate(4,360/cnt);
        	timer=setInterval(function(){
				clearTimeout(timer1);
				rotate(4,360/cnt);
			},1500);
        }
    });*/
};
var clickNum=0;
$('#stage img').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-42']);
	// if(user_state){
		// console.log('签到一次')
    	qiandao();
	    clearInterval(timer);
		clearTimeout(timer1);
    	clickNum++;
    	var nowPic=$(this).index()+1;
    	var position;
    	if(nowPic>=3){
    		position=(nowPic-3)*36-18+deg;
    	}
    	else{
    		position=(nowPic+7)*36-18+deg;
    	}

    	var path=position%360,speed;
		if(path>180){
			speed=(360-path)/18;
			rotate(speed,360-path);
    	}
    	else{
    		speed=-path/18;
			rotate(speed,path);
    	}
    	$('#stage img').removeClass('scale');
    	$(this).addClass('scale');
 /*   }else{
		alert('请先登录')
	}*/
})
// 签到接口
function qiandao(){
    /*$.ajax({
       type: "GET",
       dataType: 'json',
       url: urlhead+"?control=Api&action=sign",
       success: function(data){
            if(data.state==0){
       			// 签到失败
    			$('.page2_tan2').fadeIn();
            }
            else if(data.state==1){
            	// 签到成功
    			$('.page2_tan1').fadeIn();
            	$('.int').html(data.data.points);
            }
        }
    });*/
    			$('.page2_tan2').fadeIn();

}
$('.page2_tan_close').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-45'])
    page2_rotate();
    $('.page2_tan').fadeOut();
	$('#stage img').removeClass('scale');
})
$('.page2_tan2_close').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-43']);
    page2_rotate();
    $('.page2_tan').fadeOut();
	$('#stage img').removeClass('scale');
})
$('.page2_tan_btn1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-46'])
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	$('#stage img').removeClass('scale');
	page_num=5;
	$('.con').fadeOut().eq(page_num).fadeIn();
	$('.page2_tan').fadeOut();
	pageUnAni();
	setTimeout(pageAni6,500)
	//pageAni6();
	setTimeout(function(){
		$('.con').css({'background':"url(img/page_game_bc.png)","background-size":'cover'})
	},1000)
})
$('.page2_tan2_btn1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-44']);
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	$('#stage img').removeClass('scale');
	page_num=5;
	$('.con').fadeOut().eq(page_num).fadeIn();
	$('.page2_tan').fadeOut();
	pageUnAni();
	setTimeout(pageAni6,500)
	//pageAni6();
	setTimeout(function(){
		$('.con').css({'background':"url(img/page_game_bc.png)","background-size":'cover'})
	},1000)
})
$('.page2_tan_btn2').on(evStart,function(){  
	// _utaq.push(['trackEvent','btn-47'])  
	$('.page2_tan').fadeOut();	
	$('#stage img').removeClass('scale');
	$('.con').fadeOut().eq(2).fadeIn();
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	$('.nav li').eq(2).find('img').attr({'src':'o'+src[2]}).css({'width':'101%','right':'0','margin-top':'-2%'})
	setTimeout(pageAni3,800);
})
$('.page3_close1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-58']);
    $('.page3_tan').fadeOut();
})
$('.page3_close2').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-62']);
    $('.page3_tan').fadeOut();
})
$('.page3_tan_close1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-63'])
    $('.page3_tan').fadeOut();
})
$('.luo_tan_close').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-59']);
    $('.page3_tan').fadeOut();
    $('.luo_point').hide();
})
$('.personal_tan_close').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-54']);
    $('.personal_tan').fadeOut();
})
var imgSrc = null,rotNum,angles,num,rotNum=0;
var prize_src = [
		"img/page3_prize1.png",
		"img/page3_prize2.png",
		"img/page3_prize3.png",
		"img/page3_prize4.png",
	];
//转盘旋转
function runCup(){
	// 先设置旋转角度和奖
	rotNum = rotNum + 1;
	probability();
	// 然后转到那个地方
	var degValue = 'rotate('+angles+'deg'+')';
	$('.pan_point').css({'transform':degValue,'-webkit-transform':degValue}); 
}
//各奖项对应的旋转角度及中奖公告内容
function probability(){
	if ( num == 0 ) {
		angles = 2160 * rotNum + num*30-15;
		imgSrc=prize_src[0];
	}
	//概率
	else if ( num == 1 ) {
		angles = 2160 * rotNum + num*30-15;
		imgSrc=prize_src[1];
	}
	//概率
	else if ( num == 2 ) {
		angles = 2160 * rotNum + num*30-15;
		imgSrc=prize_src[2];
	}
	//概率
	else if ( num == 3 ) {
		angles = 2160 * rotNum + num*30-15;
		imgSrc=prize_src[3];
	}
}
//验证抽奖资格
function prize_zige(){
   /* $.ajax({
       type: "GET",
       dataType: 'json',
       url: urlhead+"?control=Api&action=checkQualified",
       success: function(data){
            if(data.state==0){
       			// 失败
       				$('.page3_tan').show();
	       			fail_tan();
            }
            else if(data.state==1){
            		// 成功
					//转盘旋转
					runCup();
					//转盘旋转过程“开始抽奖”按钮无法点击
					$('#btn-20').attr("disabled", true);
					//旋转次数加一
					prize_chou()
            }
        }
    });*/

    runCup();
	//转盘旋转过程“开始抽奖”按钮无法点击
	$('#btn-20').attr("disabled", true);
	//旋转次数加一
	prize_chou()
}
//用户抽奖
function prize_chou(){
    $.ajax({
       type: "post",
       dataType: 'json',
       url: urlhead+"?control=Api&action=lottery",
       data:{type:1},
       success: function(data){
       		$('.points_now').html(data.data.user.points);
            if(data.state==0){
       			// 失败  未中奖
       			num=0;
            	runCup();
            	setTimeout(function(){
					// 下载的
   					$('.page3_tan').show();
					jiangpin2_tan();
					$('.page3_tan_btn2').attr('href',data.data.desktop)
				},5200)
            }
            else if(data.state==1){
            	// 成功 返回奖品id
            	num=data.data.prize.id;
            	runCup();
            	setTimeout(function(){
	            	if(data.data.prize.id==1){
						// 填信息的
       					$('.page3_tan').show();
						jiangpin1_tan();
					}
					else if(data.data.prize.id==2){
						// 填信息的
       					$('.page3_tan').show();
						jiangpin1_tan();
					}
					else if(data.data.prize.id==3){
						// 填信息的
       					$('.page3_tan').show();
						jiangpin1_tan();
					}
				},5200)
            }
            else if(data.state==2){
            	// 积分不足
            	$('.page3_tan').show();
            	fail_tan();
            }
        }

    });
}
/****************罗盘四中弹框函数****************/
// 一类奖品——填信息
function jiangpin1_tan(){
	$('.page3_point').show();
	$('.page3_tan_btn').hide().eq(0).show();
	$('.no_bc').hide();
	$('.suc_bc').show();
	$('.page3_prize').show();
	$('.page3_prize').attr('src',imgSrc)
	$('#btn-20').removeAttr("disabled", true);
	$('.page3_tan_close1').hide();
	$('.page3_close1').show();
	$('.luo_points').show();
	$('.page3_prize_points').show();
}
// 填写信息按钮
$('.page3_tan_btn1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-57']);
	inf_show();
})
$('.l_tianxie_btn').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-60']);
	realname=$('.luo_tianxie .uesr_name').val();
	idcard=$('.luo_tianxie .pid').val();
	phone=$('.luo_tianxie .phone').val();
	address=$('.luo_tianxie .address').val();
	postcode=$('.luo_tianxie .code').val();
	note=$('.luo_tianxie .note').val();

    id_check(idcard);
	phone_check(phone);
	code_check(postcode);

	if(check_input1&&check_input2&&check_input3){
		$('.page3_tan').fadeOut();
    	$('.luo_point').hide();
		user_info_change(); 
	}
})
// 下载 btn
$('.page3_tan_btn2').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-61']);
})
//二类奖品——下载按钮
function jiangpin2_tan(){
	$('.page3_point').show();
	$('.page3_tan_btn').hide().eq(1).show();
	$('.no_bc').hide();
	$('.suc_bc').show();
	$('.page3_prize').show();
	$('.page3_prize').attr('src',imgSrc)
	$('#btn-20').removeAttr("disabled", true);
	$('.page3_tan_close1').hide();
	$('.page3_close2').show();
	$('.luo_points').show();
	$('.page3_prize_points').show();
}
//积分不够弹框
function fail_tan(){
	$('.page3_point').show();
	$('.page3_tan_btn').hide().eq(2).show();
	$('.no_bc').show();
	$('.suc_bc').hide();
	$('.page3_prize').hide();
	$('.page3_tan_close1').show();
	$('.page3_tan_close').hide();
	$('.luo_points').hide();
	$('.page3_prize_points').hide();
}
// 挑战btn
$('.page3_tan_btn3').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-64']);
	$('.page3_tan').fadeOut();
	page_num=5;
	$('.con').fadeOut().eq(page_num).fadeIn();
	pageUnAni();
	setTimeout(pageAni6,500)
	// pageAni6();
	for (var i = 0; i < src.length; i++) {
		$('.nav li').eq(i).find('img').attr({'src':src[i]}).css({'width':'85%','right':'2.5%','margin-top':'0'})
	};
	setTimeout(function(){
		$('.con').css({'background':"url(img/page_game_bc.png)","background-size":'cover'})
	},1000)
})
//填信息表单
function inf_show(){
	$('.luo_point').fadeIn();
	$('.page3_point').fadeOut();
}

/*rule   tab切换*/
$('.tab_title1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-65']);
    $('.tab').fadeOut(1).eq(0).fadeIn(1);
	 rule_calculate( a_bar,a_word)
    $('.tab_title1').css('top','17.5%');
    $('.tab_title2').css('top','19%');
    
})
$('.tab_title2').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-66']);
    $('.tab').fadeOut(1).eq(1).fadeIn(1);
	rule_calculate( b_bar,b_word)
    $('.tab_title1').css('top','19%');
    $('.tab_title2').css('top','17.5%');
})
/*rule 滚动条*/
/*计算内容与容器百分比*/
var rule_img_h, rule_con_h, rule_score,fu_h,bian,bian2,bili,rule_touch;
var a_bar=$('.bar_inner');
var a_word=$('.rul_word');
var b_bar=$('.bar_inner');
var b_word=$('.rul_word');
function rule_calculate(a,b){
	a.css('top',0);
	b.css('top',0);
	rule_img_h=b.height();
	rule_con_h=$('.rul_con').height();
	rule_score=rule_con_h/rule_img_h;
	/*滚动条内部高度是百分百计算的*/
	fu_h=$('.bar').height();
	a.height(fu_h*rule_score);

	bian=fu_h*(1-rule_score);
	bian2=rule_img_h*(1-rule_score);
	bili=fu_h/rule_img_h;
	/*设置开始位置 和结束位置*/
	var startY,endY,move_dis;

	a.on('touchstart',function(e) {
	    rule_touch = e.originalEvent.targetTouches[0]; 
		if(biao_hengshu==1){
			startY = rule_touch.pageY;
	    }else if(biao_hengshu==2){
			startY = rule_touch.pageX;
	    }
		var start_top=a.css('top');
		a.on('touchmove',function(e) {
		  	rule_touch = e.originalEvent.targetTouches[0]; 
		  	if(biao_hengshu==1){
				endY = rule_touch.pageY;
		    }else if(biao_hengshu==2){
				endY = rule_touch.pageX;
		    }
		  	if(biao_hengshu==1){
				move_dis=endY-startY;
		    }else if(biao_hengshu==2){
				move_dis=startY-endY;
		    }
		  	var bai=parseInt(start_top)+move_dis;
		  	if(bai>bian){
		  		bai=bian;
		  	}
		  	else if(bai<=0){
		  		bai=0
		  	}
		  	a.css('top',bai+"px");
		  	b.css('top',-(bai/bili)+"px");
		});
	});
	a.on('touchend',function(e) {
		a.on('touchmove',function(e) {
		  	return null;
		});
	});
	//图片 touch
	b.on('touchstart',function(e) {
	    rule_touch = e.originalEvent.targetTouches[0]; 
	    if(biao_hengshu==1){
			startY = rule_touch.pageY;
	    }else if(biao_hengshu==2){
			startY = rule_touch.pageX;
	    }
		var start_top=b.css('top');
		b.on('touchmove',function(e) {
		  	rule_touch = e.originalEvent.targetTouches[0]; 
		  	if(biao_hengshu==1){
				endY = rule_touch.pageY;
		    }else if(biao_hengshu==2){
				endY = rule_touch.pageX;
		    }
		  	// endY = rule_touch.pageY;
		  	if(biao_hengshu==1){
				move_dis=endY-startY;
		    }else if(biao_hengshu==2){
				move_dis=startY-endY;
		    }
		  	var bai=parseInt(start_top)+move_dis;
		  	if(bai<-bian2){
		  		bai=-bian2;
		  	}
		  	else if(bai>=0){
		  		bai=0
		  	}
		  	a.css('top',-(bai*bili)+"px");
		  	b.css('top',bai+"px");
		});
	});
	b.on('touchend',function(e) {
		b.on('touchmove',function(e) {
		  	return null;
		});
	});
}
/***********棒棒糖世界大图滚动***********/
var big_pic_time,s_Y,e_Y,big_touch,move_reduce;
function big_pic(){
	var start=0;
	var mm=start/100;
	$(".swiper-pagination span").css('background','#1794ff').eq(mm).css('background','#ffffff')
	$('.swiper-wrapper').css('left',start+'%');
	big_pic_time=setInterval(go,2000);

	function go(){
		start-=100;
		if(start<=-400){
			start=0;
		}
		mm=-parseInt(start/100);
		if(mm==0){
			// _utaq.push(['trackEvent','btn-48'])
		}else if(mm==-100){
			// _utaq.push(['trackEvent','btn-49'])
		}else if(mm==-200){
			// _utaq.push(['trackEvent','btn-50'])
		}else if(mm==-300){
			// _utaq.push(['trackEvent','btn-51'])
		}
		$(".swiper-pagination span").css('background','#1794ff').eq(mm).css('background','#ffffff')
		$('.swiper-wrapper').css('left',start+'%');
	}

	$('.page5_con').on('touchstart',function(e) {
		clearInterval(big_pic_time);
	    big_touch = e.originalEvent.targetTouches[0]; 
	    if(biao_hengshu==1){
			s_X = big_touch.pageX;
	    }else if(biao_hengshu==2){
			s_X = big_touch.pageY;	
		}

		$('.page5_con').on('touchmove',function(e) {
		  	big_touch = e.originalEvent.targetTouches[0]; 
		  	if(biao_hengshu==1){
		  		e_X = big_touch.pageX;
		    }else if(biao_hengshu==2){
		  		e_X = big_touch.pageY;
		    }
	  		move_reduce=e_X-s_X;
	  		start=-mm*100;
		});
	});
	$('.page5_con').on('touchend',function(e) {
			if(move_reduce>0){
	  			// 右划
	  			mm--;
	  			if(mm<=0){
		  			mm=0
		  		}
	  			
	  		}
	  		else if(move_reduce<0){
	  			// 左滑
	  			mm++;
		  		if(mm>=3){
		  			mm=3
		  		}
	  		}
	  		start=-mm*100;
		$(".swiper-pagination span").css('background','#1794ff').eq(mm).css('background','#ffffff')
	  	$('.swiper-wrapper').css('left',start+'%');

		big_pic_time=setInterval(go,2000);

		$('.page5_con').on('touchmove',function(e) {
		  	return null;
		});
	});
}
/***************棒棒糖世界大图滚动***************/
// 微信分享
var shareTime = {
		    desc: '来侦探大挑战，赢IPad及柯南限量好礼~点击送50积分！',
		    img: 'http://alpenliebe.com.cn/conan/static/mobile/img/share.jpg'
		};
// 传给后台的地址
var myurl=window.location.href;
weixin(myurl);
function weixin(myurl){
 	$.ajax({
   		type: "GET",
   		dataType: 'json',
   		url: urlhead+"?control=Api&action=wxShare",
   		data:{url:myurl},
	   	success: function(data){
	   		// 通过config接口注入权限验证配置
	       wx.config({
	            debug: false,
	            appId: data.appId,
	            timestamp: data.timestamp,
	            nonceStr: data.nonceStr,
	            signature: data.signature,
	            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
	        });
	        var otitle = '名侦探总动员';
	        var desc =shareTime.desc;
	        // 分享后B用户打开的地址
	        var olink ='http://alpenliebe.com.cn/conan/index.html?isB=true';
	        var oimgUrl = shareTime.img;
	        wx.ready(function (){
	            wx.onMenuShareTimeline({
	                title: desc,
	                desc:  desc,
	                link:  olink,
	                imgUrl: oimgUrl,
	                success: function () {
	                    // 用户确认分享后执行的回调函数
	                    $('.share_fu').fadeOut();
	                    $('.share_fu_w').fadeOut();
	                     weixin_done();

	                },
	                cancel: function () { 
	                    // 用户取消分享后执行的回调函数
	                }
	            });
	            wx.onMenuShareAppMessage({
	                title: otitle,
	                desc:  desc,
	                link: olink,
	                imgUrl: oimgUrl,
	                success: function () { 
	                    //alert(shareObject.link);
	                    // 用户确认分享后执行的回调函数
	                    $('.share_fu').fadeOut();
	                    $('.share_fu_w').fadeOut();
	                     weixin_done();
	                },
	                cancel: function () { 
	                    // 用户取消分享后执行的回调函数
	                }
	            });
	    	});
	    }
    });
}
// 判断分析是否加积分的函数
function weixin_done(){
    $.ajax({
       type: "GET",
       dataType: 'json',
       url: urlhead+"?control=Api&action=shareCallback",
       success: function(data){
            if(data.state==0){
            	//当天用户已分享，不能获得积分;
            }
            else if(data.state==1){
            	//操作成功，获得积分;
            }
        }
    });
}

/**************page3  prize_list 滚动*****************/
var i=0;
var m=null;
var n=null;
function run(){
	if(bi>1){
		i--;
		if(i<=-100*bi){
			i=0;
			clearInterval(m);
			n=setTimeout(function(){
				m=setInterval(run,10);
			},10)
		}
		$('#inner').css('top',i+'%');
	}
}
//获奖名单
function prize_list(){
    $.ajax({
       type: "GET",
       dataType: 'json',
       url: urlhead+"?control=Api&action=getWinlist",
       success: function(data){
       	var	list_name='';
            if(data.state==1){
            	if(data.data.length==0){
					// 没有记录
					$('.page3_prize_in').html('<div class="each"><br>还没有人中奖</div>');
				}
				else{
					// 有记录
	            	for (var i = 0; i < data.data.length; i++){ 
	            	 	list_name+='<div class="each">'+data.data[i].name+'<br>'+data.data[i].phone+'</div>';
	            	}
					$('.page3_prize_in').html(list_name);
					changeScene();
					var inner_h=$('#inner').height();
					var outer_h=$('#outer').height();
					
					if(inner_h>outer_h){
						$('.page3_prize_in').html(list_name+list_name);
						bi=inner_h/outer_h;
						m=setInterval(run,10);
					}
				}
            }
            else if(data.state==0){
            	$('.page3_prize_in').html('<div class="each"><br>还没有人中奖</div>');

            	var inner_h=$('#inner').height()/2;
				var outer_h=$('#outer').height();
				bi=inner_h/outer_h;
				m=setInterval(run,10);
				changeScene();
            }
        }
    });
}

/*********************正则表达式*************************/
var check_input1,check_input2,check_input3;
function id_check(id_now){
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if (!(reg.test(id_now))) {
		alert('身份证格式不正确');
        check_input1=false;
    }
    else{
    	check_input1=true
    }
}
function phone_check(phone_now){
	var reg = /^1[358]\d{9}$/;
	if (!(reg.test(phone_now))) {
		alert('联系方式格式不正确');
        check_input2=false;
    }
    else{
    	check_input2=true;
    }
}
function code_check(code_now){
	var reg = /[1-9]\d{5}(?!\d)/;
	if (!(reg.test(code_now))) {
		alert('邮编格式不正确');
       	check_input3=false;
    }
    else{
    	check_input3=true;
    }
}

// 分享点击
$('#weixin').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-6'])
})

$('#cqq').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-7'])
})
$('#qzone').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-8'])
})
$('#tsina').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-67'])
})
$('#tqq').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-68'])
})
$('#jabot').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-69'])
})


//侦探登录
$('#btn-48').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-10']);
})

$('.tang1').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-高级牛奶味']);
})
$('.tang2').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-草莓牛奶味']);
})
$('.tang3').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-香橙牛奶味']);
})
$('.tang4').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-香草可乐味']);
})
$('.tang5').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-热带水果味']);
})
$('.tang6').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-荔枝牛奶味']);
})
$('.tang7').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-柠檬牛奶味']);
})
$('.tang8').on(evStart,function(){
	// _utaq.push(['trackEvent','btn-52-葡萄牛奶味']);
})