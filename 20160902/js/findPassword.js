$(function(){
	var tel = $("#tel").val();
	var password1 = $("#password").val();
	var reg = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
//	$("#tel").blur(function(){
//		if( tel!="" && !(reg.test(tel))){
//			$("#tel").parent().remove(".error");
//			$("#tel").parent().append("<label class='error'>* 请输入正确的的手机号码</label>");
//		}
//	})
	
	$(".reg .btn").click(function(){
		$("#tel").parent().remove($(".error"));
		
		if($("#tel").val()==""){
			//$("#tel").parent().remove($(".error"));
			$("#tel").parent().append("<label class='error'>* 请输入需要找回密码的手机号码</label>");
		}
//		}else if(!reg.test($("#tel").val())){
//		//if(!reg.test(tel)){
//			$("#tel").parent().remove($(".error"));
//			$("#tel").parent().append("<label class='error'>* 请输入正确的的手机号码</label>");
//		}
		
	})
})
