$(function(){
	
	//头部二维码显示
	$(".weixin a,.ewm").hover(function(){
		$(".ewm").show();
		$(".weixin a").addClass("active");
	},function(){
		$(".ewm").hide();
		$(".weixin a").removeClass("active");
	})
	
	$(".myaccount").hover(function(){
		$(".grxx").show();
	},function(){
		$(".grxx").hide();
	})
	
	//banner
	jQuery(".slide_box").slide({mainCell:".bd ul",autoPlay:true});

	//文字滚动
	$(".txtScroll_top").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,easing:"swing"});
	
	
//	$(".login").animate({'top':'35px'},800);
	
	//体验专区
	$(".tyzq_box").mouseover(function(){
		var index = $(".tyzq_box").index($(this));
		$(".tyzq_img_txt").css({"display":"none"});
		$(".tyzq_img_txt").eq(index).css({"display":"block"});
	});
	//理财专区
	$(".lc_tab li").mouseover(function(){
		var index = $(".lc_tab li").index($(this));
		$(".lc_tab li").removeClass("active");
		$(this).addClass("active");
		$(".lczq_box").css({"display":"none"});
		$(".lczq_txt").css({"display":"none"});
		$(".lczq_box"+(index+1)).css({"display":"block"});
		$(".lczq_txt").eq(index).css({"display":"block"});
	})
	
	$(".lczq_box1").slide({mainCell:".bd ul",effect:"left",autoPlay:true,autoPage:true,trigger:"click",interTime:"4000"});
	$(".lczq_box2").slide({mainCell:".bd ul",effect:"left",autoPlay:true,autoPage:true,trigger:"click",interTime:"4000"});
	$(".lczq_box3").slide({mainCell:".bd ul",effect:"left",autoPlay:true,autoPage:true,trigger:"click",interTime:"4000"});
	
	var $inner= '<div class="right_nav"><a class="right_nav_a1" href="javascript:void(0);"><img src="img/index/ewm.png"></a><a class="right_nav_a2" href="javascript:void(0);"></a><a class="right_nav_a3" href="javascript:void(0);"></a><a class="right_nav_a4" href="javascript:void(0);"></a><a class="right_nav_a5" href="javascript:void(0);"></a></div>';
	$("body").prepend($inner);
	
	/*回到顶部*/
	$(".right_nav_a5").click(function(){
		$("body,html").animate({scrollTop:0},1000);
		return false;
	})
	$(window).bind('scroll', function() {
		var y = document.body.scrollTop || document.documentElement.scrollTop;
		var top=$(".footer_bg").offset().top-y;
		if(top<=800){
			$(".right_nav").css({"bottom":"500px"});
			return false;
		}
		$(".right_nav").css({"bottom":"100px"});
	});
	
})
