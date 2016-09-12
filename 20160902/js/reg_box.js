$(function(){
	$("#password").focus(function(){
		$(".passwordBox").addClass("focus");
	});
	$("#password").blur(function(){
		$(".passwordBox").removeClass("focus");
	});
})
/*密码安全等级*/
var app = {
init: function () {
	
	this.ui = {};
	this.ui.tips 		= $("#txtpwdTips");
	this.ui.txtPassowrd = $("#password");
	
	this.regEvent();
},
regEvent: function () {
	var _this = this;
	
	this.ui.txtPassowrd.keyup(function () {
		var reg  = /\s/;  //非空格
		var reg1 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{2,20}$/; //字母，数字和标点符号至少包含2种，2位-10位
		var reg2 = /(?=^.{3,20}$)(?=.*\d)(?=.*\W+)(?=.*[A-z])(?!.*\n).*$/; //由数字/大写字母/小写字母/标点符号组成，四种都必有，3位-20位

		var result ={
			isLength:true,
			isSpacing:true,
			isPwd1:true,
			isPwd2:true
		}//声明变量

		if ($(this).val().length==0){
			_this.ui.tips.find("i").attr("class","i_ipassTipsNormal");
			$(".passwordBox_grade div").removeClass();
			$(".passwordBox_gradeName").html("");
			return false;
		}
		if($(this).val().length < 8 || $(this).val().length > 20){
			result.isLength = false;
		}
		
		if(reg.test($(this).val())){
			result.isSpacing = false;
		}
		
		if(!reg1.test($(this).val())){
			result.isPwd1 = false;
		}

		if(!reg2.test($(this).val())){
			result.isPwd2 = false;
		}
		
		

		if (result.isSpacing==true)
		{
			_this.ui.tips.find(".passwordBox_liTwo i").attr("class","i_ipassTipsOk");
		}
		else
		{
			_this.ui.tips.find(".passwordBox_liTwo i").attr("class","i_ipassTipsError");
		}
		
		if (result.isLength==true)
		{
			_this.ui.tips.find(".passwordBox_liOne i").attr("class","i_ipassTipsOk");
		}
		else
		{
			this.scorec = 0;
			_this.ui.tips.find(".passwordBox_liOne i").attr("class","i_ipassTipsError");
		}
		if (result.isPwd1==true)
		{
			_this.ui.tips.find(".passwordBox_liThree i").attr("class","i_ipassTipsOk");
			this.scorec = 2;
		}else
		{
			this.scorec=1;
			_this.ui.tips.find(".passwordBox_liThree i").attr("class","i_ipassTipsError");
		}
		if (result.isPwd2==true)
		{
			
			_this.ui.tips.find(".passwordBox_liThree i").attr("class","i_ipassTipsOk");
			this.scorec = 3;
		}
		
		
		
		if(result.isLength==false)
		{
			$(".passwordBox_grade div").removeClass().addClass("passwordBox_grade1");
			$(".passwordBox_gradeName").html('弱');
		}
		else
			{
			$(".passwordBox_grade div").removeClass().addClass("passwordBox_grade"+this.scorec);
			this.socrec  = parseInt(this.scorec);
			$(".passwordBox_gradeName").html(this.socrec>=3 ? '强' : (this.scorec==2 ? '中' : '弱'));
			
			}
//		if(this.scorec>=2)
//		{
//			regform.upass=0;
//			$("input[name='password']").parent().remove("error");
//			$("input[name='password']").parent().append("<label class='error'></label>");
//		}
//		else 
//		{
//			regform.upass=1;
//			$("input[name='password']").parent().remove("error");
//			$("input[name='password']").parent().append("<label class='error'>密码强度太弱</label>");
//		}
			
	});
}
};
app.init();