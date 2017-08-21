
var regionurl="http://35.159.1.181:5000/getcountry"
$(document).ready(function(){
		$('.show-content p').css('text-indent','0em');
})
$(document).ready(function(){
	if($('.member-text tbody tr').length >2){
		$('.new-content').hide();
	};
})
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
//language
$(function(){
	$("select #default-value").text(lang['xuanze'])
	$('.fbgj .tggl-top').css('width','110px')
	$('#pifa').parent().append(lang['pifa'])
	$('#lingshou').parent().append(lang['lingshou'])
	$('#mainservice').text(lang['mainservice'])
	$('.tag-check #fuzhuang').parent().append(lang['fuzhuang'])
	$('.lang-lang').text(lang['lang'])
	$('.tag-check #xiangbao').parent().append(lang['xiangbao'])
	$('.fuzhuang-lang').text(lang['fuzhuang'])
	$('.content-lang').text(lang['neirong'])
	$('.email-lang').text(lang['youxiangn'])
	$('.cate-lang').text(lang['leibie'])
	$('.topic-lang').text(lang['biaoti'])
	$('.tel-lang').text(lang['dianhuan'])
	$('.xiewa-lang').text(lang['xiewa'])
	$('.dianzi-lang').text(lang['dianzichanpin'])
	$('.xiangbao-lang').text(lang['xiangbao'])
	$('.jiafang-lang').text(lang['jiafang'])
	$('.qita-lang').text(lang['qita'])
	$('.business-lang').text(lang['maoyi'])
	$('.logistics-lang').text(lang['wuliu'])
	$('.guonei-lang').text(lang['guoneiyunshu'])
	$('.guoji-lang').text(lang['guojiyunshu'])
	$('.cangchu-lang').text(lang['cangchu'])
	$('.qingguan-lang').text(lang['qingguan'])
	$('.kuaidi-lang').text(lang['kuaidi'])
	$('.sloganname').text(lang['sloganname'])
	$('.slogan1').text(lang['slogan1'])
	$('.slogan2').text(lang['slogan2'])
	$('.tag-check #xiewa').parent().append(lang['xiewa'])
	$('.tag-check #dianzichanpin').parent().append(lang['dianzichanpin'])
	$('.tag-check #jiafang').parent().append(lang['jiafang'])
	$('.tag-check #other').parent().append(lang['other'])
	$('.tag-check #guoneiyunshu').parent().append(lang['guoneiyunshu'])
	$('.tag-check #guojiyunshu').parent().append(lang['guojiyunshu'])
	$('.tag-check #cangchu').parent().append(lang['cangchu'])
	$('.tag-check #kuaidi').parent().append(lang['kuaidi'])
	$('.tag-check #qingguan').parent().append(lang['qingguan'])
	$('#tg-contact').text(lang['lianxifangshi'])
	$('.contact-lang').text(lang['lianxiwomen'])
	$('#tg-locate').text(lang['gongsidizhi'])
	$('#company-tel').text(lang['gongsidianhua'])
	$('#company-email').text(lang['gongsiyouxiang'])
	$('#company-wechat').text(lang['gongsiweixin'])
	$('#tg-country').text(lang['guojia'])
	$('#tg-distinct').text(lang['quyu'])
	$('#tg-city').text(lang['chengshi'])
	$('#tg-content').text(lang['neirong'])
	$('#tg-brand').text(lang['gongsishangbiao'])
	$('#tg-verify').text(lang['yanzhengma'])
	$('#tg-zipcode').text(lang['youbian'])
	$('input[value=上传]').val(lang['shangchuan'])
	$('input[value=剪裁]').val(lang['jiancai'])
	$('input[value=提交]').val(lang['tijiao'])
	$('input[value=浏览]').val(lang['liulan'])
	$('#selfinfo').text(lang['gerenziliao'])
	$('#companyinfo').text(lang['gongsixinxi'])
	$('#mywords').text(lang['wodeliuyan'])
	$('#myfavorite').text(lang['wodeshoucang'])
	$('#messages').text(lang['zhanneixinxi'])
	$('#nickname').text(lang['yonghunicheng'])
	$('#membergroup').text(lang['huiyuanzubie'])
	$('#gender').text(lang['xingbie'])
	$('#birthday').text(lang['chushengriqi'])
	$('#realname').text(lang['zhenshixingming'])
	$('#emailpass').text(lang['youxiang'])
	$('#mobile').text(lang['shouji'])
	$('#telephone').text(lang['gudingdianhua'])
	$('.cname-lang').text(lang['gongsimingcheng'])
	$('.ccate-lang').text(lang['gongsizhonglei'])
	$('#from').text(lang['laizi'])
	$('#selfintro').text(lang['ziwojieshao'])
	$('.selfinfromation a').eq(0).text(lang['yonghuxinxi'])
	$('.selfinfromation a').eq(1).text(lang['xiugaigerenziliao'])
	$('.selfinfromation a').eq(2).text(lang['genghuantouxiang'])
	$('.selfinfromation a').eq(3).text(lang['xiugaimima'])
	$('#originpassword').text(lang['yuanmima'])
	$('#inputpass').text(lang['bitian'])
	$('#newpassword').text(lang['xinmima'])
	$('#confirmpassword').text(lang['querenmima'])
	$('#genderinput input').eq(0).parent().append(lang['nan'])
	$('#genderinput input').eq(1).parent().append(lang['nv'])
	$('#genderinput input').eq(2).parent().append(lang['baomi'])
	$('#picformat').text(lang['tupiangeshi'])
	$('#companytitle td').eq(1).text(lang['gongsimingcheng'])
	$('#companytitle td').eq(2).text(lang['zhonglei'])
	$('#companytitle td').eq(3).text(lang['xinxizhuangtai'])
	$('#companytitle td').eq(4).text(lang['dianji'])
	$('#companytitle td').eq(5).text(lang['fabushijian'])
	$('#companytitle td').eq(6).text(lang['caozuo'])
	$('.m-pos a').text(lang['shouye'])
	$('#main-lang').text(lang['shouye'])
	$('.m-pos span').text(lang['huiyuanzhongxin'])
	$('.messageinfo a').eq(0).text(lang['shoujianxiang'])
	$('.messageinfo a').eq(1).text(lang['fajianxiang'])
	$('.messageinfo a').eq(2).text(lang['caogaoxiang'])
	$('.messageinfo a').eq(3).text(lang['lajixiang'])
	$('.messageinfo a').eq(4).text(lang['fasongzhanneixin'])
	$('#tg-inboxer').text(lang['shoujianren'])
	$('#tg-topical').text(lang['zhuti'])
	$('#tg-content').text(lang['neirong'])
	$('input[value=发送]').val(lang['fasong'])
	$('input[value=注册]').val(lang['zhuce'])
	$('input[value=转发]').val(lang['zhuanfa'])
	$('input[value=存为草稿]').val(lang['cunweicaogao'])
	$('input[value=重置]').val(lang['chongzhi'])
	$('input[value=删除]').val(lang['shanchu'])
	$('input[value=彻底删除]').val(lang['chedishanchu'])
	$('input[value=回复]').val(lang['huifu'])
	$('input[value=搜索]').val(lang['sousuo'])
	$('input[value=登入]').val(lang['dengru'])
	$('.dengru-lang').text(lang['dengru'])
	$('input[value=登录]').val(lang['dengru'])
	$('.sendmessage a').eq(0).text(lang['fasongzhanneixin'])
	$('.sendmessage a').eq(1).text(lang['fanhuiliebiao'])
	$('#nomessage').text(lang['zanwuxinxi'])
	$('#mywords a').text(lang['wodeliuyan'])
	$('#mywordslist td').eq(1).text(lang['liuyanneirong'])
	$('#mywordslist td').eq(2).text(lang['liuyanshijian'])
	$('#mywordslist td').eq(3).text(lang['huifu'])
	$('#mywordslist td').eq(4).text(lang['shenhe'])
	$('#mywordslist td').eq(5).text(lang['tuijian'])
	$('#mywordslist td').eq(6).text(lang['caozuo'])
	$('.myfavorite a').text(lang['wodeshoucang'])
	$('#cate-business').text(lang['maoyishang'])
	$('#cate-logistics').text(lang['wuliushang'])
	$('#target-city-lan').text(lang['mubiaochengshi'])
	$('#zipcode-lan').text(lang['youbian'])
	$('#keyword-lan').text(lang['guanjianzi'])
	$('.left-search-category .radio-content').children().eq(0).after(lang['pifa'])
	$('.left-search-category .radio-content').children().eq(1).after(lang['lingshou'])
	$('.detail a').text(lang['chakanxiangqing'])
	$('.details').text(lang['xiangqing'])
	$('.location-lan').text(lang['gongsidizhi'])
	$('.contact-lan').text(lang['lianxifangshi'])
	$('#maoyisousuo').text(lang['maoyisousuokuang'])
	$('#wuliusousuo').text(lang['wuliusousuokuang'])
	$('#intro').text(lang['gongsijianjie'])
	$('#daogou').text(lang['yuanchengdaogou'])
	$('#company-cate').text(lang['qiyeleixing'])
	$('#company-website').text(lang['gongsiwangzhi'])
	$('#city-lan span').eq(0).text(lang['chengshi'])
	$('#country-lan span').eq(0).text(lang['guojia'])
	$('#distinct-lan span').eq(0).text(lang['daqu'])
	$('#location-lang span').eq(0).text(lang['dizhi'])
	$('#zipcode-lan span').eq(0).text(lang['youbian'])
	$('#tel-lan span').eq(0).text(lang['dianhua'])
	$('#email-lan span').eq(0).text(lang['youxiang'])
	$('#wechat-lan span').eq(0).text(lang['weixin'])
	$('#weixin-lang').text(lang['weixinfuwuhao'])
	$('#mob-lan span').eq(0).text(lang['shouji'])
	$('.hello').text(lang['ninhao'])
	$('#dengruming').text(lang['dengruming'])
	$('#mima').text(lang['mima'])
	$('.username-con input').attr('placeholder',lang['qingshurunindeyonghuming'])
	$('.password-con input').attr('placeholder',lang['qingshurunindemima'])
	$('.login-checkbox').after(lang['xiacizidongdengru'])
	$('#forgetpass-lan').text(lang['wangjimima'])
	$('.email-con input').attr('placeholder',lang['qingshuruzhuceyouxiang'])
	$('#lookforpassword-lan').text(lang['zhaohuimima'])
	$('.email-con').prev().text(lang['dianziyouxiang'])
	$('#username-lan').text(lang['yonghuming'])
	$('#username-lan').parent().next().attr('placeholder',lang['zifuzhongwen'])
	$('#email-lan').parent().next().attr('placeholder',lang['yongyuzhaohuimima'])
	$('#passstrength').text(lang['weizhi'])
	$('#register-lan').text(lang['zhuce'])
	$('.register-login font').text(lang['yiyouzhanghao'])
	$('.register-login a').text(lang['mashangdenglu'])
	$('#password-lan').text(lang['mima'])
	$('#confirm-lan').text(lang['querenmima'])
	$('#read').text(lang['woyiyuedubingjieshou'])
	$('#read').next().text(lang['xinsitongzhucexieyi'])
	$('#country-s option[value=none]').text(lang['qingxuanzeguojia'])
	$('#distinct-s option[value=none]').text(lang['qingxuanzedaqu'])
	$('#city-s option[value=none]').text(lang['qingxuanzechengshi'])
	$('#company-web').text(lang['gongsiwangzhi'])
	$('#company-mob').text(lang['shouji'])
	$('.brandfont').text(lang['tuijianchangkuan'])
	var imgurl='url('+lang['iconpic']+')'
	$('#language .icon-img').css('background',imgurl)
	$('.zipcode-lan').text(lang['youbian'])
	$('.keyword-lan').text(lang['guanjianzi'])
	$('#all').text(lang['quanbu'])
	qitaxuanxiang="<option value=other>"+lang['qita']+"</option>"
	guojiaxuanxiang="<option value='none'>"+lang['qingxuanzeguojia']+"</option>"
	chengshixuanxiang="<option value='none'>"+lang['qingxuanzechengshi']+"</option>"
	daquxuanxiang="<option value='none'>"+lang['qingxuanzedaqu']+"</option>"

	$('.companytable tr').each(function(){
		if($(this).children().eq(6).children().eq(2).length<1){
			$(this).children().eq(6).text(lang['xiugaishanchu'])
		}else{
			$(this).children().eq(6).children().eq(0).text(lang['xiugai'])
			$(this).children().eq(6).children().eq(2).text(lang['shanchu'])
		}
	})
	$('.search-category p').each(function(){
		value=$(this).text()
		if(value=='贸易商'){
			$(this).text(lang['maoyi'])
		}else if(value=='物流商'){
			$(this).text(lang['wuliu'])
		}
	})
	privacypath=lang['privacy']
	$(function(){
	    $.ajax({
	        url: privacypath,
	        dataType: 'text',
	        success: function(data) {
	        	reg=new RegExp("\n","g")
	        	regf=new RegExp("\^","g")
	        	temp=data.replace(reg,'</p><p>')
	        	temp=temp.replace(regf,'<p>')
	        	$('#privacyModal p').html(temp)
	        }
	    });
	});
	termspath=lang['terms']
	$(function(){
	    $.ajax({
	        url: termspath,
	        dataType: 'text',
	        success: function(data) {
	        	reg=new RegExp("\n","g")
	        	regf=new RegExp("\^","g")
	        	temp1=data.replace(reg,'</p><p>')
	        	temp1=temp1.replace(regf,'<p>')
	        	$('#termsModal p').html(temp1)
	        }
	    });
	});
	

    
	
	if(language=='en'){
		$('.zh').addClass('hide-element')
		$('.en').removeClass('hide-element')
		$('.It').addClass('hide-element')
		$('.main-text').css('width','60px')
		$('.menu li').css('width','75px')
		$('.trangle').css('margin-left','35px')
		$('.s-p').css({'width':'120px','height':'45px','display':'block'})
		$('#zipcode p').css('width','60px')
		$('#keyword p').css('width','60px')
		$('#searchForm .search-submit').css('margin-left','110px')
		$('.radio-content').css({'width':'200px','margin-left':'28px'})
		$('.location-lan').css('width','106px')
		$('#locationid span').css({'display':'inline-block','width':'100px','height':'20px;'})
		$('.company-info-bar .location-lan').css('margin-left','15px')
		$('#contactid span').css({'display':'inline-block','width':'100px','height':'20px;'})
		$('.member-block-lan p').css('width','80px')
		$('.login-checkbox').parent().css('margin-left','81px')
		$('.login-checkbox').parent().parent().next().css('margin-left','120px')
		$('.login-btn').css('margin-left','120px')
		$('.complicated').css('margin-left','110px')
		$('.left-search-category .search-content p').css('width','68px')
		$('.memberLeft .member-nav').css('margin-right','66px')
		$('.self-text').css({'height':'113px','margin-top':'151px'})
		$('.slogan1, .slogan2').css('text-indent','2em')
		$('.region-lan').each(function(){
			tempval=$(this).text()
			tempen=tempval.split('1')[0]
			$(this).text(tempen)
		})
		$('.region option').each(function(){
			if($(this).val().split('1').length>1){
				$(this).text($(this).val().split('1')[0])
			}
		})
		gender=$('#sexgender').text();
		if(gender=='男'){
			$('#sexgender').text(lang['nan']);
		}else if(gender=='女'){
			$('#sexgender').text(lang['nv']);
			
		}
		$('.companytable tr').each(function(){
			cate=$(this).children().eq(2).text()
			if(cate=='贸易'){
				$(this).children().eq(2).text(lang['maoyi'])
			}else if(cate=='物流'){
				$(this).children().eq(2).text(lang['wuliu'])
			}
			status=$(this).children().eq(3).text()
			if(status=='未审核'){
				$(this).children().eq(3).text(lang['weishenhe'])
			}else if(status='审核通过'){
				$(this).children().eq(3).text(lang['shenhetongguo'])
			}
		})
		$('#wordlist').each(function(){
			if($(this).children().eq(3).has('span').length){
				wordreply=$(this).children().eq(3).chileren().eq(0).text()
			}else{
				wordreply=$(this).children().eq(3).text()
			}
			if(wordreply=='否'){
				$(this).children().eq(3).text(lang['fou'])
			}else if(wordreply=='是'){
				$(this).children().eq(3).children().eq(0).text(lang['shi'])
			}
			if($(this).children().eq(4).length>0){
				wordaudit=$(this).children().eq(4).text()
			}else{
				wordaudit=$(this).children().eq(4).text()
			}
			if(wordaudit=='未审核'){
				$(this).children().eq(4).text(lang['weishenhe'])
			}else if(wordaudit=='审核'){
				$(this).children().eq(4).children().eq(0).text(lang['shenhetongguo'])
			}
			if($(this).children().eq(5).has('span').length){
				wordrecommand=$(this).children().eq(5).chileren().eq(0).text()
			}else{
				wordrecommand=$(this).children().eq(5).text()
			}
			if(wordrecommand=='未推荐'){
				$(this).children().eq(5).text(lang['weituijian'])
			}else if(wordrecommand=='推荐'){
				$(this).children().eq(5).children().eq(0).text(lang['tuijian'])
			}
			wordreply=$(this).children().eq(6).children().eq(0).text(lang['xiangxi'])
			wordreply=$(this).children().eq(6).children().eq(1).text(lang['chakanhuifu'])
		})
		
		$("option[value='75']").text('Business')
		$("option[value='76']").text('Logistics')
		$('.user-child').css('margin-left','20px')
	}else if(language=='zh'){
		$('.en').addClass('hide-element')
		$('.zh').removeClass('hide-element')
		$('.It').addClass('hide-element')
		$('.main-text').css('width','50px')
		$('.menu li').css('width','46px')
		$('.trangle').css('margin-left','17px')
		$('.s-p').css({'width':'70px','display':'table-cell'})
		$('.left-search-category .search-content input').css('margin-left','10px')
		$('.radio-content').css({'width':'152px','margin-left':'58px'})
		$('.complicated').css('margin-left','98px')
		$('.region-lan').each(function(){
			tempval=$(this).text()
			tempen=tempval.split('1')[1]
			$(this).text(tempen)
		})
		$('.region option').each(function(){
			if($(this).val().split('1').length>1){
				$(this).text($(this).val().split('1')[1])
			}
		})
		
		$("option[value='75']").text('贸易')
		$("option[value='76']").text('物流')
		$('.user-child').css('margin-left','30px')
	}else if(language=='It'){
		$('.en').addClass('hide-element')
		$('.It').removeClass('hide-element')
		$('.zh').addClass('hide-element')
		$('.main-text').css('width','60px')
		$('.menu li').css('width','95px')
		$('.left-search-category .search-content p').css('text-align','right')
		$('.trangle').css('margin-left','35px')
		$('.top-line .detail').css('width','140px')
		$('.s-p').css({'width':'120px','height':'45px','display':'block'})
		$('#zipcode p').css('width','60px')
		$('#keyword p').css('width','60px')
		$('#searchForm .search-submit').css('margin-left','110px')
		$('.radio-content').css({'width':'280px','margin-left':'20px'})
		$('.location-lan').css('width','106px')
		$('#locationid span').css({'display':'inline-block','width':'100px','height':'20px;'})
		$('.company-info-bar .location-lan').css('margin-left','15px')
		$('#contacted span').css({'display':'inline-block','width':'100px','height':'20px;'})
		$('.member-block-lan p').css('width','90px')
		$('.login-checkbox').parent().css('margin-left','81px')
		$('.login-checkbox').parent().parent().next().css('margin-left','120px')
		$('.login-btn').css('margin-left','120px')
		$('.complicated').css('margin-left','110px')
		$('.left-search-category .search-content p').css('width','68px')
		$('.memberLeft .member-nav').css('margin-right','36px')
		$('.self-text').css({'height':'113px','margin-top':'151px'})
		$('.slogan1, .slogan2').css('text-indent','2em')
		$('.region-lan').each(function(){
			tempval=$(this).text()
			tempen=tempval.split('1')[0]
			$(this).text(tempen)
		})
		$('.region option').each(function(){
			if($(this).val().split('1').length>1){
				$(this).text($(this).val().split('1')[0])
			}
		})
		gender=$('#sexgender').text();
		if(gender=='男'){
			$('#sexgender').text(lang['nan']);
		}else if(gender=='女'){
			$('#sexgender').text(lang['nv']);
			
		}
		$('.companytable tr').each(function(){
			cate=$(this).children().eq(2).text()
			if(cate=='贸易'){
				$(this).children().eq(2).text(lang['maoyi'])
			}else if(cate=='物流'){
				$(this).children().eq(2).text(lang['wuliu'])
			}
			status=$(this).children().eq(3).text()
			if(status=='未审核'){
				$(this).children().eq(3).text(lang['weishenhe'])
			}else if(status='审核通过'){
				$(this).children().eq(3).text(lang['shenhetongguo'])
			}
		})
		$('#wordlist').each(function(){
			if($(this).children().eq(3).has('span').length){
				wordreply=$(this).children().eq(3).chileren().eq(0).text()
			}else{
				wordreply=$(this).children().eq(3).text()
			}
			if(wordreply=='否'){
				$(this).children().eq(3).text(lang['fou'])
			}else if(wordreply=='是'){
				$(this).children().eq(3).children().eq(0).text(lang['shi'])
			}
			if($(this).children().eq(4).length>0){
				wordaudit=$(this).children().eq(4).text()
			}else{
				wordaudit=$(this).children().eq(4).text()
			}
			if(wordaudit=='未审核'){
				$(this).children().eq(4).text(lang['weishenhe'])
			}else if(wordaudit=='审核'){
				$(this).children().eq(4).children().eq(0).text(lang['shenhetongguo'])
			}
			if($(this).children().eq(5).has('span').length){
				wordrecommand=$(this).children().eq(5).chileren().eq(0).text()
			}else{
				wordrecommand=$(this).children().eq(5).text()
			}
			if(wordrecommand=='未推荐'){
				$(this).children().eq(5).text(lang['weituijian'])
			}else if(wordrecommand=='推荐'){
				$(this).children().eq(5).children().eq(0).text(lang['tuijian'])
			}
			wordreply=$(this).children().eq(6).children().eq(0).text(lang['xiangxi'])
			wordreply=$(this).children().eq(6).children().eq(1).text(lang['chakanhuifu'])
		})
		
		$("option[value='75']").text('Business')
		$("option[value='76']").text('Logistics')
		$('.user-child').css('margin-left','20px')
	}
})

