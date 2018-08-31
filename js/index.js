var wrap = $('#wrap');
var ww = window.innerWidth;
var wh = window.innerHeight;
var biao_hengshu;
$('body').css({
    'width':ww+'px',
    'height':wh+'px'
});
document.addEventListener('touchmove',function(event){
    event.stopPropagation();
    event.preventDefault();
    return false;
});
function changeScene(){
    var iniW = 1000,
        iniH = 569,
        iniW_s = 953,
        iniH_s = 640,
        tarW = 0,
        tarH = 0;
    ww = window.innerWidth;
    wh = window.innerHeight;
    if(ww > wh){   
        //如果浏览器的宽度大于高度，说明是横屏的，
        biao_hengshu=1;
        $('.game_num').css('font-size','25px');
        $('#share_jia').removeClass('jiathis_style_32x32').addClass("jiathis_style_24x24");
        $('.luo_points').css('font-size','12px');
        $('.page6_ban').css('width','94.8%');
        $('.user_down_word').css('font-size','16px')
        $('.each').css('font-size','20px');
        $('.page3_prize_out').css('margin-top','15%');
        $('.page3_tan_close').css('top','-19%');
        $('.page3_tan_close1').css('top','-4%');
        $('.share_fu_w img').hide().eq(0).show();
        $('.rule_ban').css('width','68.8%');
        $('.lvjing2').css({'height':0.732*window.innerWidth,'margin-top':-0.366*window.innerWidth});
        $('.lvjing3').css({'height':0.732*window.innerWidth,'margin-top':-0.366*window.innerWidth});
        $('.lvjing5').css({'height':0.732*window.innerWidth,'margin-top':-0.366*window.innerWidth});
        $('.lvjing_rule').css({'height':0.732*window.innerWidth,'margin-top':-0.366*window.innerWidth});
        $('.lvjing_personal').css({'height':0.732*window.innerWidth,'margin-top':-0.366*window.innerWidth});
        /*$('.page3 .logo_kenan').css('bottom','11%');*/
        $('.user_pic').css('height',0.16*window.innerWidth);
        $('.turnplate_box').css({'height':0.407*window.innerWidth,'margin-top':-0.203*window.innerWidth});
        $('.loading p').css({'font-size':'37px','height':'15%','margin-top':'-5%'});
        $('.loading img').css({'width':window.innerHeight,'margin-left':-0.5*window.innerHeight,'left':'50%'});
        $('.t div').css({'font-size':'16px'});
        $('.unit').css({'font-size':'13px'});
        $('.personal_ban').css({'height':0.6*window.innerWidth,'margin-top':-0.3*window.innerWidth});
        $('.page5_ban').css({'height':0.6*window.innerWidth,'margin-bottom':-0.3*window.innerWidth});
        $('.page5_con').css({'height':0.35*window.innerWidth,'margin-bottom':-0.2*window.innerWidth})
        $('.time_num').css({'font-size':'13px'});
        $('.personal_int').css({
            'font-size': '30px'
        })
        $('.personal_name').css({
            'font-size': '15px'
        })
        $('.got_ifo').css({
            'font-size': '20px'
        })

        $('.s_word3').css({ 'bottom': '12%'});
        $('.game_jifen').css({'font-size':'16px'});
        $('.page3_point').css({'margin-bottom':'-16%'});
        $('.luo_point').css({'margin-bottom':'-16%'});
        $('.luo_tianxie').css({'top': '8%','right': '19%','width': '50%','height': '100%'})

        $('.tianxie').css({'top': '8%','right': '19%','width': '50%','height': '100%'})
        $('.personal_point').css({'margin-bottom':'-16%'});
        $('.personal_tianxie').css({'top': '8%','right': '19%','width': '50%','height': '100%'})
        $('.int').css({'font-size':'37px','bottom':'41.5%'});
        tarW = ww;
        tarH = tarW*iniH/iniW;
        $('body').css({
            'width':ww+'px',
            'height':wh+'px'
        });
        wrap.css({
            'width':ww + 'px',
            'height':wh + 'px',
            'transform':'translate3d(-50%,-50%,0)',
            '-webkit-transform':'translate3d(-50%,-50%,0)'
        });

        $('.kenan').css({
            'height':'80% ',
            'width':'56%',
            'margin-left':'-29%',
            'top':'2% ',
        })

    }
    else if(ww <= wh){  
        //如果浏览器的宽度小于高度，说明是竖的
         biao_hengshu=2;
        $('.game_num').css('font-size','35px');
        $('#share_jia').removeClass('jiathis_style_24x24').addClass("jiathis_style_32x32");
        $('.luo_points').css('font-size','24px');
        $('.page6_ban').css('width','100%');
        $('.user_down_word').css('font-size','23px')
        $('.each').css('font-size','35px');
        $('.page3_prize_out').css('margin-top','20%');
         $('.page3_tan_close').css('top','-5%');
         $('.page3_tan_close1').css('top','10%');
        $('.rule_ban').css('width','75.8%');
        $('.share_fu_w img').hide().eq(1).show();
        $('.lvjing2').css({'height':0.732*window.innerHeight,'margin-top':-0.366*window.innerHeight});
        $('.lvjing3').css({'height':0.732*window.innerHeight,'margin-top':-0.366*window.innerHeight});
        $('.lvjing5').css({'height':0.732*window.innerHeight,'margin-top':-0.366*window.innerHeight});
        $('.lvjing_rule').css({'height':0.732*window.innerHeight,'margin-top':-0.366*window.innerHeight});
        $('.lvjing_personal').css({'height':0.732*window.innerHeight,'margin-top':-0.366*window.innerHeight});
        $('.user_pic').css('height',0.16*window.innerHeight);
        $('.loading p').css({'font-size':'63px','height':'12%','margin-top':'-5%'});
        $('.loading img').css({'width':window.innerWidth,'margin-left':-0.5*window.innerWidth,'left':'50%'});
        $('.t div').css({'font-size':'29px'});
        $('.unit').css({'font-size':'24px'});
        $('.personal_ban').css({'height':0.6*window.innerHeight,'margin-top':-0.3*window.innerHeight});
        $('.page5_ban').css({'height':0.6*window.innerHeight,'margin-bottom':-0.3*window.innerHeight});
        $('.page5_con').css({'height':0.35*window.innerHeight,'margin-bottom':-0.2*window.innerHeight})
        $('.time_num').css({'font-size':'24px'});
       /* $('.page3 .logo_kenan').css('bottom','16%');*/
        $('.personal_int').css({
            'font-size': '52px'
        })
        $('.got_ifo').css({
            'font-size': '30px'
        })
        $('.game_jifen').css({'font-size':'16px'});
        $('.s_word3').css({ 'bottom': '0'})
        $('.personal_name').css({
            'font-size': '30px'
        })
        $('.page3_point').css({'margin-bottom':'-20%'});
        $('.luo_point').css({'margin-bottom':'-20%'});
        $('.luo_tianxie').css({'top': '13%','right': '20%','width': '50%','height': '80%'})
        $('.tianxie').css({'top': '13%','right': '20%','width': '50%','height': '80%'})
        $('.personal_point').css({'margin-bottom':'-20%'});
        $('.personal_tianxie').css({'top': '13%','right': '20%','width': '50%','height': '80%'})
        $('.int').css({'font-size':'50px','bottom':'41.5%'});
        $('.turnplate_box').css({'height':0.407*window.innerHeight,'margin-top':-0.203*window.innerHeight,});
        tarW = wh;
        tarH = tarW*iniH_s/iniW_s;
        $('body').css({
            'width':ww+'px',
            'height':wh+'px'
        });

        var w1=0.7*tarW*576;
        var w2=953*tarH
        var w=w1/w2;
        $('.kenan').css({
            'height':'70% ',
            'width':w*100+'%',
            'margin-left': '-'+w*50+'%',
            'top':'10% ',
        })
        $('#phoneCarousel').css({'width':'70%',"margin-left":'-35%'});

        wrap.css({
            'width':wh + 'px',
            'height':ww + 'px',
            'transform':'translate3d(-50%,-50%,0) rotate(90deg)',
            '-webkit-transform':'translate3d(-50%,-50%,0) rotate(90deg)'
        });
        
    }

}
