<template>
<!-------------------------------------底部页脚----------------------------------------------->
<div class="footer">
	<p class="footer_link">
		<a href="http://www.yinyuetai.com/article/3" target="_blank" title="关于我们">关于我们</a>
		<span class="ico_line"></span>
		<a href="http://www.yinyuetai.com/joinus" target="_blank" title="人才招聘">人才招聘</a>
		<span class="ico_line"></span>
		<a href="http://www.yinyuetai.com/article/1" target="_blank" title="联系我们">联系我们</a>
		<span class="ico_line"></span>
		<a href="http://www.yinyuetai.com/links" target="_blank" title="友情链接">友情链接</a>
		<span class="ico_line"></span>
		<a href="http://www.yinyuetai.com/article/4" target="_blank" title="版权声明">版权声明</a>
		<span class="ico_line"></span>
		<a href="http://www.yinyuetai.com/service/problem" target="_blank" title="客服中心">客服中心</a>
	</p>

	<p class="footer_copy">
		<a href="###" target="_blank">
			<img src="../assets/culture.png" style="vertical-align: top;width:25px;height:25px;margin-right:3px;">
		</a>
		Copyright © 2009 - 2017 yinyuetai.com 广播电视节目制作经营 许可证编号(京)字第1891号 | <a href="###" target="_blank">京网文[2014]2037-287号</a>
		| <a href="###" title="网络视听许可证0110413号" target="_blank">网络视听许可证0110413号</a><br>
		<a class="police-store" href="###" target="_blank">
			<img src="../assets/ghs.png" style="vertical-align: top;">
			京公网安备11010502014900号
		</a>| 京ICP备11024134号-1 | 京ICP证060716号 | 出版物经营许可证 <a href="###" target="_blank">新出发京批字第直160022号</a> | 增值电信业务经营许可证B2-20140501
		<a href="###" target="_blank" class="positionImg">
			<img src="../assets/biaoshi.gif" style="vertical-align: top; margin-top: -25px;"></a>
	</p>
</div>

  	
  	<!-------------------------------------底部页脚----------------------------------------------->
</template>

<script>
export default {
	data:function(){
		return{
			
		}
	}
}
</script>

<style>
/*----------------------------------------底部页脚样式---------------------------------------------*/
.footer {
    margin: 30px auto 0;
    min-width: 1000px;
    height: 150px;
    color: #999;
    line-height: 22px;
    text-align: center;
    background-color: #fff;
    font-size: 12px;
}
.footer.black{
	background-color: #181818;
}
.footer_link {
    font-size: 14px;
    padding: 35px 0 20px;
    color: #666;
}
.footer_link a {
    color: #666;
}
.ico_line {
    width: 2px;
    height: 10px;
    margin: 0 8px;
    display: inline-block;
    overflow: hidden;
    background: url("../assets/ico_index.png") no-repeat -70px 0;
}
.footer_copy a {
    color: #999;
}
/*----------------------------------------底部页脚样式---------------------------------------------*/
</style>