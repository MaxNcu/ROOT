<#--
构建一个没有内容的label，或者没有label的行。
用于自定义内容和无label的行。
<td></td>
-->
<#macro td id=""
	label="" noHeight="false" required="false" colspan="" width="100" help="" helpPosition="2" colon=":" hasColon="true"
	>
<#if label!="">
<td<#if id?? && id!=""> id="${id}"</#if> width="30px" class="pn-flabel<#if noHeight=='false'> pn-flabel-h</#if>"><#if required!="false"><span class="pn-frequired">*</span></#if>
<#if label=='作者'>
<#assign label1='联系方式'>
<@s.mt code=label text=label1/>
<#elseif label=='栏目'>
<#assign label1='公司类型'>
<@s.mt code=label text=label1/>
<#elseif label=='标题'>
<#assign label1='公司名称'>
<@s.mt code=label text=label1/>
<#else>
<@s.mt code=label text=label/>
</#if>
<#if hasColon="true">${colon}</#if></td><#rt/>
<td<#if colspan!=""> colspan="${colspan?number*2-1}"</#if> width="${width?number-labelWidth?number}%" class="pn-fcontent"><#rt/>
<#else>
<td<#if id?? && id!=""> id="${id}"</#if> colspan="<#if colspan=="">2<#else>${colspan?number*2}</#if>" class="pn-fbutton"><#rt/>
</#if>
<#if help!="" && helpPosition=='1'><div class="pn-fhelp"><@s.mt code=help text=help/></div></#if>
<#nested/>
<#if help!='' && helpPosition=='2'>
 <span class="pn-fhelp"><@s.mt code=help text=help/></span><#rt/>
<#elseif help!='' && helpPosition=='3'>
<div class="pn-fhelp"><@s.mt code=help text=help/></div><#rt/>
</#if>
</td><#rt/>
</#macro>
