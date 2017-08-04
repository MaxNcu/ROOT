$.metadata.setType("attr", "vld");
//允许传统传递数组参数
jQuery.ajaxSettings.traditional = true;
$.validator.AlertError = {
	invalidHandler : function(form, validator) {
		var errors = validator.numberOfInvalids();
		if (errors) {
			for (var name in validator.invalid) {
				alert(validator.invalid[name]);
				return;
			}
		}
	},
	showErrors : function(errors) {
	}
};
$.validator.addMethod("username", function(value) {
	if(value.length==0) {return true;}
	var p = /^[0-9a-zA-Z\u4e00-\u9fa5\.\-@_]+$/;
	return p.exec(value) ? true : false;
}, lang['qingzhishuru']);
$.validator.addMethod("path", function(value) {
	if(value.length==0) {return true;}
	var p = /^[0-9a-zA-Z]+$/;
	return p.exec(value) ? true : false;
}, lang['qingzhishuruzimuheshuzi']);
$.extend($.validator.messages, {
	required : lang['gaixiangweibitian'],
	remote : lang['qingxiuzhenggaiziduan'],
	email : lang['qingshuruzhengquegeshidedianziyoujian'],
	url : lang['qingshuruhefadewangzhi'],
	date : lang['qingshuruhefaderiqi'],
	dateISO : lang['qingshuruhefaderiqi'],
	number : lang['qingshuruhefadeshuzi'],
	digits : lang['zhinengshuruzhengshu'],
	creditcard : "请输入合法的信用卡号",
	equalTo : "请再次输入相同的值",
	accept : "请输入拥有合法后缀名的字符串",
	maxlength : $.format(lang['qingshuruyigechangduzuiduoshi']),
	minlength : $.format(lang['qingshuruyigechangduzuishaoshi']),
	rangelength : $.format(lang['qingshuruyigechangdujieyu']),
	range : $.format(lang['qingshurujieyuzhi']),
	max : $.format(lang['gaixiangbunengdayu']),
	min : $.format(lang['gaixiangbunengxiaoyu']),
	username : lang['yonghumingzhinengshuru'],
	path : lang['lujingzhinengzhuru']
});
$.extend({
	 confirm: function(callback,title,msg) {
	 if(title==null){title=lang['queren']};
	 if(msg==null){msg=lang['querenshanchu']};
	 $("BODY").append("<div id='dialog-message' title='"+title+"'><p>"+msg+"</p></div>");
	 $("#dialog-message").dialog({
				modal: true,
				resizable:false,
				position:'center',
				buttons: {
					确认: function() {
						$(this).dialog( "close" );
						$("#dialog-message").remove();
						callback();
					},
					取消:function(){
						$(this).dialog( "close" );
						$("#dialog-message").remove();
					}
				}
			});
		$("#dialog-message").dialog('open');
	},
	confirmToUrl: function(url,title,msg) {
		if(title==null){title=lang['queren']};
		if(msg==null){msg=lang['querenshanchu']};
		 $("BODY").append("<div id='dialog-message' title='"+title+"'><p>"+msg+"</p></div>");
		 $("#dialog-message").dialog({
					modal: true,
					resizable:false,
					position:'center',
					buttons: {
						确认: function() {
							$(this).dialog( "close" );
							$("#dialog-message").remove();
							window.location.href=url;
						},
						取消:function(){
							$(this).dialog( "close" );
							$("#dialog-message").remove();
						}
					}
				});
		$("#dialog-message").dialog('open');
	},
	alert: function(title,msg) {  
		 if(title==null){title=lang['tishi']};
		 $("body").append("<div id='dialog-message' title='"+title+"'><p>"+msg+"</p></div>");
		 $("#dialog-message").dialog({
					modal: true,
					resizable:false,
					position:'center',
					buttons: {
						确定: function() {
							$(this).dialog( "close" );
							$("#dialog-message").remove();
						}
					}
				});
			$("#dialog-message").dialog('open');
	},
	alertInParent:function(title,msg){    
	    window.parent.jQuery("body").append("<div id='dialog-message' title='"+title+"'><p>"+msg+"</p></div>");     
	    var dialog=window.parent.jQuery("#dialog-message");     
	    dialog.dialog({
			modal: true,
			resizable:false,
			position:'center',
			buttons: {
				确定: function() {
	    			dialog.dialog( "close" );
					dialog.remove();
				}
			}
		});   
	}
});

$.fn.extend( {
	showBy : function(target) {
		var offset = target.offset();
		var top, left;
		var b = $(window).height() + $(document).scrollTop() - offset.top
				- target.outerHeight();
		var t = offset.top - $(document).scrollTop();
		var r = $(window).width() + $(document).scrollLeft() - offset.left;
		var l = offset.left + target.outerWidth() - $(document).scrollLeft();
		if (b - this.outerHeight() < 0 && t > b) {
			top = offset.top - this.outerHeight() - 1;
		} else {
			top = offset.top + target.outerHeight() + 1;
		}
		if (r - this.outerWidth() < 0 && l > r) {
			left = offset.left + target.outerWidth() - this.outerWidth();
		} else {
			left = offset.left;
		}
		this.css("top", top).css("left", left).show();
	}
});
