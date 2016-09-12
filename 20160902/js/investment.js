$(function(){
	/*理财项目切换*/
	$(".fproducts_name ul li").click(function(){
		$(".fproducts_name ul li").removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$(".fproducts_box").hide();
		$(".fproducts_box").eq(index).show();
	})
	
	/*项目筛选*/
	$(".more").click(function(){
		if($(this).parent().find(".condition_box1").css("display")=="none"){
			$(this).parent().find(".condition_box1").show();
			$(this).html("收起<i class='on'></i>");
		}else{
			$(this).parent().find(".condition_box1").hide();
			$(this).html("更多筛选条件<i></i>");
		}
	})
	
	/*筛选项*/
	$(".condition_box a").click(function(){
		$(this).parent().find("a").removeClass("active");
		$(this).addClass("active");
	})
	/*排序*/
	$(".fproducts_sort a").click(function(){
		$(".fproducts_sort a").removeClass("active");
		$(this).addClass("active");
	})
})
