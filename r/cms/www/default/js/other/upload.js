
$(function(){
	setTimeout(function(){
		attach=$('#attachmentPaths0').val()

		$('#attachmentPaths0').change(function(){
			attach=$(this).val()
			alert(attach)
			if (attach==' '){
				alert('hehehehehe')
				$('#SWFUpload_1').addClass('hide-element')
			}else{
				alert('fuck')
			}
		})
	},8000)
})
	
