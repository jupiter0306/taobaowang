
$(document).ready(function(e) {
    changeImg();
    TmallchangeImg();
    shownav();
    showsys();
    fixedsheet();


});

function changeImg(){
    //定义i变量为动态控制图片轮播做准备，i的值与每张图片进行一一的对应
    var i=0;
    //时间变量，为自动轮播以及对光标的影响做出相应的反应
    var timer=null;

    //默认情况下的第一个圆点进行背景设计
    $('#ad_num li').first().addClass('active');

    //将第一张图片复制并添加到img部分下与前五张图片相接
    var firstimg=$('#ad_img li').first().clone(); //复制第一张图片  
    $('#ad_img').append(firstimg).width($('#ad_img li').length*($('#ad_img img').width()));


    //定时器自动轮播
    timer=setInterval(function(){
        i++;
        if (i==$('#ad_img li').length) {
            i=1;
            $('#ad_img').css({left:0});//保证无缝轮播，设置left值
        }
        //进行下一张图片
        $('#ad_img').stop().animate({left:-i*600},500);
        //圆点跟着变化
        if (i==$('#ad_img li').length-1) {
            $('#ad_num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('#ad_num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },3000);
    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('#ad').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('#ad_img li').length) {
                i=1;
                $('#ad_img').css({left:0});
            };
            //进行下一张图片
            $('#ad_img').stop().animate({left:-i*600},500);
            //圆点跟着变化
            if (i==$('#ad_img li').length-1) {
                $('#ad_num li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $('#ad_num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        },3000)
    });
    //上一个按钮
    $(":input[name='lefticon']").click(function(){
        i--;
        if (i==-1) {
            i=$('#ad_img li').length-2;
            $('#ad_img').css({left:-($('#ad_img li').length-1)*600});
        }
        $('#ad_img').stop().animate({left:-i*600},500);
        $('#ad_num li').eq(i).addClass('active').siblings().removeClass('active');
    });
    // 下一个按钮
    $(":input[name='righticon']").click(function(){
        i++;
        if (i==$('#ad_img li').length) {
            i=1; //这里不是i=0
            $('#ad_img').css({left:0});
        };
        $('#ad_img').stop().animate({left:-i*600},500);
        if (i==$('#ad_img li').length-1) { //设置小圆点指示
            $('#ad_num li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $('#ad_num li').eq(i).addClass('active').siblings().removeClass('active');
        };
 
    });
    //点下面的图标
    var $nums=$("#ad_num li");
    $nums.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        index=$nums.index(this);
        $('#ad_img').stop().animate({left:-index*600},500);
        
    })

    $("#ad").mouseover(function(){
        $(".icon").show();
    })
    $("#ad").mouseout(function(){
        $(".icon").hide();
    })
    
}

function TmallchangeImg(){

    var i=0;

    var timer=null;

  
    $('#tmallnum li').first().addClass('active2');


    var firstimg=$('#tmalladimg li').first().clone(); //复制第一张图片  
    $('#tmalladimg').append(firstimg).width($('#tmalladimg li').length*($('#tmalladimg img').width()));

    timer=setInterval(function(){
        i++;
        if (i==$('#tmalladimg li').length) {
            i=1;
            $('#tmalladimg').css({left:0});
        }
        //进行下一张图片
        $('#tmalladimg').stop().animate({left:-i*600},500);
        if (i==$('#tmalladimg li').length-1) {
            $('#tmallnum li').eq(0).addClass('active2').siblings().removeClass('active2');
        }else{
            $('#tmallnum li').eq(i).addClass('active2').siblings().removeClass('active2');
        }
    },5000);
    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('#tmallad').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            i++;
            if (i==$('#tmalladimg li').length) {
                i=1;
                $('#tmalladimg').css({left:0});
            };
            //进行下一张图片
            $('#tmalladimg').stop().animate({left:-i*600},600);
            if (i==$('#tmalladimg li').length-1) {
                $('#tmallnum li').eq(0).addClass('active2').siblings().removeClass('active2');
            }else{
                $('#tmallnum li').eq(i).addClass('active2').siblings().removeClass('active2');
            }
        },5000)
    });
    //上一个按钮
    $(":input[name='lefticon1']").click(function(){
        i--;
        if (i==-1) {
            i=$('#tmalladimg li').length-2;
            $('#tmalladimg').css({left:-($('#tmalladimg li').length-1)*600});
        }
        $('#tmalladimg').stop().animate({left:-i*600},600);
        $('#tmallnum li').eq(i).addClass('active2').siblings().removeClass('active2');
    });
    // 下一个按钮
    $(":input[name='righticon1']").click(function(){
        i++;
        if (i==$('#tmalladimg li').length) {
            i=1; //这里不是i=0
            $('#tmalladimg').css({left:0});
        };
        $('#tmalladimg').stop().animate({left:-i*600},600);
        if (i==$('#tmalladimg li').length-1) { 
            $('#tmallnum li').eq(0).addClass('active2').siblings().removeClass('active2');
        }else{
            $('#tmallnum li').eq(i).addClass('active2').siblings().removeClass('active2');
        };
 
    });
    var $nums=$("#tmallnum li");
    $nums.click(function(){
        $(this).addClass("active2").siblings().removeClass("active2");
        index=$nums.index(this);
        $('#tmalladimg').stop().animate({left:-index*600},600);
        
    })

    $("#tmallshow").mouseover(function(){
        $(".icon2").show();
    })
    $("#tmallshow").mouseout(function(){
        $(".icon2").hide();
    })
    
}

function shownav(){
    
    var $li=$("#leftsearchlist li");
    $li.mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("#hiddentable").fadeIn();
        
    }).mouseleave(function(){
        $(this).removeClass("active");
        $("#hiddentable").hide(); 
    })
  

    
    $("#hiddentable").mouseover(function(){
        $("#hiddentable").show();
    }).mouseleave(function(){
        $("#hiddentable").hide();  
    })


} 

   function showsys(){
        $("#rightnavbtn1").mouseover(function(){
            $("#saoyisao").show();
        }).mouseleave(function(){
            $("#saoyisao").hide();
        })

    }

    function fixedsheet(){
        var sheet=$("#indexsheet");
        var win=$(window);
        var sc=$(document);
        win.scroll(function(){
            if(sc.scrollTop()>=1300){
                sheet.addClass("fixedsheet");
            }
            else{sheet.removeClass("fixedsheet");}
        })        
    }




  

 