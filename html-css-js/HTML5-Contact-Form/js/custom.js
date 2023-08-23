
$(document).ready(function(){	
	$("#login_form").submit(function(){
		var fullName = $("#full-name").val();
		var phone = $("#phone").val();
		var subject = $("#subject").val();
		var comment = $("#comment").val();
		var flag =  true;
		

		
		if(fullName == "" || !fullName || !isNaN(fullName)){
			$("#full-name").parent().addClass('red');
			flag =  false;
			
		}else{
			$("#full-name").parent().removeClass('red');
		};			
		
		var x = document.forms["myForm"]["emailAddr"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			$("#email").parent().addClass('red');
			flag =  false;
			
		}else{
			$("#email").parent().removeClass('red');
			
		};
		
		if(phone == "" || !phone || isNaN(phone)){
			$("#phone").parent().addClass('red');
			flag =  false;
			
		}else{
			$("#phone").parent().removeClass('red');
			
		};
		

		return flag;		
	});
});
		