var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_='+Math.random();

$.getJSON(url, function(data){
    IP=data.Ip
    queryUrl='http://ip-api.com/json/'+IP
    $.getJSON(queryUrl,function(data){
    	$('#country').text(data['country']);
    	$('#distinct').text(data['regionName']);
    	$('#city').text(data['city']);
    })
})

$(function(){
	function show(){
		$('.backgroundpic .hide-element, .textchange .hide-element').each(function(){
			$(this).siblings().addClass('hide-element');
			$(this).removeClass('hide-element');
		})
	    var pic1status=$('#text1').hasClass('hide-element')
	    if(pic1status==true){
	    	$('#picb1').addClass('hide-pic').removeClass('show-pic')
	    	$('#picb2').removeClass('hide-pic').addClass('show-pic')
	    }
	    else{
	    	$('#picb1').removeClass('hide-pic').addClass('show-pic')
	    	$('#picb2').addClass('hide-pic').removeClass('show-pic')
	    }
	}
	setInterval(show,10000);
	
	$('.backlabel').mouseover(function(){
		var status=$(this).hasClass('hide-pic')
		if(status==true){
			$('.backgroundpic .hide-element, .textchange .hide-element').each(function(){
				$(this).siblings().addClass('hide-element');
				$(this).removeClass('hide-element');
			})
			$(this).siblings().addClass('hide-pic').removeClass('show-pic');
			$(this).removeClass('hide-pic').addClass('show-pic');
		}
	})
	
	$('#language').click(function(){
		if($('.lan-list').hasClass('hide-element')){
			$('.lan-list').removeClass('hide-element')
			$('.fa').addClass('fa-angle-up')
			$('.fa').removeClass('fa-angle-down')
		}else{
			$('.lan-list').addClass('hide-element')
			$('.fa').removeClass('fa-angle-up')
			$('.fa').addClass('fa-angle-down')
		}
	})
	
	$('.lan-list').mouseleave(function(){
		$('.lan-list').addClass('hide-element')
		$('.fa').removeClass('fa-angle-up')
		$('.fa').addClass('fa-angle-down')
	})
	$('.lan-list p').click(function(){
		$('.lan-list').addClass('hide-element')
		$('.fa').removeClass('fa-angle-up')
		$('.fa').addClass('fa-angle-down')
		lang=$(this).text()
		if(lang=='中文'){
			language='zh'
		}else if(lang=='English'){
			language='en'
		}else if(lang='Italy'){
			language='It'
		}
		$.cookie('language', language,{expires:7,path:'/'});
		location.reload();
	})
})



