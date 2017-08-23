<template>
<!-------------------------------------头部导航条--------------------------------------------->
  	<div class="topbar">
  	  <div class="content">
  	  	<!--logo-->
  	  	<h1 class="fl">
  	  		<a href="http://www.yinyuetai.com" class="logo" title="音悦Tai" >音悦Tai - Logo</a>
  	  	</h1>
  	  	<!--首页导航-->
  	  	<ul class="menus fl">
			<li class="menu hoverhandler">
				<a href="/" class="link statisEle">首页</a>
			</li>
			<li class="menu hoverhandler">
				<router-link to="/all" class="link statisEle">
					<span class="fl" style="*margin-top:-1px;">MV</span>
					<b class="fl"></b>
				</router-link>
				<ul class="dropdownmenu fillet">
					<li>
						<a href="http://mv.yinyuetai.com/?id=10" class="fillet statisEle ">韩流频道</a>
					</li>
					<li>
						<a href="http://mv.yinyuetai.com/?id=8" class="statisEle ">华语频道</a>
					</li>
					<li>
						<a href="http://mv.yinyuetai.com/?id=9" class="statisEle ">欧美频道</a>
					</li>
					<li>
						<a href="http://mv.yinyuetai.com/?id=11" class="statisEle ">日语频道</a>
					</li>
          <li>
            <a href="http://mv.yinyuetai.com/?id=12" class="statisEle ">粉丝聚焦</a>
          </li>
				</ul>
			</li>
			<li class="menu hoverhandler">
				<router-link to="/vb" class="link statisEle"><span class="fl">V榜</span></router-link>
			</li>
			<li class="menu hoverhandler">
				<router-link to="/yl" class="link statisEle">
					<span class="fl">娱乐</span>
				</router-link>

			</li>
			<li class="menu">
				<a href="#/sc" class="link shopgif statisEle " target="_blank" >商城</a>
			</li>
			<li class="menu hoverhandler">
				<router-link to="/zc" class="link statisEle ">
					<span class="fl">众筹</span>
				</router-link>
			</li>
			<li class="menu hoverhandler menu_folk" >
				<router-link to="/ms" class="link statisEle ">
					<span class="fl">民俗文化</span>
				</router-link>
			</li>
		</ul>
		<!--登录注册-->
		<div class="login fr">
			<a href="###" class="loginBtn J_login statisEle">登录</a>
			<a href="###" class="J_register statisEle">注册</a>
		</div>
		<!--移动客户端-->
		<ul class="menus appBox fr">
			<li class="menu hoverhandler">
				<a href="###" target="_blank" class="link statisEle">
					<span class="fl appIcon"></span>
					<b class="fl"></b>
				</a>
				<!--移动客户端选项卡  	:hover-->
				<ul class="dropdownmenu fillet" style="width:95px;">
					<li>
						<a href="http://www.yinyuetai.com/apps/mobile" target="_blank" class="statisEle">移动客户端</a>
					</li>
					<li>
						<a href="http://www.yinyuetai.com/apps/yinyue_mini" target="_blank" class="statisEle" >PC客户端</a>
					</li>
					<li>
						<a href="http://startv.yinyuetai.com/app.html" target="_blank" class="statisEle ">Star明星直播</a>
					</li>
				</ul>
			</li>
		</ul>
		<!--投稿-->
		<div class="upload fr">
			<a class="uploadBtn statisEle" href="http://i.yinyuetai.com/upload" title="投稿"></a>
		</div>
		<!--VIP会员-->
		<div class="vip fr">
			<a class="vipBtn statisEle" href="http://vip.yinyuetai.com" title="vip会员"></a>
		</div>
		<!--搜索框-->
		<div class="search fr">	
					<div class="left_park_side"></div>
					<div class="right_park_side"></div>
					<form action="http://so.yinyuetai.com" target="_blank">
						<div class="searchbody statisEle">
								<input type="text" name="keyword" autocomplete="off" placeholder="多位歌手演绎《默》你喜欢哪个?">
						</div>
						<button type="submit" class="statisEle logStatisEle">搜索</button>
					</form>
					<ul class="autocomplete autocompletehide"></ul>
				</div>
  	  </div>
  	</div>
<!-------------------------------------头部导航条--------------------------------------------->

</template>

<script>
$(function(){
	$(".menus li").children().eq(0).addClass("active")
	$(".menus li").click(function(){
		$(".menus li").children().removeClass("active")
		$(this).children().addClass("active")
	})
})
export default {
	data:function(){
		return{
			
		}
	}
}
</script>

<style>
/*--------------------------------------------头部导航条样式---------------------------------------*/

