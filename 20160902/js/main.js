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
	
	$(".sina").hover(function(){
		$(".sys").show();
	},function(){
		$(".sys").hide();
	})
	
	
	//添加右侧导航
	var $inner= '<div class="right_nav"><a class="right_nav_a1" href="javascript:void(0);"><img src="img/index/ewm.png"></a><a class="right_nav_a2" href="javascript:void(0);"></a><a class="right_nav_a3" href="javascript:void(0);"></a><a class="right_nav_a4" href="javascript:void(0);"></a><a class="right_nav_a5" href="javascript:void(0);"></a></div>';
	$("body").prepend($inner);
	
	/*右侧导航回到顶部*/
	$(".right_nav_a5").click(function(){
		$("body,html").animate({scrollTop:0},1000);
		return false;
	})
	
	$(".pc_banner ul .perlist").hover(function(){
		$(this).find("span").css({"display":"inline-block"});
		$(this).find("p").hide();
	},function(){
		$(this).find("span").css({"display":"none"});
		$(this).find("p").show();
	})
	
	/*左侧导航*/
	var ali = $("#left_nav li");
	ali.click(function(){
		ali.find("ul").slideUp();
		ali.removeClass("on");
		if($(this).find("ul").css("display")=="none"){
			$(this).find("ul").slideDown();
			$(this).addClass("on");
		}else{
			$(this).find("ul").slideUp();
 			$(this).addClass("on");
		}
	})
	
	
	$(".tc_right .file_del .del").click(function(){
		$(this).parent().hide();
		$(".tc_right .p1").show();
	})
	
	/*安全保障*/
	$(".ins_banner_btn a").bind("click",function(){
		$(".ins_banner_btn a").removeClass("active");
		$(this).addClass("active");
	});
	$('.ins_banner_btn a').eq(0).bind('click', function() {
		$('html,body').animate({
			scrollTop: "800px"
		}, 800);
		return false;
	})
	$('.ins_banner_btn a').eq(1).bind('click', function() {
		$('html,body').animate({
			scrollTop: "1540px"
		}, 800);
		return false;
	})
	$('.ins_banner_btn a').eq(2).bind('click', function() {
		$('html,body').animate({
			scrollTop: "2350px"
		}, 800);
		return false;
	})
	$('.ins_banner_btn a').eq(3).bind('click', function() {
		$('html,body').animate({
			scrollTop: "3370px"
		}, 800);
		return false;
	})
	
	$(".ins_info_box").hover(function(){
		$(this).find("h3").addClass("fadeInDown");
		$(this).find("p").addClass("fadeInUp");
	},function(){
		$(this).find("h3").removeClass("fadeInDown");
		$(this).find("p").removeClass("fadeInUp");
	})
	
	$(".ins_info_con_img").hover(function(){
		$(this).addClass("rotate");
	},function(){
		$(this).removeClass("rotate");
	})
	
	
	/*新手指引*/
	$(".problem_tit ul li").click(function(){
		$(".problem_tit ul li").removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$(".problem_con .problem_list").hide();
		$(".problem_con .problem_list").eq(index).show();
	})
	
	var value = window.location.href;
	var aa = value.substring(value.indexOf('=')+1,value.length);
	$(".problem_tit ul li").eq(aa).trigger('click');
	
	$(".problem_list ul li").click(function(){
		$(".problem_list ul li p").slideUp();
		if($(this).find("p").css("display")=="none"){
			$(this).find("p").slideDown(100);
		}else{
			$(this).find("p").slideUp(50);
		}
	})
	
	/*网站公告*/
	$(".list_tit a").click(function(){
		$(".list_tit a").removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$(".list_ul").hide();
		$(".list_ul").eq(index).show();
	})
	
	$(".list_con").each(function(){
		$(this).children().clone().appendTo($(".list_all"));
	})
	
	/*加入我们*/
//	$(".join ul li").not(".jobTit").click(function(){
//		$(".join ul li .job_detail").animate({"height":"hide"},200);
//		$(".join ul li").removeClass("active");
////		var index = $(this).index();
//		if($(this).find(".job_detail").css("display")=="none"){
//			$(this).addClass("active");
//			$(this).find(".job_detail").animate({"height":"show"},200);
//		}else{
//			$(this).removeClass("active");
//			$(this).find(".job_detail").animate({"height":"hide"},200);
//		}
//	})
	$("#job_list li").click(function(){
		$(".job_tc").hide();
		$(".job_tc").eq($(this).index()).show()
		$(".job_tc").find(".job_tc_con").mCustomScrollbar({
			scrollInertia:100
		});
	})
	$(".job_tc .close").click(function(){
		$(this).parent().hide();
		$(this).parent().find(".mCSB_draggerContainer").hide();
	})
	
	/*投资*/
	$("#tzje").val($("#min_m").html());
	var min =parseInt($("#min_m").html());
	var max =parseInt($("#max_m").html());
	var step =parseInt($("#step_m").html());
	
	$("#minus").click(function(){
		var val = parseInt($("#tzje").val());
		if(val>min){
			$("#tzje").val(val-step);
		}else{
			$("#tzje").val(min);
		}
	})
	$("#plus").click(function(){
		var val = parseInt($("#tzje").val());
		if(val<max){
			$("#tzje").val(val+step);
		}else{
			$("#tzje").val(max);
		}
	})
	
	/**/
	$("#mstz").click(function(){
		var mon = $("#tzje").val();
		$.ajax({
			type: POST,
			url:"",
			data:"mon="+mon,
			success: function(data){
				alert("投资成功");
			}
		});
	})
	
	if(parseInt($(".jindu i").html())<100){
		$(".jindu .jindu_jd").css({"width":parseInt($(".jindu i").html())+'%'});
	}else{
		$(".jindu .jindu_jd").css({"width":parseInt($(".jindu i").html())+'%',"border-radius":"7px"});
	}
	
	//我要投资
	$(".userMain-recharge-list li").click(function(){
		$(".userMain-recharge-list li").removeClass("focus");
		$(this).addClass("focus");
	})
	$(".addCard li").not(".noborder").click(function(){
		$(".addCard li").removeClass("active");
		$(this).addClass("active");
	})
	$(".yListr em").click(function(){
		$(".yListr em").removeClass("yListrclickem");
		$(".yListr em i").removeClass("i-icoUserSelected");
		$(this).find("i").addClass("i-icoUserSelected");
		$(this).addClass("yListrclickem");
	})
	
	//投资页面
	$(".investment_details_tit ul li").click(function(){
		$(".investment_details_tit ul li").removeClass("active");
		$(".investment_details_box").hide();
		$(this).addClass("active");
		$(".investment_details_box").eq($(this).index()).show();
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