//search-result.html
$(function(){
	var s=[]
	var t=[]
	var location=[]
	var region=[]
    var tag
	var list
	var service
	var contact=[]
	var contacts=$('.contact-hide').val()
	if(contacts!=null &&contacts!='' && contacts!=undefined){
		contact=contacts.split(',')
		$('.contact-show #tel').val(contact[0].split(':')[1])
		$('.contact-show #qq').val(contact[1].split(':')[1])
		$('.contact-show #email').val(contact[2].split(':')[1])
		$('.contact-show #wechat').val(contact[3].split(':')[1])
		if(contact.length>4){
			$('.contact-show #website').val(contact[4].split(':')[1])
			$('.contact-show #mob').val(contact[5].split(':')[1])
		}
	}
	var tags=$('.tags-change').val();
	var kind=$('#cate-change').find("option:selected").val()
	if (tags!=null&&tags!=undefined&&tags!=''){
		if(kind=='75'){
			tag=tags.split('+')[0];
			tags=tags.split('+')[1];
			service=tags.split(',');
			tag=tag.split(',');
		}else{
			tags=tags.split('+')[1];
			service=tags.split(',');
			tag='';
		}
	}

	if(kind=='75'){
		$('#logistics-check').removeClass('hide-element');
		$('#serviceid').removeClass('hide-element');
		$('#business-check').addClass('hide-element')
	}

	if (service!=null&&service!=undefined&&service!=''){
		$('#serviceid').removeClass('hide-element');
		$.each(service,function(i,data){
			s.push(data);
			$('#serviceid .tag-check input').filter($('[value='+data+']')).attr({"selected":true,"checked":'checked'});		
		})
	}
	if (tag!=null&&tag!=undefined&&tag!=''||kind=='75'){
		$('#tagsid').removeClass('hide-element')
		$('#serviceid').removeClass('hide-element');
		$.each(tag,function(i,data){
			t.push(data)
			$('#tagsid .tag-check input').filter($('[value='+data+']')).attr({"selected":true,"checked":'checked'});		
		})
	}
	
	var des=$('#description').val();
	
	if (des!=null&&des!=undefined&&des!=''){
		var concrete=des.split('~')
		region=concrete[0];
		var country=region.split(',')[0]
		country=country.split('>')[1];
		var distinct=region.split(',')[1]
		var city=region.split(',')[2]
		var zipcode=region.split(',')[3]
		zipcode=zipcode.split('<')[0]
		distinct=distinct.replace(' ','_')
		distinct=distinct.replace('\'','_')
		city=city.replace(' ','_')
		var country_s=country
		var distinct_s=distinct
		$('#country-s option').filter($("[value="+country+"]")).attr("selected","selected");
		if(country!='none' && country!='other'){
			var querydata={"tag":"distinct","country":country_s,"distinct":""}
			$.getJSON(regionurl,jQuery.param(querydata),function(data){
				result=data.result
				$('#distinct-s option').remove()
				$('#distinct-s').append(daquxuanxiang)
				for(var i=0;i<result.length;i++){
					test=result[i].split(':')
					temp=test[0].replace("'",'_')
					if(test.length>1){
						$('#distinct-s').append("<option value='"+temp+'1'+test[1]+"'>"+test[1]+"</option>")
					}else{
						alert(test.length)
					}
					
				}
				$('#distinct-s').append(qitaxuanxiang)
				$('#distinct-s option').filter($('[value='+distinct+']')).attr("selected","selected");
			})
		}else if(country=='other'){
			$('#distinct-s').append(qitaxuanxiang)
		}
		
		
		if(distinct!='none' && distinct!='other'){
			var querydata={"tag":"city","country":country_s,"distinct":distinct_s}
			$.getJSON(regionurl,jQuery.param(querydata),function(data){
				result=data.result
				$('#city-s option').remove()
				$('#city-s').append(chengshixuanxiang)
				for(var i=0;i<result.length;i++){
					test=result[i].split(':')
					if(test.length>1){
						$('#city-s').append("<option value='"+test[0]+test[1]+"'>"+test[0]+"</option>")
					}
				}
				$('#city-s').append(qitaxuanxiang)
				$('#city-s option').filter($('[value='+city+']')).attr("selected","selected");

			})
		}else if (distinct=='other'){
			$('#city-s').append(qitaxuanxiang)
		}
		$('.r-zipcode input').val(zipcode)
		region=[]
		$('.region select').each(function(){
			region.push($(this).val());
		})
		region.push(zipcode)
		if (concrete.length>1){
			des=concrete[1];
		}else{
			des='';
		}	
	}else{
		des='';
	}
	$('#description-show').val(des.replace("</p>",""));
	
	
	var content=$('#txt').val();
	if (content!=null&&content!=undefined){
		var content=content.split('<br>');
		if(content.length>1){
			content=content[0];
		}else{
			content='';
		}
	}else{
		content='';
	}
	

	$('.75').mouseenter(function(){
		$('#business').removeClass('hide-element');
		$('#logistics').addClass('hide-element');
		$('#navbusiness .trangle').removeClass('hide-element');
		$('#navlogistics .trangle').addClass('hide-element');
		return false;
	})
	
	$('.76').mouseenter(function(){
		$('#logistics').removeClass('hide-element');
		$('#business').addClass('hide-element');
		$('#navlogistics .trangle').removeClass('hide-element');
		$('#navbusiness .trangle').addClass('hide-element');
		return false;
	})
	$('.menu').mouseleave(function(){
		$('#logistics').addClass('hide-element');
		$('#business').addClass('hide-element');
		$('#navlogistics .trangle').addClass('hide-element');
		$('#navbusiness .trangle').addClass('hide-element');
		return false;
	})

	
	$('#serviceid .tag-check input').click(function(){
		s=[];
		$('#serviceid .tag-check input:checked').each(function(){
			s.push($(this).val());
		})

	});
	$('#tagsid .tag-check input').click(function(){
		t=[];
		$('#tagsid .tag-check input:checked').each(function(){
			t.push($(this).val());
		})
	})
	
	$('#country-s').change(function(){
		country_s=$(this).val()
		if(country_s=='none'){
			$('#distinct-s, #city-s').find("option:selected").attr('selected',false)
			$('#distinct-s option').remove()
			$('#distinct-s').append(guojiaxuanxiang)
			$('#city-s').find("option:selected").attr('selected',false)
			$('#city-s option').remove()
			$('#city-s').append(daquxuanxiang)
		}else if(country!='other'){
			var querydata={"tag":"distinct","country":country_s,"distinct":""}
			$.getJSON(regionurl,jQuery.param(querydata),function(data){
				result=data.result
				alert(result.length)
				$('#distinct-s option').remove()
				$('#distinct-s').append(daquxuanxiang)
				for(var i=0;i<result.length;i++){
					test=result[i].split(':')
					
					if(test.length>1){
						if(language=='zh'){
							testlan=test[1]
						}else if(language=='en'){
							testlan=test[0]
						}
						temp=test[0].replace("'","_")
						$('#distinct-s').append("<option value='"+test[0]+'1'+test[1]+"'>"+testlan+"</option>")
					}else{
						alert(test.length)
					}
				}
				$('#distinct-s').append(qitaxuanxiang)
			})
		}else{
			$('#distinct-s').append(qitaxuanxiang)
		}
	})
	
	$('#distinct-s').change(function(){
		distinct_s=$(this).val()
		country_s=$('#country-s').val()
		alert(country_s)
		if(distinct_s=='none'){
			$('#city-s').find("option:selected").attr('selected',false)
			$('#city-s option').remove()
			
			$('#city-s').append(daqustr)
		}else if(distinct_s!='other'){
			var querydata={"tag":"city","country":country_s,"distinct":distinct_s}
			$.getJSON(regionurl,jQuery.param(querydata),function(data){
				result=data.result
				$('#city-s option').remove()
				chengshistr="<option value='none'>"+lang['qingxuanzechengshi']+"</option>"
				$('#city-s').append(chengshistr)
				for(var i=0;i<result.length;i++){
					test=result[i].split(':')
					if(test.length>1){
							if(language=='zh'){
								testlan=test[0]
							}else if(language=='en'){
								testlan=test[1]
							}
						$('#city-s').append("<option value='"+test[1]+'1'+test[0]+"'>"+testlan+"</option>")
					}
				}
				$('#city-s').append(qitaxuanxiang)
			})
		}
		else{
			
			$('#city-s').append(qitaxuanxiang)
		}
	})
	
	$('#cate-change').change(function(){
		s=[];
		t=[];
		var select=$(this).find("option:selected").val()
		if (select=='75'){
			$('.tags-tr').removeClass('hide-element');
			$('#business-check, #tagsid').removeClass('hide-element');
			$('#logistics-check').addClass('hide-element');
			$('#logistics-check input').attr('checked',false);
		}else if(select=='76'){
			$('.tags-tr').removeClass('hide-element');
			$('#logistics-check').removeClass('hide-element');
			$('#business-check, #tagsid').addClass('hide-element');
			$('#business-check input, .tag-check input').attr('checked',false);
		}else{
			$('.tags-tr').addClass('hide-element');
			$('#logistics-check input').attr('checked',false);
			$('#business-check input, .tag-check input').attr('checked',false);
		}
	})
	
	
	$('.region select').change(function(){
		region=[]
		$('.region select').each(function(){
			region.push($(this).val());
		})
	})
	
	$('#txt-show').change(function(){
		$('#txt').val($(this).val());
	})
	$('#description-show').change(function(){
		region=[]
		$('.region select').each(function(){
			region.push($(this).val());
		})
		region.push($('.r-zipcode input').val())
	})
	$('.r-zipcode input').change(function(){
		region=[]
		$('.region select').each(function(){
			region.push($(this).val());
		})
		region.push($(this).val());
	})
   $('.contact-show input').change(function(){
    	$('.contact-hide').val("");
    	contact=[]
    	tel='tel:'+$('.contact-show #tel').val()
    	qq='qq:'+$('.contact-show #qq').val()
    	email='email:'+$('.contact-show #email').val()
    	wechat='wechat:'+$('.contact-show #wechat').val()
    	website='website:'+$('.contact-show #website').val()
    	mob='mob:'+$('.contact-show #mob').val()
    	contact.push(tel)
    	contact.push(qq)
    	contact.push(email)
    	contact.push(wechat)
    	contact.push(website)
    	contact.push(mob)
    	$('.contact-hide').val(contact.join(','));
    })
	$('.member-submit').click(function(){
		 $('#ctags').val("");
		 $('#ctags').val(t+'+'+s);
		 $('#txt').val("");
		 $('#description').val('');
		 $('#description').val("<p class='hide-element'>"+region.join(',')+"~</p>"+$('#description-show').val());
		 $('#txt').val($('#txt-show').val()+"<br><p class='hide-element'>tags: "+$('#ctags').val()+"#"+$('#description').val()+"</p>");	
	})
	
})

