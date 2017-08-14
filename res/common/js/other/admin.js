var default_pic="/u/cms/www/201708/14035753ja3a.jpg";

//admin_edit.html
$(function(){
	$('.pn-fbutton .submit').click(function(){
		var picurl=$('#uploadImgPath5').val()
		if(picurl!=null && picurl!=''){
			$('#uploadImgPath0').val(picurl)
		}else{
			$('#uploadImgPath0').val(default_pic)
		}
	})
	

	
})

