$(function(){
	$("#time").datepicker();
	
	var wid = $(document).width();
	var hei = $(document).height();
	
	$("#box_bg").css({"width":wid,"height":hei});
	
	/*关闭弹窗*/
	$(".tc_box .close").click(function(){
		$(this).parent().hide();
		$("#box_bg").hide();
	});
	$(".tc_box_bottom .cancel").click(function(){
		$(this).parent().parent().hide();
		$("#box_bg").hide();
	});
	
	/*实名认证*/
	$("#renzheng").click(function(){
		$(".tc_box ").hide();
		$("#box_bg").show();
		$(".renzheng1").show();
	})
	
	$(".renzheng1 .btn").eq(0).click(function(){
		$("#box_bg").hide();
		$(".renzheng1").hide();
	})
	$(".renzheng1 .btn").eq(1).click(function(){
//		$.ajax({
//			type : "POST",
//			url : "",
//			data : "",
//			beforeSend:function(){
//				$(".renzheng1").hide();
//				$(".renzheng2").show();
//			}
//			success : function(data){
//				$(".renzheng1").hide();
//				$(".renzheng3").show();
//			}
//		});
	})
	
	/*修改手机号*/
	$("#modify_mobile").click(function(){
		$(".tc_box ").hide();
		$("#box_bg").show();
		$(".modify_mobile1").show();
	})
	$(".modify_mobile1 .btn").click(function(){
		var yzm = $(".modify_mobile1 .code_data").val();
		$.ajax({
			type:"POST",
			url:"",
			data:"yzm="+yzm, //向后台发送用户输入的验证码
			success:function(data){// data为1，则验证码正确
				if(data==1){//验证码填写正确继续要一步
					$(".tc_box ").hide();
					$(".modify_mobile2").show();
				}
			}
		})
	})
	/*获取验证码*/
	$(".modify_mobile1 .get_code").click(function(){
		//ajax向后台请求发送验证码到手机
		$.ajax({
			type:"GET",
			url:"",
			data:"",
			success:function(data){//data:返回的验证码
				
			}
		})
	})
	$(".modify_mobile2 .save").click(function(){
		var newphone = $("#newphone").val();
		var yzm = $(".modify_mobile2 .code_data").val();
		
		$.ajax({
			type:"POST",
			url:"",
			data:"yzm="+yzm+"&phone="+newphone, //向后台发送用户输入的验证码和新的手机号
			success:function(data){// 
				$(".tc_box ").hide();
				$(".modify_mobile3").show();
			}
		})
	})
	
	/*保存修改手机号码*/
	$(".modify_mobile2 .save").click(function(){
		$.ajax({
			type:"GET",
			url:"",
			data:"",
			success:function(data){
				$(".tc_box ").hide();
				$(".modify_mobile3").show();
			}
		})
	})
	
	/*绑定邮箱*/
	$("#bind_emil").click(function(){
		$(".tc_box ").hide();
		$("#box_bg").show();
		$(".reset_email1").show();
	})
	/*获取验证码*/
	$(".reset_email1 .get_code").click(function(){
		//ajax向后台请求发送验证码到手机
		$.ajax({
			type:"GET",
			url:"",
			data:"",
			success:function(data){//data:返回的验证码
				
			}
		})
	})
	$(".reset_email1 .btn").click(function(){
		var yzm = $(".reset_email1 .code_data").val();
		$.ajax({
			type:"POST",
			url:"",
			data:"yzm="+yzm, //向后台发送用户输入的验证码
			success:function(data){// data为1，则验证码正确
				if(data==1){//验证码填写正确继续要一步
					$(".tc_box ").hide();
					$(".reset_email2").show();
				}
			}
		})
	})
	
	$(".reset_email2 .btn").click(function(){
		var email =$("#cemail").val();
		//ajax向后台发送邮箱
		$.ajax({
			type:"POST",
			url:"",
			data:"email="+email,
			success:function(data){//data:返回的验证码
				$(".tc_box ").hide();
				$(".reset_email3").show();
			}
		})
	});
	/*重置登录密码*/
	$("#reset_password").click(function(){
		$(".tc_box ").hide();
		$("#box_bg").show();
		$(".reset_password1").show();
	})
	/*获取验证码*/
	$(".reset_password1 .get_code").click(function(){
		//ajax向后台请求发送验证码到手机
		$.ajax({
			type:"GET",
			url:"",
			data:"",
			success:function(data){//data:返回的验证码
				
			}
		})
	})
	$(".reset_password1 .btn").click(function(){
		var yzm = $(".reset_password1 .code_data").val();
		$.ajax({
			type:"POST",
			url:"",
			data:"yzm="+yzm, //向后台发送用户输入的验证码
			success:function(data){// data为1，则验证码正确
				if(data==1){//验证码填写正确继续要一步
					$(".tc_box ").hide();
					$(".reset_password2").show();
				}
			}
		})
	})

	$(".reset_password2 .save").click(function(){
		$.ajax({
			type:"POST",
			url:"",
			data:"", //向后台发送用户输入的验证码
			success:function(data){// data为1，则验证码正确
				$(".tc_box ").hide();
				$(".reset_password3").show();
			}
		})
	})
	
	/*修改支付密码*/
	$("#set_password").click(function(){
		$(".tc_box ").hide();
		$("#box_bg").show();
		$(".modify_password1").show();
	})
	/*获取验证码*/
	$(".modify_password1 .get_code").click(function(){
		//ajax向后台请求发送验证码到手机
		$.ajax({
			type:"GET",
			url:"",
			data:"",
			success:function(data){//data:返回的验证码
				
			}
		})
	})
	$(".modify_password1 .btn").click(function(){
		var yzm = $(".modify_password1 .code_data").val();
		$.ajax({
			type:"POST",
			url:"",
			data:"yzm="+yzm, //向后台发送用户输入的验证码
			success:function(data){// data为1，则验证码正确
				if(data==1){//验证码填写正确继续要一步
					$(".tc_box ").hide();
					$(".modify_password2").show();
				}
			}
		})
	})
	$(".modify_password2 .save").click(function(){
		$.ajax({
			type:"POST",
			url:"",
			success:function(data){
				$(".tc_box ").hide();
				$("#box_bg").hide();
			}
		});
	})
})