//register
$(function(){
	$('#password').keyup(function(e){
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		var strs=$(this).val()
        var enough=enoughRegex.test(strs)
        var medium=mediumRegex.test(strs)
        var strong=strongRegex.test(strs)
		if(enough==false){
			$('#passstrength').html('More Characters');
			$('.deep').css("background","rgb(215,215,215)");
		}else if(enough==true && medium==false){
			$('#passstrength').html(lang['ruo']).css("color","red");
			$('#deep-1').css("background","red");
			$('#deep-2, #deep-3').css("background","rgb(215,215,215)");
		}else if(medium==true && strong==false){
			$('#passstrength').html(lang['zhong']).css("color","orange");
			$('#deep-1, #deep-2').css("background","orange");
			$('#deep-3').css("background","rgb(215,215,215)");
		}else if(strong==true){
			$('#passstrength').html(lang['qiang']).css("color","green");
			$('.deep').css("background","green")
		}
	})
	
	$('.register-btn').click(function(){
		var value=$('.register-checkbox').is(':checked')
		if(value==false){
			$('.register-txt').append("<label class='error'>请阅读协议并勾选</label>")
			return false;
		}
	})
	$('.register-checkbox').click(function(){
		$('.register-txt label').remove();
	})
//==============================================================
 /*---------------------------
 Defaults for Reveal
----------------------------*/
       
/*---------------------------
 Listener for data-reveal-id attributes
----------------------------*/
  
    $('a[data-reveal-id]').on('click', function(e) {
        e.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        $('#'+modalLocation).reveal($(this).data());
    });
  
/*---------------------------
 Extend and Execute
----------------------------*/
  
    $.fn.reveal = function(options) {
          
          
        var defaults = { 
            animation: 'fadeAndPop', //fade, fadeAndPop, none
            animationspeed: 300, //how fast animtions are
            closeonbackgroundclick: true, //if you click background will modal close?
            dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
        };
          
        //Extend dem' options
        var options = $.extend({}, defaults, options);
      
        return this.each(function() {
          
/*---------------------------
 Global Variables
----------------------------*/
            var modal = $(this),
                topMeasure  = parseInt(modal.css('top')),
                topOffset = modal.height() + topMeasure,
                locked = false,
                modalBG = $('.reveal-modal-bg');
  
/*---------------------------
 Create Modal BG
----------------------------*/
            if(modalBG.length == 0) {
                modalBG = $('<div class="reveal-modal-bg">').insertAfter(modal);
            }          
       
/*---------------------------
 Open & Close Animations
----------------------------*/
            //Entrance Animations
            modal.on('reveal:open', function () {
              modalBG.off('click.modalEvent');
                $('.' + options.dismissmodalclass).off('click.modalEvent');
                if(!locked) {
                    lockModal();
                    if(options.animation == "fadeAndPop") {
                        modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
                        modalBG.fadeIn(options.animationspeed/2);
                        modal.delay(options.animationspeed/2).animate({
                            "top": $(document).scrollTop()+topMeasure + 'px',
                            "opacity" : 1
                        }, options.animationspeed,unlockModal());                  
                    }
                    if(options.animation == "fade") {
                        modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
                        modalBG.fadeIn(options.animationspeed/2);
                        modal.delay(options.animationspeed/2).animate({
                            "opacity" : 1
                        }, options.animationspeed,unlockModal());                  
                    }
                    if(options.animation == "none") {
                        modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
                        modalBG.css({"display":"block"});  
                        unlockModal()              
                    }
                }
                modal.off('reveal:open');
            });    
  
            //Closing Animation
            modal.on('reveal:close', function () {
              if(!locked) {
                    lockModal();
                    if(options.animation == "fadeAndPop") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "top":  $(document).scrollTop()-topOffset + 'px',
                            "opacity" : 0
                        }, options.animationspeed/2, function() {
                            modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
                            unlockModal();
                        });                
                    }  
                    if(options.animation == "fade") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "opacity" : 0
                        }, options.animationspeed, function() {
                            modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
                            unlockModal();
                        });                
                    }  
                    if(options.animation == "none") {
                        modal.css({'visibility' : 'hidden', 'top' : topMeasure});
                        modalBG.css({'display' : 'none'}); 
                    }      
                }
                modal.off('reveal:close');
            });    
      
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
            //Open Modal Immediately
        modal.trigger('reveal:open')
              
            //Close Modal Listeners
            var closeButton = $('.' + options.dismissmodalclass).on('click.modalEvent', function () {
              modal.trigger('reveal:close')
            });
              
            if(options.closeonbackgroundclick) {
                modalBG.css({"cursor":"pointer"})
                modalBG.on('click.modalEvent', function () {
                  modal.trigger('reveal:close')
                });
            }
            $('body').keyup(function(e) {
                if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
            });
              
              
/*---------------------------
 Animations Locks
----------------------------*/
            function unlockModal() {
                locked = false;
            }
            function lockModal() {
                locked = true;
            }  
              
        });//each call
    }//orbit plugin call
