// JavaScript Document

$(document).ready(function() {
	
	//设置默认属性
	$.validator.setDefaults({       
		submitHandler: function(form) {    
			//form.submit();
			//加密
			var password=$('#password').val();
			var confirmpassword=$('#confirm_password').val();
			var cellphone=$('#tel').val();
			var vcode=$('#vcode').val();
			var vcode2=$('#vcode2').val();
			/*var ret_url = $('#ret_url').val();*/
			$.post("",{password:password,confirmpassword:confirmpassword,cellphone:cellphone,vcode:vcode,vcode2:vcode2},
			function (res){
//				if(res&&res.code==200){				
//					alert('恭喜您，注册成功啦');
//					setTimeout(function(){
//						if(res.ret_url)
//							document.location.href=res.ret_url;
//						else
//							document.location.href="";					
//					},300);
//				}
//				else{
//					alert(res.msg);
//					//$('#vcodeImg').attr('src','/public/vcode?rnd='+Math.random());
//				}
			}, "json");
			return false;	   }
	}),
	
	//开始验证
	$("#reg").validate({						  
		rules: {
			//用户名
			cname: {
				required: true,
				stringCheck:true,
				byteRangeLength:[4,15]
			},
			//密码
			password: {
				required: true,
				isPassword: true
			},
			//确认密码
			confirm_password: {
				required: true,
				equalTo: "#password"
			},
			vcode:{
				required: true,
			},
			vcode2:{
				required: true,
			},
			//邮箱
			email: {
				required: true,
				email: true
			},
			//手机号码
			tel: {
				required: true,
				isMobile: true
			}
		},
		
		//设置错误信息存放标签
		errorElement: "label",
		
		//设置提示信息
		messages:{
			cname:{
				required:"* 请设置您的用户名",
//				stringCheck:"* 只能包括中文字、英文字母、数字和下划线(以汉字或者英文字母开头)",
//				byteRangeLength: "* 用户名必须在4-15个字符之间(一个中文字算2个字符)"
			},
			tel:{
				required:"* 请输入您的手机号码"
			},
			password:{
				required:"* 请输入密码"
			},
			vcode:{
				required:"* 请输入手机验证码"
			},
			vcode2:{
				required:"* 请输入验证码"
			},
			confirm_password:{
				required:"* 请再次输入密码"
			}
		},
		
		//指定错误信息位置
		errorPlacement: function (error, element) { 
      		/*if (element.is(':radio') || element.is(':checkbox')) {
          		var eid = element.attr('name');
          		error.appendTo(element.parent());
      		} else {
          		error.insertAfter(element);
     		}*/
			error.insertAfter(element);
		},

		
		//设置验证触发事件
		focusInvalid: true 

		//设置验证成功提示格式
		/*success:function(e)
		{
    		e.html("&nbsp;").addClass("valid").text('ok');
		}*/
	})
});
