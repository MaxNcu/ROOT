
var regionurl="http://127.0.0.1:5000/getcountry"
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
language='zh'
if(language=='zh'){
	lang=zh;
}else if(language=='en'){
	lang=en;
}

//mobile
$(function(){
	$('.viewport .expander .menu a').click(function(){
		temp=$(this).attr('id');
		word=lang[temp];
        $('.item').each(function(){
        	var show=0
        	$(this).find('p').each(function(){
        	    temp=$(this).text()
        	    temp=temp.replace('/','')
        	    if(temp==word){
        	    	show=1
        	    }
        	})
        	if(show==0){
        		$(this).addClass('hide-element')
        	}else{
        		$(this).removeClass('hide-element')
        	}
        })
		return false;
	})
})
//language
$(function(){
	$("select #default-value").text(lang['xuanze'])
	$('.fbgj .tggl-top').css('width','110px')
	$('#pifa').parent().append(lang['pifa'])
	$('#lingshou').parent().append(lang['lingshou'])
	$('#mainservice').text(lang['mainservice'])
	$('.tag-check #fuzhuang').parent().append(lang['fuzhuang'])
	$('.tag-check #xiangbao').parent().append(lang['xiangbao'])
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
	$('#messages').text(lang['hzanneixinxi'])
	$('#nickname').text(lang['yonghunicheng'])
	$('#membergroup').text(lang['huiyuanzubie'])
	$('#gender').text(lang['xingbie'])
	$('#birthday').text(lang['chushengriqi'])
	$('#realname').text(lang['zhenshixingming'])
	$('#emailpass').text(lang['youxiang'])
	$('#mobile').text(lang['shouji'])
	$('#telephone').text(lang['gudingdianhua'])
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
	$('#zipcode-lang span:first').text(lang['youbian'])
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

    
	
	if(language=='en'){
		$('.zh').addClass('hide-element')
		$('.en').removeClass('hide-element')
		
	}else if(language=='zh'){
		$('.en').addClass('hide-element')
		$('.zh').removeClass('hide-element')

	}
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

//wechat
$(function(){
	$('a').click(function(){
		href=$(this).attr('href');
		tags=href.split('?');
		if(href!='' || href!=null||href!=undefined){
			if(tags.length>1){
				return false;
			}else{
				window.location.replace(href);
				return false;
			}
		}
	})
})