//==============================================================	
})
//index.html
$(function(){
	$('.search-submit input').click(function(){
		var search_content=$('#zipcode input').val()+' '+$('#keyword input').val();
		$('.scontent').val(search_content);
	})
})

//details
$(function(){
	$('.nav-one').click(function(){
		$(this).addClass('selected-nav')
		$(this).siblings().removeClass('selected-nav')
		if($(this).attr('id')=='nav-location'){
			$('#locationid').removeClass('hide-element')
			$('#contactid').addClass('hide-element')
		}else{
			$('#contactid').removeClass('hide-element')
			$('#locationid').addClass('hide-element')
		}
	})
})
//pic.html
$(function(){
	$('.radio-content input').change(function(){
		content=[];
		$('.radio-content input:checked').each(function(){
			content.push($(this).val())
		})
		$('.radio-value').val(content.join(' '));
	})
	$('.left-search-category .left-search-submit .left-search-button').click(function(){
		var content=[]
		$('.s-content').each(function(){
			content.push($(this).val());
		})
		$('#left-hide-search').val(content.join(' '));
	})
	$('.logistics-button').click(function(){
		var slocation=$('#location .s-content').val();
		var szipcode=$('#zipcode .s-content').val();
		var skeyword=$('#keyword .s-content').val();
		$('.searchList .item').hide().each(function(){
			var temptitle=$(this).find('[class=search-title]').children().attr('title');
			if(temptitle.indexOf(skeyword)!=-1 && skeyword.length!=0){
				$(this).show();
			}
			var temptext=$(this).find('[class=search-txt]').text();
			if(temptext.indexOf(skeyword)!=-1 && skeyword.length!=0){
				$(this).show();
			}
			var templocation=$(this).find('[id=slocation]').children().text();
			if(templocation.indexOf(slocation)!=-1 && slocation.length!=0){
				$(this).show();
			}
			if(skeyword.length==0 && slocation.length==0 && szipcode.length==0){
				$(this).show();
			}
		})
	})
})
/*
$(function(){
	Vcity.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i;
	Vcity.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;
	reg2 = /^[a-b]$/i;
	reg3 = /^[c-d]$/i;
	reg4 = /^[e-g]$/i;
	reg5 = /^[h]$/i;
	reg6 = /^[j]$/i;
	reg7 = /^[k-l]$/i;
	reg8 =  /^[m-p]$/i;
	reg9 =  /^[q-r]$/i;
	reg10 =  /^[s]$/i;
	reg11 =  /^[t]$/i;
	reg12 =  /^[w]$/i;
	reg13 =  /^[x]$/i;
	reg14 =  /^[y]$/i;
	reg15 =  /^[z]$/i;
})




var Vcity = {};

Vcity._m = {

    $:function (arg, context) {
        var tagAll, n, eles = [], i, sub = arg.substring(1);
        context = context || document;
        if (typeof arg == 'string') {
            switch (arg.charAt(0)) {
                case '#':
                    return document.getElementById(sub);
                    break;
                case '.':
                    if (context.getElementsByClassName) return context.getElementsByClassName(sub);
                    tagAll = Vcity._m.$('*', context);
                    n = tagAll.length;
                    for (i = 0; i < n; i++) {
                        if (tagAll[i].className.indexOf(sub) > -1) eles.push(tagAll[i]);
                    }
                    return eles;
                    break;
                default:
                    return context.getElementsByTagName(arg);
                    break;
            }
        }
    },

    // 绑定事件 
    on:function (node, type, handler) {
        node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
    },

    // 获取事件
    getEvent:function(event){
        return event || window.event;
    },

    // 获取事件目标 
    getTarget:function(event){
        return event.target || event.srcElement;
    },

    // 获取元素位置 
    getPos:function (node) {
        var scrollx = document.documentElement.scrollLeft || document.body.scrollLeft,
                scrollt = document.documentElement.scrollTop || document.body.scrollTop;
        var pos = node.getBoundingClientRect();
        return {top:pos.top + scrollt, right:pos.right + scrollx, bottom:pos.bottom + scrollt, left:pos.left + scrollx }
    },

    // 添加样式名 
    addClass:function (c, node) {
        if(!node)return;
        node.className = Vcity._m.hasClass(c,node) ? node.className : node.className + ' ' + c ;
    },

    // 移除样式名 
    removeClass:function (c, node) {
        var reg = new RegExp("(^|\\s+)" + c + "(\\s+|$)", "g");
        if(!Vcity._m.hasClass(c,node))return;
        node.className = reg.test(node.className) ? node.className.replace(reg, '') : node.className;
    },

    // 是否含有CLASS 
    hasClass:function (c, node) {
        if(!node || !node.className)return false;
        return node.className.indexOf(c)>-1;
    },

    // 阻止冒泡 
    stopPropagation:function (event) {
        event = event || window.event;
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    },
    // 去除两端空格 
    trim:function (str) {
        return str.replace(/^\s+|\s+$/g,'');
    }
};

// 所有城市数据,可以按照格式自行添加（北京|beijing|bj），前16条为热门城市 

Vcity.allCity = ['北京市|beijing|bj','上海市|shanghai|sh','广州市|guangzhou|gz','深圳市|shenzhen|sz','南京市|nanjing|nj','杭州市|hangzhou|hz','天津市|tianjin|tj','重庆市|chongqing|cq','成都市|chengdu|cd','青岛市|qingdao|qd','苏州市|shuzhou|sz','无锡市|wuxi|wx','常州市|changzhou|cz','温州市|wenzhou|wz','武汉市|wuhan|wh','长沙市|changsha|cs','石家庄市|shijiazhuang|sjz','南昌市|nanchang|nc','三亚市|sanya|sy','合肥市|hefei|hf','郑州市|zhengzhou|zz','保定市|baoding|bd','唐山市|tangshan|ts','秦皇岛市|qinhuangdao|qhd','邯郸市|handan|hd','邢台市|xingtai|xt','张家口市|zhangjiakou|zjk','承德市|chengde|cd','衡水市|hengshui|hs','廊坊市|langfang|lf','沧州市|cangzhou|cz','太原市|taiyuan|ty','大同市|datong|dt','阳泉市|yangquan|yq','长治市|changzhi|cz','晋城市|jincheng|jc','朔州市|shuozhou|sz','晋中市|jinzhong|jz','运城市|yuncheng|yc','忻州市|xinzhou|xz','临汾市|linfen|lf','吕梁市|lvliang|ll','呼和浩特市|huhehaote|hhht','包头市|baotou|bt','乌海市|wuhai|wh','赤峰市|chifeng|cf','通辽市|tongliao|tl','鄂尔多斯市|eerduosi|eeds','呼伦贝尔市|hulunbeier|hlbe','巴彦淖尔市|bayannaoer|byne','乌兰察布市|wulanchabu|wlcb','兴安盟|xinganmeng|xam','锡林郭勒盟|xilinguolemeng|xlglm','阿拉善盟|alashanmeng|alsm','沈阳市|shenyang|sy','大连市|dalian|dl','鞍山市|anshan|as','抚顺市|fushun|fs','本溪市|benxi|bx','丹东市|dandong|dd','锦州市|jinzhou|jz','营口市|yingkou|yk','阜新市|fuxin|fx','辽阳市|liaoyang|ly','盘锦市|panjin|pj','铁岭市|tieling|tl','朝阳市|chaoyang|cy','葫芦岛市|huludao|hld','长春市|changchun|cc','吉林市|jilin|jl','四平市|siping|sp','辽源市|liaoyuan|ly','通化市|tonghua|th','白山市|baishan|bs','松原市|songyuan|sy','白城市|baicheng|bc','延边朝鲜族自治州|ybcxzzzz|ybcxzzzz','哈尔滨市|haerbin|heb','齐齐哈尔市|qiqihaer|qqhe','鸡西市|jixi|jx','鹤岗市|hegang|hg','双鸭山市|shuangyashan|sys','大庆市|daqing|dq','伊春市|yichun|yc','佳木斯市|jiamusi|jms','七台河市|qitaihe|qth','牡丹江市|mudanjiang|mdj','黑河市|heihe|hh','绥化市|suihua|sh','大兴安岭地区|daxinganling|dxaldq','徐州市|xuzhou|xz','南通市|nantong|nt','连云港市|lianyungang|lyg','淮安市|huaian|ha','盐城市|yancheng|yc','扬州市|yangzhou|yz','镇江市|zhenjiang|zj','泰州市|taizhou|tz','宿迁市|suqian|sq','宁波市|ningbo|nb','嘉兴市|jiaxing|jx','湖州市|huzhou|hz','绍兴市|shaoxing|sx','舟山市|zhoushan|zs','衢州市|quzhou|qz','金华市|jinhua|jh','台州市|taizhou|tz','丽水市|lishui|ls','芜湖市|wuhu|wh','蚌埠市|bengbu|bb','淮南市|huainan|hn','马鞍山市|maanshan|mas','淮北市|huaibei|hb','铜陵市|tongling|tl','安庆市|anqing|aq','黄山市|huangshan|hs','滁州市|chuzhou|cz','阜阳市|fuyang|fy','宿州市|suzhou|sz','巢湖市|chaohu|ch','六安市|luan|la','亳州市|bozhou|bz','池州市|chizhou|cz','宣城市|xuancheng|xc','福州市|fuzhou|fz','厦门市|xiamen|xm','莆田市|putian|pt','三明市|sanming|sm','泉州市|quanzhou|qz','漳州市|zhangzhou|zz','南平市|nanping|np','龙岩市|longyan|ly','宁德市|ningde|nd','景德镇市|jingdezhen|jdz','萍乡市|pingxiang|px','九江市|jiujiang|jj','新余市|xinyu|xy','鹰潭市|yingtan|yt','赣州市|ganzhou|gz','吉安市|jian|ja','宜春市|yichun|yc','抚州市|fuzhou|fz','上饶市|shangrao|sr','济南市|jinan|jn','淄博市|zibo|zb','枣庄市|zaozhuang|zz','东营市|dongying|dy','烟台市|yantai|yt','潍坊市|weifang|wf','济宁市|jining|jn','泰安市|taian|ta','威海市|weihai|wh','日照市|rizhao|rz','莱芜市|laiwu|lw','临沂市|linyi|ly','德州市|dezhou|dz','聊城市|liaocheng|lc','滨州市|binzhou|bz','菏泽市|heze|hz','开封市|kaifeng|kf','洛阳市|luoyang|ly','平顶山市|pingdingshan|pds','安阳市|anyang|ay','鹤壁市|hebi|hb','新乡市|xinxiang|xx','焦作市|jiaozuo|jz','濮阳市|puyang|py','许昌市|xuchang|xc','漯河市|luohe|lh','三门峡市|sanmenxia|smx','南阳市|nanyang|ny','商丘市|shangqiu|sq','信阳市|xinyang|xy','周口市|zhoukou|zk','驻马店市|zhumadian|zmd','济源市|jiyuan|jiyuan','黄石市|huangshi|hs','十堰市|shiyan|sy','宜昌市|yichang|yc','襄樊市|xiangfan|xf','鄂州市|ezhou|ez','荆门市|jingmen|jm','孝感市|xiaogan|xg','荆州市|jingzhou|jz','黄冈市|huanggang|hg','咸宁市|xianning|xn','随州市|suizhou|sz','恩施土家族苗族自治州|estjzmzzzz|estjzmzzzz','仙桃市|xiantao|xt','潜江市|qianjiang|qj','天门市|tianmen|tm','神农架林区|shennongjia|snjlq','株洲市|zhuzhou|zz','湘潭市|xiangtan|xt','衡阳市|hengyang|hy','邵阳市|shaoyang|sy','岳阳市|yueyang|yy','常德市|changde|cd','张家界市|zhangjiajie|zjj','益阳市|yiyang|yy','郴州市|chenzhou|cz','永州市|yongzhou|yz','怀化市|huaihua|hh','娄底市|loudi|ld','湘西土家族苗族自治州|xxtjzmzzzz|xxtjzmzzzz','韶关市|shaoguan|sg','珠海市|zhuhai|zh','汕头市|shantou|st','佛山市|foushan|fs','江门市|jiangmen|jm','湛江市|zhanjiang|jz','茂名市|maoming|mm','肇庆市|zhaoqing|zq','惠州市|huizhou|hz','梅州市|meizhou|mz','汕尾市|shanwei|sw','河源市|heyuan|hy','阳江市|yangjiang|yj','清远市|qingyuan|qy','东莞市|dongguan|dg','中山市|zhongshan|zs','潮州市|chaozhou|cz','揭阳市|jieyang|jy','云浮市|yunfu|yf','南宁市|nanning|nn','柳州市|liuzhou|lz','桂林市|guilin|gl','梧州市|wuzhou|wz','北海市|beihai|bh','防城港市|fangchenggang|fcg','钦州市|qinzhou|qz','贵港市|guigang|gg','玉林市|yulin|yl','百色市|baise|bs','贺州市|hezhou|hz','河池市|hechi|hc','来宾市|laibin|lb','崇左市|chongzuo|cz','海口市|haikou|hk','三亚市|sanya|sy','五指山市|wuzhishan|wzs','琼海市|qionghai|qh','儋州市|danzhou|dz','文昌市|wenchang|wc','万宁市|wanning|wn','东方市|dongfang|df','定安县|dingan|da','屯昌县|tunchang|tc','澄迈县|chengmai|cm','临高县|lingao|lg','白沙黎族自治县|bsnzzzx|bsnzzzx','昌江黎族自治县|cjlzzzx|cjlzzzx','乐东黎族自治县|ldlzzzx|ldlzzzx','陵水黎族自治县|lingshui|ls','保亭黎族苗族自治县|btlzmzzzx|btlzmzzzx','琼中黎族苗族自治县|qzlzmzzzx|qzlzmzzzx','西沙群岛|xishaqundao|xsqd','南沙群岛|nanshaqundao|nsqd','中沙群岛的岛礁及其海域|zhongshaqundao|zsqd','自贡市|zigong|zg','攀枝花市|panzhihua|pzh','泸州市|luzhou|lz','德阳市|deyang|dy','绵阳市|mianyang|my','广元市|guangyuan|gy','遂宁市|suining|sn','内江市|neijiang|nj','乐山市|leshan|ls','南充市|nanchong|nc','眉山市|meishan|ms','宜宾市|yibin|yb','广安市|guangan|ga','达州市|dazhou|dz','雅安市|yaan|ya','巴中市|bazhong|bz','资阳市|ziyang|zy','阿坝藏族羌族自治州|abzzqzzzz|abzzqzzzz','甘孜藏族自治州|gzzzzzz|gzzzzzz','凉山彝族自治州|lsyzzzz|lsyzzzz','贵阳市|guiyang|gy','六盘水市|liupanshui|lps','遵义市|zunyi|zy','安顺市|anshun|as','铜仁地区|tongren|tr','黔西南布依族苗族自治州|qxnbyzmzzzz|qxnbyzmzzzz','毕节地区|bijie|bj','黔东南苗族侗族自治州|qdnmzdzzzz|qdnmzdzzzz','黔南布依族苗族自治州|qnbyzmzzzz|qnbyzmzzzz','昆明市|kunming|km','曲靖市|qujing|qj','玉溪市|yuxi|yx','保山市|baoshan|bs','昭通市|zhaotong|zt','丽江市|lijiang|lj','思茅市|simao|sm','临沧市|lincang|lc','楚雄彝族自治州|cxyzzzz|cxyzzzz','红河哈尼族彝族自治州|hhhnzyzzzz|hhhnzyzzzz','文山壮族苗族自治州|wszzmzzzz|wszzmzzzz','西双版纳傣族自治州|xsbndzzzz|xsbndzzzz','大理白族自治州|dlbzzzz|dlbzzzz','德宏傣族景颇族自治州|dhdzjpzzzz|dhdzjpzzzz','怒江傈僳族自治州|njlszzzz|njlszzzz','迪庆藏族自治州|dqzzzzz|dqzzzzz','拉萨市|lasa|ls','昌都地区|changdudiqu|cd','山南地区|shannandiqu|sndq','日喀则地区|rikazediqu|rkzdq','那曲地区|naqudiqu|nqdq','阿里地区|alidiqu|aldq','林芝地区|linzhidiqu|lzdq','西安市|xian|xa','铜川市|tongchuan|tc','宝鸡市|baoji|bj','咸阳市|xianyang|xy','渭南市|weinan|wn','延安市|yanan|ya','汉中市|hanzhong|hz','榆林市|yulin|yl','安康市|ankang|ak','商洛市|shangluo|sl','兰州市|lanzhou|lz','嘉峪关市|jiayuguan|jyg','金昌市|jinchang|jc','白银市|baiyin|by','天水市|tianshui|ts','武威市|wuwei|ww','张掖市|zhangye|zy','平凉市|pingliang|pl','酒泉市|jiuquan|jq','庆阳市|qingyang|qy','定西市|dingxi|dx','陇南市|longnan|ln','临夏回族自治州|lxhzzzz|lxhzzzz','甘南藏族自治州|gnzzzzz|gnzzzzz','西宁市|xining|xn','海东地区|haidongdiqu|hddq','海北藏族自治州|hbzzzzz|hbzzzzz','黄南藏族自治州|hnzzzzz|hnzzzzz','海南藏族自治州|hnzzzzz|hnzzzzz','果洛藏族自治州|glzzzzz|hlzzzzz','玉树藏族自治州|yszzzzz|yszzzzz','海西蒙古族藏族自治州|hxmgzzzzzz|hxmgzzzzzz','银川市|yinchuan|yc','石嘴山市|shizuishan|szs','吴忠市|wuzhong|wz','固原市|guyuan|gy','中卫市|zhongwei|zw','乌鲁木齐市|wulumuqi|wlmq','克拉玛依市|kelamayi|klmy','吐鲁番地区|tulufandiqu|tlfdq','哈密地区|hamidiqu|hmdq','昌吉回族自治州|cjhzzzz|cjhzzzz','博尔塔拉蒙古自治州|betlmgzzz|betlmgzzz','巴音郭楞蒙古自治州|byglmgzzz|byglmgzzz','阿克苏地区|akesudiqu|aksdq','克孜勒苏柯尔克孜自治州|kzlskekzzzz|kzlskekzzzz','喀什地区|kashidiqu|ksdq','和田地区|hetian|ht','伊犁哈萨克自治州|ylhskzzz|ylhskzzz','塔城地区|tachengdiqu|tcdq','阿勒泰地区|aletaidiqu|altdq','石河子市|shihezi|shz','阿拉尔市|alaer|ale','图木舒克市|tumushuke|tmsk','五家渠市|wujiaqu|wjq','台北市|taibei|tb','高雄市|gaoxiong|gx','基隆市|jilong|jl','台中市|taizhong|tz','台南市|tainan|tn','新竹市|xinzhu|xz','嘉义市|jiayi|jy','台北县|taibeixian|tbx','宜兰县|yilanxian|ylx','桃园县|taoyuanxian|tyx','新竹县|xinzhuxian|xzx','苗栗县|miaolixian|mlx','台中县|taizhongxian|tzx','彰化县|zhanghuaxian|zhx','南投县|nantouxian|ntx','云林县|yunlinxian|ylx','嘉义县|jiayixian|jyx','台南县|tainanxian|tnx','高雄县|gaoxiongxian|gxx','屏东县|pingdongxian|pdx','澎湖县|penghuxian|phx','台东县|taidongxian|tdx','花莲县|hualianxian|hlx','中西区|zhongxiqu|zxq','东区|dongqu|dq','九龙城区|jiulongchengqu|jlcq','观塘区|guantangqu|gtq','南区|nanqu|nq','深水埗区|shenshuibuqu|ssbq','黄大仙区|huangdaxianqu|hdxq','湾仔区|wanzaiqu|wzq','油尖旺区|youjianwangqu|yjwq','离岛区|lidaoqu|ldq','葵青区|kuiqingqu|kqq','北区|beiqu|bq','西贡区|xigongqu|xgq','沙田区|shatianqu|stq','屯门区|tunmenqu|tmq','大埔区|dabuqu|dbq','荃湾区|quanwanqu|qwq','元朗区|yuanlangqu|ylq','花地玛堂区|huadimatangqu|hdmtq','圣安多尼堂区|shenganduonitangqu|sadntq','大堂区|datangqu|dtq','望德堂区|wangdetangqu|wdtq','风顺堂区|fengshuntangqu|fstq','嘉模堂区|jiamotangqu|jmtq','圣方济各堂区|shengfangjigetangqu|sfjgtq'];


// 正则表达式 筛选中文城市名、拼音、首字母 

Vcity.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i;
Vcity.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;

(function () {
    var citys = Vcity.allCity, match, letter,
            regEx = Vcity.regEx,
            reg2 = /^[a-b]$/i, reg3 = /^[c-d]$/i, reg4 = /^[e-g]$/i,reg5 = /^[h]$/i,reg6 = /^[j]$/i,reg7 = /^[k-l]$/i,reg8 =  /^[m-p]$/i,reg9 =  /^[q-r]$/i,reg10 =  /^[s]$/i,reg11 =  /^[t]$/i,reg12 =  /^[w]$/i,reg13 =  /^[x]$/i,reg14 =  /^[y]$/i,reg15 =  /^[z]$/i;
    if (!Vcity.oCity) {
        Vcity.oCity = {hot:{},AB:{},CD:{},EFG:{},H:{},J:{},KL:{},MNP:{},QR:{},S:{},T:{},W:{},X:{},Y:{},Z:{}};
        //console.log(citys.length);
        for (var i = 0, n = citys.length; i < n; i++) {
            match = regEx.exec(citys[i]);
            letter = match[3].toUpperCase();
            if (reg2.test(letter)) {
                if (!Vcity.oCity.AB[letter]) Vcity.oCity.AB[letter] = [];
                Vcity.oCity.AB[letter].push(match[1]);
            } else if (reg3.test(letter)) {
                if (!Vcity.oCity.CD[letter]) Vcity.oCity.CD[letter] = [];
                Vcity.oCity.CD[letter].push(match[1]);
            } else if (reg4.test(letter)) {
                if (!Vcity.oCity.EFG[letter]) Vcity.oCity.EFG[letter] = [];
                Vcity.oCity.EFG[letter].push(match[1]);
            }else if (reg5.test(letter)) {
                if (!Vcity.oCity.H[letter]) Vcity.oCity.H[letter] = [];
                Vcity.oCity.H[letter].push(match[1]);
            }else if (reg6.test(letter)) {
                if (!Vcity.oCity.J[letter]) Vcity.oCity.J[letter] = [];
                Vcity.oCity.J[letter].push(match[1]);
            }else if (reg7.test(letter)) {
                if (!Vcity.oCity.KL[letter]) Vcity.oCity.KL[letter] = [];
                Vcity.oCity.KL[letter].push(match[1]);
            }else if (reg8.test(letter)) {
                if (!Vcity.oCity.MNP[letter]) Vcity.oCity.MNP[letter] = [];
                Vcity.oCity.MNP[letter].push(match[1]);
            }else if (reg9.test(letter)) {
                if (!Vcity.oCity.QR[letter]) Vcity.oCity.QR[letter] = [];
                Vcity.oCity.QR[letter].push(match[1]);
            }else if (reg10.test(letter)) {
                if (!Vcity.oCity.S[letter]) Vcity.oCity.S[letter] = [];
                Vcity.oCity.S[letter].push(match[1]);
            }else if (reg11.test(letter)) {
                if (!Vcity.oCity.T[letter]) Vcity.oCity.T[letter] = [];
                Vcity.oCity.T[letter].push(match[1]);
            }else if (reg12.test(letter)) {
                if (!Vcity.oCity.W[letter]) Vcity.oCity.W[letter] = [];
                Vcity.oCity.W[letter].push(match[1]);
            }else if (reg13.test(letter)) {
                if (!Vcity.oCity.X[letter]) Vcity.oCity.X[letter] = [];
                Vcity.oCity.X[letter].push(match[1]);
            }else if (reg14.test(letter)) {
                if (!Vcity.oCity.Y[letter]) Vcity.oCity.Y[letter] = [];
                Vcity.oCity.Y[letter].push(match[1]);
            }else if (reg15.test(letter)) {
                if (!Vcity.oCity.Z[letter]) Vcity.oCity.Z[letter] = [];
                Vcity.oCity.Z[letter].push(match[1]);
            }

            // 热门城市 前16条 
            if(i<20){
                if(!Vcity.oCity.hot['hot']) Vcity.oCity.hot['hot'] = [];
                Vcity.oCity.hot['hot'].push(match[1]);
            }
        }
    }
})();


// 城市HTML模板 
Vcity._template = [
    '<p class="tip">直接输入可搜索城市(支持汉字/拼音)</p>',
    '<ul>',
    '<li class="on">热门城市</li>',
    '<li>AB</li>',
    '<li>CD</li>',
    '<li>EFG</li>',
    '<li>H</li>',
    '<li>J</li>',
    '<li>KL</li>',
    '<li>MNP</li>',
    '<li>QR</li>',
    '<li>S</li>',
    '<li>T</li>',
    '<li>W</li>',
    '<li>X</li>',
    '<li>Y</li>',
    '<li>Z</li>',
    '</ul>'
];


//城市控件构造函数

Vcity.CitySelector = function () {
    this.initialize.apply(this, arguments);
};

Vcity.CitySelector.prototype = {

    constructor:Vcity.CitySelector,

    // 初始化 

    initialize :function (options) {
        var input = options.input;
        this.input = Vcity._m.$('#'+ input);
        this.inputEvent();
    },


 //创建城市BOX HTML 框架


    createWarp:function(){
        var inputPos = Vcity._m.getPos(this.input);
        var div = this.rootDiv = document.createElement('div');
        var that = this;

        // 设置DIV阻止冒泡
        Vcity._m.on(this.rootDiv,'click',function(event){
            Vcity._m.stopPropagation(event);
        });

        // 设置点击文档隐藏弹出的城市选择框
        Vcity._m.on(document, 'click', function (event) {
            event = Vcity._m.getEvent(event);
            var target = Vcity._m.getTarget(event);
            if(target == that.input) return false;
            //console.log(target.className);
            if (that.cityBox)Vcity._m.addClass('hide', that.cityBox);
            if (that.ul)Vcity._m.addClass('hide', that.ul);
            if(that.myIframe)Vcity._m.addClass('hide',that.myIframe);
        });
        div.className = 'citySelector';
        div.style.position = 'absolute';
        div.style.left = inputPos.left + 'px';
        div.style.top = inputPos.bottom + 5 + 'px';
        div.style.zIndex = 999999;

        // 判断是否IE6，如果是IE6需要添加iframe才能遮住SELECT框
        var isIe = (document.all) ? true : false;
        var isIE6 = this.isIE6 = isIe && !window.XMLHttpRequest;
        if(isIE6){
            var myIframe = this.myIframe =  document.createElement('iframe');
            myIframe.frameborder = '0';
            myIframe.src = 'about:blank';
            myIframe.style.position = 'absolute';
            myIframe.style.zIndex = '-1';
            this.rootDiv.appendChild(this.myIframe);
        }

        var childdiv = this.cityBox = document.createElement('div');
        childdiv.className = 'cityBox';
        childdiv.id = 'cityBox';
        childdiv.innerHTML = Vcity._template.join('');
        var hotCity = this.hotCity =  document.createElement('div');
        hotCity.className = 'hotCity';
        childdiv.appendChild(hotCity);
        div.appendChild(childdiv);
        this.createHotCity();
    },



     //TAB下面DIV：hot,a-h,i-p,q-z 分类HTML生成，DOM操作
     //{HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{},QRSTUVWXYZ:{}}


    createHotCity:function(){
        var odiv,odl,odt,odd,odda=[],str,key,ckey,sortKey,regEx = Vcity.regEx,
                oCity = Vcity.oCity;
        for(key in oCity){
            odiv = this[key] = document.createElement('div');
            // 先设置全部隐藏hide
            odiv.className = key + ' ' + 'cityTab hide';
            sortKey=[];
            for(ckey in oCity[key]){
                sortKey.push(ckey);
                // ckey按照ABCDEDG顺序排序
                sortKey.sort();
            }
            for(var j=0,k = sortKey.length;j<k;j++){
                odl = document.createElement('dl');
                odt = document.createElement('dt');
                odd = document.createElement('dd');
                odt.innerHTML = sortKey[j] == 'hot'?'&nbsp;':sortKey[j];
                odda = [];
                for(var i=0,n=oCity[key][sortKey[j]].length;i<n;i++){
                    str = '<a href="#">' + oCity[key][sortKey[j]][i] + '</a>';
                    odda.push(str);
                }
                odd.innerHTML = odda.join('');
                odl.appendChild(odt);
                odl.appendChild(odd);
                odiv.appendChild(odl);
            }

            // 移除热门城市的隐藏CSS
            Vcity._m.removeClass('hide',this.hot);
            this.hotCity.appendChild(odiv);
        }
        document.body.appendChild(this.rootDiv);
        // IE6
        this.changeIframe();

        this.tabChange();
        this.linkEvent();
    },


   // tab按字母顺序切换
 

    tabChange:function(){
        var lis = Vcity._m.$('li',this.cityBox);
        var divs = Vcity._m.$('div',this.hotCity);
        var that = this;
        for(var i=0,n=lis.length;i<n;i++){
            lis[i].index = i;
            lis[i].onclick = function(){
                for(var j=0;j<n;j++){
                    Vcity._m.removeClass('on',lis[j]);
                    Vcity._m.addClass('hide',divs[j]);
                }
                Vcity._m.addClass('on',this);
                Vcity._m.removeClass('hide',divs[this.index]);
                // IE6 改变TAB的时候 改变Iframe 大小
                that.changeIframe();
            };
        }
    },


     // 城市LINK事件


    linkEvent:function(){
        var links = Vcity._m.$('a',this.hotCity);
        var that = this;
        for(var i=0,n=links.length;i<n;i++){
            links[i].onclick = function(){
                that.input.value = this.innerHTML;
                Vcity._m.addClass('hide',that.cityBox);
                // 点击城市名的时候隐藏myIframe 
                Vcity._m.addClass('hide',that.myIframe);
            }
        }
    },


     // INPUT城市输入框事件


    inputEvent:function(){
        var that = this;
        Vcity._m.on(this.input,'click',function(event){
            event = event || window.event;
            if(!that.cityBox){
                that.createWarp();
            }else if(!!that.cityBox && Vcity._m.hasClass('hide',that.cityBox)){
                // slideul 不存在或者 slideul存在但是是隐藏的时候 两者不能共存
                if(!that.ul || (that.ul && Vcity._m.hasClass('hide',that.ul))){
                    Vcity._m.removeClass('hide',that.cityBox);

                    // IE6 移除iframe 的hide 样式 
                    //alert('click');
                    Vcity._m.removeClass('hide',that.myIframe);
                    that.changeIframe();
                }
            }
        });
        // Vcity._m.on(this.input,'focus',function(){
        //     that.input.select();
        //     if(that.input.value == '城市名') that.input.value = '';
        // });
        Vcity._m.on(this.input,'blur',function(){
            // if(that.input.value == '') that.input.value = '城市名';
            
            var value = Vcity._m.trim(that.input.value);
            if(value != ''){
                var reg = new RegExp("^" + value + "|\\|" + value, 'gi');
                var flag=0;
                for (var i = 0, n = Vcity.allCity.length; i < n; i++) {
                    if (reg.test(Vcity.allCity[i])) {
                        flag++;
                    }
                }
                if(flag==0){
                    that.input.value= '';
                }else{
                    var lis = Vcity._m.$('li',that.ul);
                    if(typeof lis == 'object' && lis['length'] > 0){
                        var li = lis[0];
                        var bs = li.children;
                        if(bs && bs['length'] > 1){
                            that.input.value = bs[0].innerHTML;
                        }
                    }else{
                        that.input.value = '';
                    }
                }
            }

        });
        Vcity._m.on(this.input,'keyup',function(event){
            event = event || window.event;
            var keycode = event.keyCode;
            Vcity._m.addClass('hide',that.cityBox);
            that.createUl();

            // 移除iframe 的hide 样式 
            Vcity._m.removeClass('hide',that.myIframe);

            // 下拉菜单显示的时候捕捉按键事件
            if(that.ul && !Vcity._m.hasClass('hide',that.ul) && !that.isEmpty){
                that.KeyboardEvent(event,keycode);
            }
        });
    },


     // 生成下拉选择列表


    createUl:function () {
        //console.log('createUL');
        var str;
        var value = Vcity._m.trim(this.input.value);
        // 当value不等于空的时候执行
        if (value !== '') {
            var reg = new RegExp("^" + value + "|\\|" + value, 'gi');
            // 此处需设置中文输入法也可用onpropertychange
            var searchResult = [];
            for (var i = 0, n = Vcity.allCity.length; i < n; i++) {
                if (reg.test(Vcity.allCity[i])) {
                    var match = Vcity.regEx.exec(Vcity.allCity[i]);
                    if (searchResult.length !== 0) {
                        str = '<li><b class="cityname">' + match[1] + '</b><b class="cityspell">' + match[2] + '</b></li>';
                    } else {
                        str = '<li class="on"><b class="cityname">' + match[1] + '</b><b class="cityspell">' + match[2] + '</b></li>';
                    }
                    searchResult.push(str);
                }
            }
            this.isEmpty = false;
            // 如果搜索数据为空
            if (searchResult.length == 0) {
                this.isEmpty = true;
                str = '<li class="empty">对不起，没有找到 "<em>' + value + '</em>"</li>';
                searchResult.push(str);
            }
            // 如果slideul不存在则添加ul
            if (!this.ul) {
                var ul = this.ul = document.createElement('ul');
                ul.className = 'cityslide mCustomScrollbar';
                this.rootDiv && this.rootDiv.appendChild(ul);
                // 记录按键次数，方向键
                this.count = 0;
            } else if (this.ul && Vcity._m.hasClass('hide', this.ul)) {
                this.count = 0;
                Vcity._m.removeClass('hide', this.ul);
            }
            this.ul.innerHTML = searchResult.join('');

            // IE6
            this.changeIframe();

            // 绑定Li事件
            this.liEvent();
        }else{
            Vcity._m.addClass('hide',this.ul);
            Vcity._m.removeClass('hide',this.cityBox);

            Vcity._m.removeClass('hide',this.myIframe);

            this.changeIframe();
        }
    },

    // IE6的改变遮罩SELECT 的 IFRAME尺寸大小 
    changeIframe:function(){
        if(!this.isIE6)return;
        this.myIframe.style.width = this.rootDiv.offsetWidth + 'px';
        this.myIframe.style.height = this.rootDiv.offsetHeight + 'px';
    },


     //特定键盘事件，上、下、Enter键


    KeyboardEvent:function(event,keycode){
        var lis = Vcity._m.$('li',this.ul);
        var len = lis.length;
        switch(keycode){
            case 40: //向下箭头↓
                this.count++;
                if(this.count > len-1) this.count = 0;
                for(var i=0;i<len;i++){
                    Vcity._m.removeClass('on',lis[i]);
                }
                Vcity._m.addClass('on',lis[this.count]);
                break;
            case 38: //向上箭头↑
                this.count--;
                if(this.count<0) this.count = len-1;
                for(i=0;i<len;i++){
                    Vcity._m.removeClass('on',lis[i]);
                }
                Vcity._m.addClass('on',lis[this.count]);
                break;
            case 13: // enter键
                this.input.value = Vcity.regExChiese.exec(lis[this.count].innerHTML)[0];
                Vcity._m.addClass('hide',this.ul);
                Vcity._m.addClass('hide',this.ul);
                // IE6 
                Vcity._m.addClass('hide',this.myIframe);
                break;
            default:
                break;
        }
    },

//下拉列表的li事件


    liEvent:function(){
        var that = this;
        var lis = Vcity._m.$('li',this.ul);
        for(var i = 0,n = lis.length;i < n;i++){
            Vcity._m.on(lis[i],'click',function(event){ 
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                that.input.value = Vcity.regExChiese.exec(target.innerHTML)[0];
                Vcity._m.addClass('hide',that.ul);
                // IE6 下拉菜单点击事件 
                Vcity._m.addClass('hide',that.myIframe);
            });
            Vcity._m.on(lis[i],'mouseover',function(event){
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.addClass('on',target);
            });
            Vcity._m.on(lis[i],'mouseout',function(event){
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.removeClass('on',target);
            })
        }
    }
};


/*
$(function(){
	$('.condition #country-s').change(function(){
		$element=$(this).find("option:selected")
		var regionval=$element.val();
		var region=$element.text();
		$('#Italy').addClass('hide-element');
		$('.default-distinct').removeClass('hide-element')
		$('.choice .locate-cate .country-s').remove();
		$('.choice .locate-cate .distinct-s').remove();
		if (regionval!='none'){
			$('.choice .locate-cate p').addClass('hide-element');
			$('.choice .locate-cate').append("<p class='country-s cates'><span>"+region+"</span><span>×</span></p>");
			$('.default-distinct').addClass('hide-element');
			if(regionval=='Italy意大利'){
				$('#Italy').removeClass('hide-element');
			}
		}else{
			$('.choice .locate-cate p').removeClass('hide-element');
		}
		
		if($('.choice .locate-cate p').length==1){
			$('.choice .locate-cate p').removeClass('hide-element');
		}
		
	})
	
	$('.condition .distinct-s').change(function(){
		$element=$(this).find("option:selected")
		var regionval=$element.val();
		var region=$element.text();
		$('.choice .locate-cate .distinct-s').remove();
		if (regionval!='none'){
			$('.choice .locate-cate').append("<p class='distinct-s cates'><span>"+region+"</span><span>×</span></p>");
		}
	})
	
	$('.condition .kind-s').change(function(){
		$(this).parent().siblings().find("input").removeAttr('checked');
		$selected=$('.condition .kind-s:checked');
		$('.company-cate .kind-s').remove()
		$('.company-cate p').addClass('hide-element');
		kinds=$selected.val()
		if(kinds=='贸易'){
			$('.service-s, .service-s #business-check').removeClass('hide-element');
			$('.service-s #logistics-check').addClass('hide-element');
			$('.choice .service-cate .service-s').remove();
			$('.choice .service-cate p').removeClass('hide-element');
			$('.condition .condition-check input:checked').removeAttr('checked');
			
		}else if(kinds=='物流'){
			$('.service-s, .service-s #logistics-check').removeClass('hide-element');
			$('.service-s #business-check').addClass('hide-element');
			$('.choice .service-cate .service-s').remove();
			$('.choice .service-cate p').removeClass('hide-element');
			$('.condition .condition-check input:checked').removeAttr('checked')
		}else{
;			$('.service-s').addClass('hide-element');
		}
		if(kinds!=null&&kinds!=undefined&&kinds!=''){
			$('.choice .company-cate').append("<p class='kind-s cates'><span>"+kinds+"</span><span>×</span></p>");	
		}
		if($('.choice .company-cate p').length==1){
			$('.choice .company-cate p').removeClass('hide-element');
			$('.service-cate .service-s').remove();
			$('.choice .service-cate p').removeClass('hide-element')
		}
	})
	
	$('.service-s .condition-check').change(function(){
		$('.choice .service-cate p').addClass('hide-element');
		$selected=$('.condition .condition-check input:checked');
		$('.choice .service-cate .service-s').remove();
		if($selected.length!=0){
			$selected.each(function(){
				$('.choice .service-cate').append("<p class='service-s cates'><span>"+$(this).val()+"</span><span>×</span></p>");
			})
		}else{
			$('.choice .service-cate p').removeClass('hide-element');
		}
	})
	
	$('.keyword #zipcode-s button').click(function(){
		alert('test');
		$('.choice .zipcode-cate p').addClass('hide-element');
		$('.choice .zipcode-cate .zipcode-s').remove();
		var zipcode=$('.keyword #zipcode-s input').val()
		$('.choice .zipcode-cate').append("<p class='zipcode-s cates'><span>"+zipcode+"</span><span>×</span></p>");
	})
	
	$(document).on('click','.choice .cate .cates',function(){
		var cla=$(this).attr('class').split(' ')[0];
		var vals=$(this).text();
		if(cla=='country-s'){
			$('.condition #service-s option').each(function(){
				alert($(this).text())
			})
		}
		alert(cla)
		if($(this).parent().children().length==2){
			$(this).siblings().removeClass('hide-element');
		}
		$(this).remove();

	})

})
*/