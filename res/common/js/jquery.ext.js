en={
		qingxiuzhenggaiziduan:'请修正该字段',
		qingshuruzhengquegeshidedianziyoujian:'请输入正确格式的电子邮件',
		qingshuruhefadewangzhi:'请输入合法的网址',
		qingshuruhefaderiqi:'请输入合法的日期',
		qingshuruhefadeshuzi:'请输入合法的数字',
		zhinengshuruzhengshu:'只能输入整数',
		qingzaicishuruxiangtongdezhi:'请再次输入相同的值',
		qingshuruyigechangduzuiduoshi:'请输入一个长度最多是 {0} 的字符串',
		qingshuruyigechangduzuishaoshi:'请输入一个长度最少是 {0} 的字符串',
		qingshuruyigechangdujieyu:'请输入一个长度介于 {0} 和 {1} 之间的字符串',
		qingshurujieyuzhi:'请输入一个介于 {0} 和 {1} 之间的值',
		gaixiangbunengdayu:'该项不能大于 {0}',
		gaixiangbunengxiaoyu:'该项不能小于 {0}',
		yonghumingzhinengshuru:'number, letter and _ - @ only',
		lujingzhinengshuru:'number and letters only',
		queren:'Confirm',
		xiangxineirong:'Content Detail',
		querenshanchu:'Delete Sure?',
		tishi:'Tips',
		qingzhishuruzimuheshuzi:'number and letter only',
		qingzhishuru:"number, letter and _ '，' '，“@” only",
		privacy:'/r/cms/www/default/js/other/privacy_en.txt',
		terms:'/r/cms/www/default/js/other/terms_en.txt',
		weixinfuwuhao:'Wechat',
		zaixianliuyan:'Contact online',
}
It={
		qingxiuzhenggaiziduan:'corregere',
		qingshuruzhengquegeshidedianziyoujian:'inserire email corretto',
		qingshuruhefadewangzhi:'inserire pagina web corretto',
		qingshuruhefaderiqi:'inserire data corretta',
		qingshuruhefadeshuzi:'inserire numeri corretti',
		zhinengshuruzhengshu:'inserire solo numeri interi',
		qingzaicishuruxiangtongdezhi:'inserire stessi dati',
		qingshuruyigechangduzuiduoshi:'inserire un Massimo di {0} caratteri e numerici',
		qingshuruyigechangduzuishaoshi:'inserire un minimo di {0} caratteri e numerici',
		qingshuruyigechangdujieyu:'inserire una lunghezza tra {0} e {1} caratteri e numerici',
		qingshurujieyuzhi:'inserire un valore tra {0} e {1} ',
		gaixiangbunengdayu:'non puo’ superare a {0}',
		gaixiangbunengxiaoyu:'non puo’ essere inferior a {0}',
		yonghumingzhinengshuru:'inserire caratteri、numeri e segni  _ - @ ',
		lujingzhinengshuru:'solo combinazione caratteri e numerici',
		queren:'conferma',
		xiangxineirong:'Contenuto dettagli',
		querenshanchu:'conferma cancellare?',
		tishi:'parola chiave',
		qingzhishuruzimuheshuzi:'inserire solo lettere e numeri',
		qingzhishuru:"inserire solo lettere, numeri, caratteri cinesi e _ '，' '，“@”",
		lianxiwomen:'Contatti',
		zaixianliuyan:'risposta',
}
zh={
		qingxiuzhenggaiziduan:'请修正该字段',
		qingshuruzhengquegeshidedianziyoujian:'请输入正确格式的电子邮件',
		qingshuruhefadewangzhi:'请输入合法的网址',
		qingshuruhefaderiqi:'请输入合法的日期',
		qingshuruhefadeshuzi:'请输入合法的数字',
		zhinengshuruzhengshu:'只能输入整数',
		qingzaicishuruxiangtongdezhi:'请再次输入相同的值',
		qingshuruyigechangduzuiduoshi:'请输入一个长度最多是 {0} 的字符串',
		qingshuruyigechangduzuishaoshi:'请输入一个长度最少是 {0} 的字符串',
		qingshuruyigechangdujieyu:'请输入一个长度介于 {0} 和 {1} 之间的字符串',
		qingshurujieyuzhi:'请输入一个介于 {0} 和 {1} 之间的值',
		gaixiangbunengdayu:'该项不能大于 {0}',
		gaixiangbunengxiaoyu:'该项不能小于 {0}',
		yonghumingzhinengshuru:'只能输入字符、数字、中文、和 _ - @ 的组合',
		lujingzhinengshuru:'只能输入字符和数字的组合',
		queren:'确认',
		xiangxineirong:'详细内容',
		querenshanchu:'确认删除？',
		tishi:'提示',
		qingzhishuruzimuheshuzi:'请只输入字母和数字',
		qingzhishuru:"请只输入字母，数字，汉字和_ '，' '，“@”",
		privacy:'/r/cms/www/default/js/other/privacy_ch.txt',
        terms:'/r/cms/www/default/js/other/terms_ch.txt',
        quanbu:'全部',
        lianxiwomen:'联系我们',
        tianjiaweixin:'请添加商家微信，待验证通过后可以进行视频导购',
}
if($.cookie('language')==null){
	var language='zh'
}else{
	language=$.cookie('language')
}
if(language=='zh'){
	lang=zh;
}else if(language=='en'){
	lang=en;
}else if(language=='It'){
	lang=It;
}

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