html,body {
	width:100%;
	height: 100%;
}
ul,li{
	list-style: none;
	padding: 0;
	margin: 0;
}
.topbar{
	width: 100%;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	/*overflow: hidden;*/
	z-index: 299;
  background: #000;
}
.fl{
	float: left;
}
.logo{
	display: block;
	width: 242px;
	height: 49px;
	margin: 0px 0px 0px -51px;
	text-indent: -999px;                       /*首行文本的缩进  把logo 里的文本脱离可视区域  但又能让搜索引擎找到*/
	background: url("../assets/logo.png") no-repeat;

}
.topbar .content{
	max-width: 1560px;
  min-width: 982px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
.menus{
	text-align: center;
	line-height: 50px;
	font-size: 14px;
}
.menu{
	float: left;
	margin: 0px 6px;
}
.menu a.current{
	color: #cf9;
}
.topbar .shopgif {
    background: url("../assets/shop2.gif") no-repeat;
}
.topbar .link {
	display: block;
	padding: 0 12px 0 13px;
	line-height: 50px;
	color: #ccc;
	font-size: 14px;
	cursor: pointer;
	overflow: hidden;
}
.topbar .link.active{
	color: #cf9;
}
/*.topbar .link.router-link-active{
	color: #cf9;
}*/
.topbar b {
	width: 7px;
	height: 4px;
	cursor: pointer;
	margin: 23px 0 0 3px;
	font-size: 0;
	background: url("../assets/topbar_sprite.png") no-repeat -223px -18px;
	position: relative;
}

/*----------------------------------------右侧-------------------------------------*/
.fr{
	float: right;
}
.login {
	width: 100px;
	height: 50px;
	line-height: 50px;
	font-size: 14px;
	margin-left: 15px;
}
.login a {
	color: #ccc;
}
.login .loginBtn {
	padding-right: 15px;
	margin-right: 11px;
	border-right: 1px solid #666;
}
.topbar .menu {
	float: left;
	margin: 0 6px;
}
.topbar .appIcon {
	background: url("../assets/app.png") no-repeat;
	width: 21px;
	height: 33px;
	margin-top: 17px;
}
.topbar .hoverhandler {
	position: relative;
	cursor: pointer;
}
.dropdownmenu{
	position: absolute;
	top: 50px;
	left: 0;
	width: 80px;
	height: 0;
	opacity: 0;
	overflow: hidden;
	background: #222;
	z-index: 299;
}
.topbar .dropdownmenu li {
	height: 0;
	overflow: hidden;
	-webkit-transition: height .25s ease .1s;
	-moz-transition: height .25s ease .1s;
	-o-transition: height .25s ease .1s;
	-ms-transition: height .25s ease .1s;
	transition: height .25s ease .1s;
}

/*------------------------------------hover---------------------------------------*/
li.hoverhandler:hover{
	background-color: #222;
}
.topbar .link:hover {
	color: #cf9;
	background-color: #222;
}
.topbar li.hoverhandler:hover .dropdownmenu ,.topbar li.hoverhandler.hover .dropdownmenu{
	opacity: 1;
	height: auto;
}
.topbar .hoverhandler:hover .dropdownmenu li{
	height: 36px;
}
.topbar .dropdownmenu>li>a:hover {
	color: #fff;
	background: #5a840a;
}
.appBox .link:hover .appIcon {
	background: url("../assets/app_hover.png") no-repeat;
}
.topbar .menu:hover b, .topbar .menu.hover b, .topbar .user:hover b, .topbar .user.hover b {
    background-position: -231px -18px;
}
.topbar .uploadBtn:hover {
    background: url("../assets/upload_hover.png") 7px 6px no-repeat;
}
.vip .vipBtn:hover {
    background: url("../assets/vip_hover.png") 6px 6px no-repeat;
}
.login a:hover {
    color: #cf9;
}
.topbar .dropdownmenu>li>a:hover {
    color: #fff;
    background: #5a840a;
}
/*------------------------------------hover--------------------------------------*/

.topbar .dropdownmenu a {
    display: block;
    height: 36px;
    line-height: 36px;
    color: #ccc;
    padding-left: 9px;
    font-size: 14px;
    text-align: left;
}
.topbar .upload{
	margin-right: 15px;
}
.topbar .uploadBtn {
	background: url("../assets/topbar_icon.png") no-repeat 0 -33px;
	display: block;
	width: 25px;
	height: 25px;
	margin-top: 11px;
}
.topbar .vip{
	margin-right: 20px;
}
.vip .vipBtn {
	background: url("../assets/topbar_icon.png") no-repeat -33px -33px;
	display: block;
	width: 33px;
	height: 25px;
	margin-top: 13px;
}
.topbar .search{
	margin-right: 30px;
}
.topbar .search {
	position: relative;
	z-index: 299;
	width: 215px;
	height: 29px;
	margin: 10px auto 0;
	margin-right: 30px;
}
.topbar .left_park_side, .topbar .right_park_side {
	position: absolute;
	z-index: 291;
	left: 0;
	top: 0;
	width: 15px;
	height: 29px;
	background: url("../assets/topbar_sprite.png") no-repeat;
}
.topbar .right_park_side {
	left: auto;
	right: 0;
	background-position: -208px 0;
}
.topbar .searchbody {
	position: absolute;
	z-index: 291;
	top: 0;
	left: 15px;
	width: 185px;
	height: 29px;
	background: url("../assets/topbar_sprite.png") no-repeat -15px 0;
}
.topbar .search input {
	margin-top: 7px;
	width: 170px;
	color: #898989;
	background-color: transparent;
}
.topbar .search button {
	position: absolute;
	z-index: 291;
	top: 6px;
	right: 13px;
	width: 16px;
	height: 17px;
	text-indent: -999em;
	cursor: pointer;
	border: 0 none;
	background: url("../assets/topbar_sprite.png") no-repeat -223px -1px;
}

input,button{
	outline: none;
	border: 0;
}

/*---------------------------------------------媒体查询----------------------------------*/

@media screen and (max-width: 1273px) {
	.topbar .menu {
		margin: 0px;
	}
	.topbar .upload{
		margin-right: 10px;
	}
	.topbar .vip{
		margin-right: 10px;
	}
	.topbar .search{
		margin-right: 10px;
	}
	.menus .menu_folk{
		display: none;
	}
}
@media screen and (max-width:479px){
	
}
/*--------------------------------------------头部导航条样式---------------------------------------*/

</style>