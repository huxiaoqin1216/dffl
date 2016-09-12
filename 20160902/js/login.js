// JavaScript Document

$(document).ready(function() {
	
	//设置默认属性
	$.validator.setDefaults({       
		submitHandler: function(form) {    
			//form.submit();
			//加密
			var cellphone=$('#tel').val();
			var password1=$('#password').val();
			var vcode2=$('#vcode2').val();
			/*var ret_url = $('#ret_url').val();*/
			$.post("",{cellphone:cellphone,password:password1,vcode2:vcode2},
			function (res){
				
			});
			return false;	   
		}
	}),
	
	//开始验证
	$("#reg").validate({						  
		rules: {
			//手机号码
			tel: {
				required: true,
			},
			//密码
			password: {
				required: true
			},
			vcode2:{
				required: true,
			}
		},
		
		//设置错误信息存放标签
		errorElement: "label",
		
		//设置提示信息
		messages:{
			tel:{
				required:"* 请输入您的手机号码"
			},
			password:{
				required:"* 请输入密码"
			},
			vcode2:{
				required:"* 请输入验证码"
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
