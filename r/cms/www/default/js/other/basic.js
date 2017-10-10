var Days = 7;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
    if(arr=document.cookie.match(reg)){
      return unescape(arr[2]);
    }
    else{
     return null;
    }
}
//content
$(function(){
	text = $('.content-txt').text()
})
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
	$('.company-list a').eq(0).text(lang['gongsiziliao'])
	$('.company-list a').eq(1).text(lang['xinjiangongsiziliao'])
	$('.zanwuxinxi').text(lang['zanwuxinxi'])
	$('.zanwuliuyan').text(lang['zanwuliuyan'])
	$('.selfinfromation a').eq(1).text(lang['xiugaigerenziliao'])
	$('.selfinfromation a').eq(2).text(lang['xiugaimima'])
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
	$('.lang-intro').text(lang['jianjie'])
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
	$('#message-title').text(lang['zaixianliuyan'])
	$('#message-content').text(lang['nindeliuyan'])
	$('#message-name').text(lang['nindexingming'])
	$('#message-tel').text(lang['nindedianhua'])
	$('#message-verify').text(lang['yanzhengma'])
	$('#our-title').text(lang['womendelianxifangshi'])
	$('#our-location').text(lang['dizhi'])
	$('#our-tel').text(lang['dianhua'])
	$('#our-fax').text(lang['chuanzhen'])
	$('#our-email').text(lang['youxiang'])
	$('#guest-title').text(lang['lianxiwomen'])
	$('.detailcontent').text(lang['xiangxineirong'])
	$('#tianjiaweixin-lang').text(lang['tianjiaweixin'])
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
	        	$('#myModal p').html(temp1)
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
		$('.right-bar .right-contact p').css('width','105px')
		$('.info-title p').css('font-size','13px')
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
		$('.right-bar .right-contact p').css('width','56px')
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
		$('.right-bar .right-contact p').css('width','135px')
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
			alert(data)
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
    	tel=':'+$('.contact-show #tel').val()
    	qq=':'+$('.contact-show #qq').val()
    	email=':'+$('.contact-show #email').val()
    	wechat=':'+$('.contact-show #wechat').val()
    	website=':'+$('.contact-show #website').val()
    	mob=':'+$('.contact-show #mob').val()
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
		 if(s.length==0){
			 s.push('其他');
		 };
		 codepic=$('#attachmentPaths0').val()
		 $('#ctags').val(t+'+'+s);
		 $('#txt').val("");
		 $('#description').val('');
		 $('#description').val("<p class='hide-element'>"+region.join(',')+"~</p>"+$('#description-show').val());
		 txtreg=new RegExp("\n","g")
		 defreg=new RegExp('[+#~]','g')
		 space=new RegExp(" ","g")
		 txtup=$('#txt-show').val().replace(reg,'\n</p><p>')
		 txtup=txtup.replace(space,'&nbsp;')
		 txtup=txtup.replace(defreg,'-')
		 $('#txt').val(txtup+"<br><p class='hide-element ppic'>"+ codepic +"</p><p class='hide-element'>tags: "+$('#ctags').val()+"#"+$('#description').val()+"</p>");	
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
			var templocation=$(this).find('[id=search-txt]').children().text();
			if(templocation.indexOf(slocation)!=-1 && slocation.length!=0){
				$(this).show();
			}
			if(skeyword.length==0 && slocation.length==0 && szipcode.length==0){
				$(this).show();
			}
		})
	})
})
