<template>
	<div class="home">
		<!-------------------------------------轮播图--------------------------------------------->
	  	<div class="slideContent">
		    <ul>
		    	<li class="slideEle" v-for="(item,index) in bigPics"  :style="{background: 'url('+item.image+')'}">
		    		<!-- v-lazy:background-image.container="item.image" -->
		    		<a class="statisEle" target="_blank" ></a>
		    	</li>
		    </ul>
		    <div class="autoBox">
		        <div class="bannerTitleBox">
		        	<a class="slideTitle statisEle" v-for="(item,index) in bigPics">{{item.title}}</a>
		        </div>
		    </div>
		</div>
	  	<!-------------------------------------轮播图--------------------------------------------->
	  	
	  	
	  	
	  	<!-------------------------------------主页内容----------------------------------------->
	  	<div class="index_content">
	  		<!--广告位-->
	  		<div class="focus_bottom_banner" style="overflow: hidden; text-align: center;width:100%;">
	            <div class="banner_container" style="margin: 10px auto; display: block;width:100%;">
	                </div>
	        </div>
	        <!--首播-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>首播</h3>
	                    <ul>
	                        <li class="cur">
	                        	<a href="javascript:void(0);" class="J_area statisEle" >全部</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">内地</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">港台</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">欧美</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">韩国</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">日本</a>
	                        </li>
	                    </ul>
	                </div>
	                <div class="line"></div>
	                <a title="上一张" class="disabled">上一张</a>
	                <a title="下一张" class="disabled">下一张</a>
	                <div class="contentBox">
	                    <ul class="firstMvList">
	                    	<li class="li01 sliderBox">
								<ul class="slider">
									<li class="sliderEle" style="display: list-item;" v-for="(item,index) in bigPics_2"> 
										<a class="statisEle" target="_blank">
											<img :src="item.image" :alt="item.title">
											<h5>{{item.title}}</h5>
											<p>{{item.content}}</p>
										</a>
									</li>
								</ul>
								<span class="mv-prev J_toggle statisEle" title="上一张"></span>
								<span class="mv-next J_toggle statisEle" title="下一张"></span>
							</li>
							<li class="mv_x2" v-for="(item,index) in videos">
								<div class="mv_one">
									<a class=" statisEle" target="_blank">
										<img :src="item.image" :alt="item.title">
										<h5>{{item.title}}</h5>
										<p>{{item.subTitle}}</p>
									</a>
								</div>
								<!--<div class="mv_one">
									<a class=" statisEle" target="_blank">
										<img :src="item.image" :alt="item.title">
										<h5>{{item.title}}</h5>
										<p>{{item.subTitle}}</p>
									</a>
								</div>-->
							</li>
							
	                    </ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	        <!--娱乐-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>娱乐</h3>
	                    <ul>
	                        <li class="cur">
	                        	<a href="javascript:void(0);" class="J_area statisEle" >全部</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">现场</a>
	                        </li>
	                        <li>
	                        	<a href="javascript:void(0);" class="J_area statisEle">影视</a>
	                        </li>
	                    </ul>
	                </div>
	                <div class="line"></div>
	                <a title="上一张" class="disabled">上一张</a>
	                <a title="下一张" class="disabled">下一张</a>
	                <div class="contentBox">
	                    <ul class="entertainList">
	                    	<li class="li01 sliderBox">
								<ul class="slider">
									<li class="sliderEle" style="display: list-item;" v-for="item in priModule">
										<a class="statisEle" target="_blank">
											<img :src="item.image" :alt="item.title">
											<h5>{{item.title}}</h5>
											<p>{{item.content}}</p>
										</a>
									</li>
								</ul>
							</li>
							<li class="mv_x2" v-for="item in details">
								<div class="mv_one">
									<a class=" statisEle" target="_blank">
										<img :src="item.image" :alt="item.title">
										<h5>{{item.title}}</h5>
										<p>{{item.subTitle}}</p>
									</a>
								</div>
							</li>
	                    </ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	        <!--热播推荐-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>热播推荐</h3>
	                    <a class="change J_change_hot statisEle" href="javascript:void(0)" >换一换</a>
	                </div>
	                <div class="line"></div>
	                <div class="contentBox contentBox_row1">
	                    <ul class="hotList">
	                    	<li class="hot_group1" style="display: list-item;" v-for="item in details_2">
								<a class="statisEle">
									<img :src="item.image" :alt="item.title">
									<h5>{{item.title}}</h5>
									<p>{{item.subTitle}}</p>
								</a>
							</li>
	                    </ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	        <!--音悦V榜-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>音悦V榜</h3>
	                    <div class="titleLink titleLink_vchart">
	                    	<a class="statisEle" target="_blank">TOP10</a>
	                    	<a class="statisEle" target="_blank">看音乐</a>
	                    	<a class="statisEle" target="_blank">密谈室</a>
	                    	<a class="statisEle" target="_blank">有话说</a>
	                    	<a class="statisEle" target="_blank">特别企划</a>
	                    </div>
	                </div>
	                <div class="line"></div>
	                <a title="上一张" class="disabled">上一张</a>
	                <a title="下一张" class="disabled">下一张</a>
	                <div class="contentBox contentBox_vchart">
	                    <ul class="vchartList">
							<li class="li01">
								<a class="statisEle" v-for="item in priModule_2">
									<img :src="item.image" :alt="item.title">
									<h5>{{item.title}}</h5>
									<p>{{item.content}}</p>
								</a>
							</li>
							<li v-for="(item,index) in submodules">
								<div class="dateBox">
									<h4 class="date_ch">{{item.title}}</h4>
									<span class="date_en">{{item.entitle}}</span>
								</div>
								<div class="vchart_item" v-for="i in item.details" >
									<!--@mouseleave="isActive=false" @mouseover="addClass(i)" :class="{vchart_item_active:isActive}"-->
									<a class="statisEle">
										<img :src="i.image" :alt="i.title">
										<h5>{{i.title}}</h5>
									</a>
								</div>
							</li>
						</ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	        <!--自制节目-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>自制节目</h3>
	                    <a class="moreLink statisEle">查看更多》</a>
	                </div>
	                <div class="line"></div>
	                <a title="上一张" class="disabled">上一张</a>
	                <a title="下一张" class="disabled">下一张</a>
	                <div class="contentBox contentBox_program">
	                    <ul class="programList">
							<li class="li01">
								<a class="statisEle">
									<a class="statisEle" v-for="item in priModule_3">
									<img :src="item.image" :alt="item.title">
									<h5>{{item.title}}</h5>
									<p>{{item.content}}</p>
								</a>
								</a>
							</li>
							<li v-for="(item,index) in submodules_2">
								<div class="dateBox">
									<h4 class="date_ch">{{item.title}}</h4>
									<span class="date_en">{{item.entitle}}</span>
								</div>
								<div class="program_item" v-for="i in item.details">
									<a class="statisEle">
										<img :src="i.image" :alt="i.title">
										<h5>{{i.title}}</h5>
									</a>
								</div>
							</li>
						</ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	        <!--精品悦单-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>精品悦单</h3>
	                    <a class="moreLink statisEle">查看更多》</a>
	                </div>
	                <div class="line"></div>
	                <a title="上一张" class="disabled">上一张</a>
	                <a title="下一张" class="disabled">下一张</a>
	                <div class="contentBox contentBox_playlist">
	                    <ul class="playlistList">
							<li v-for="(item,index) in playlists">
								<div class="statisEleHover"><img :src="item.image" :alt="item.title">
									<h5>{{item.title}}</h5>
									<p>{{item.description}}</p>
								</div>
								<div class="hoverBox disabled">
									<a class="statisEle">
										<div class="img_box">
											<img :src="item.image" :alt="item.title">
											<span class="img_box_shadow"></span>
										</div>
										<div class="info_box">
											<div class="heightLimit">
												<h4>{{item.title}}</h4>
												<span class="des">{{item.description}}</span>
											</div>
											<div class="user_box">
												<img :src="item.person.headImg" :alt="item.person.userName">
												<span class="userName">{{item.person.userName}}</span>
											</div>
											<span class="count"><i></i>{{item.totalViews}}</span>
											<span class="count">{{item.videoNum}}</span>
										</div>
									</a>
								</div>
							</li>
						</ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	        <!--猜你喜欢-->
	        <div class="index_box_outer index_box_turn">
	            <div class="index_box">
	                <div class="titleBox">
	                    <h3>猜你喜欢</h3>
	                    <a class="change J_change_hot statisEle" href="javascript:void(0)" >换一换</a>
	                </div>
	                <div class="line"></div>
	                <a title="上一张" class="disabled">上一张</a>
	                <a title="下一张" class="disabled">下一张</a>
	                <div class="contentBox contentBox_row1">
	                    <ul class="hotList">
	                    	<li class="hot_group1" style="display: list-item;" v-for="item in video">
								<a class="statisEle" v-for="arr in item.artists">
									<img :src="item.image" :alt="item.title">
									<h5>{{item.title}}</h5>
									<p>{{arr.artistName}}</p>
								</a>
							</li>
	                    </ul>
	                    <div class="loading"></div>
	                </div>
	            </div>
	        </div>
	  	</div>
	  	<!-----------------------------------主页内容----------------------------------------->
	  	
	  	
	  	<!-----------------------------------返回顶部----------------------------------------->
	  	<div class="return_top_wrapper">
	  		<div></div>
	  		<a href="javascript:void(0)" title="返回顶部" class="return_top_static"></a>
	  		<a href="javascript:void(0)" class="return_top_running"></a>
	  	</div>
	  	<!-----------------------------------返回顶部------------------------------------------->
  	
	</div>
</template>

<script>
$(function () {
	//	鼠标悬停事件
	var $lis = $(".slideContent li")
	var $tis = $("a.slideTitle")
	
	
	//	轮播
	var s = 0
	
	
	$tis[0].style.color = "#52e2c0"
	$lis.eq(0).css({"zIndex":"1","opacity":"1"})
	function step(){
		$tis[s].style.color = "#fff"
		$lis.css({"zIndex":"0","opacity":"0"})
		s++;
		if(s == $lis.length){
			s = 0;
		}
		$lis.eq(s).css({"zIndex":"1","opacity":"1"})
		$tis[s].style.color = "#52e2c0"
		
		$tis.mouseover(function(){
			var i = $(this).index()
			$tis[s].style.color = "#fff"
			$lis.css({"zIndex":"0","opacity":"0"})
			s = i;
			$tis[s].style.color = "#52e2c0"
			$lis.eq(s).css({"zIndex":"1","opacity":"1"})
		})	
	}
	setInterval(step,3000);
	
	//	首播  小轮播
	
	var $slider = $(".firstMvList .slider") 
	var $mvp = $(".mv-prev")  
	var $mvn = $(".mv-next") 
	var f = -470
	function slider(){
		var $sml = parseFloat($slider.css("margin-left"))
		if($sml == '-470'){
			$slider.css({
				"margin-left" : "0px"
			})
		}else{
			$slider.css({
				"margin-left" : "-470px"
			})
		}
		$mvp.click(function(){
			mvp()
		})
		$mvn.click(function(){
			mvn()
		})
		function mvp(){ 
			var $sml = parseFloat($slider.css("margin-left"))
			if($sml == '-470'){
				$slider.css({
					"margin-left" : "0px"
				})
			}else{
				$slider.css({
					"margin-left" : "-470px"
				})
			}
			
		}
		function mvn(){
			var $sml = parseFloat($slider.css("margin-left"))
			if($sml == '0'){
				$slider.css({
					"margin-left" : "-470px"
				})
			}else{
				$slider.css({
					"margin-left" : "0px"
				})
			}
		}
	}
	setInterval(slider,3000);
	
	//	音乐V榜
	var index = 0
	$(".vchart_item:eq(0)").addClass("vchart_item_active").parent().addClass("d5")
	$(".vchart_item:eq(3)").addClass("vchart_item_active").parent().addClass("d4")
	$(".vchart_item:eq(6)").addClass("vchart_item_active").parent().addClass("d3")
	
	$("li.d5 .vchart_item").mouseover(function(){
		$("li.d5 .vchart_item").removeClass("vchart_item_active")
		$(this).addClass("vchart_item_active")
	})
	$("li.d4 .vchart_item").mouseover(function(){
		$("li.d4 .vchart_item").removeClass("vchart_item_active")
		$(this).addClass("vchart_item_active")
	})
	$("li.d3 .vchart_item").mouseover(function(){
		$("li.d3 .vchart_item").removeClass("vchart_item_active")
		$(this).addClass("vchart_item_active")
	})


  	//	自制节目
	var index = 0
	$(".program_item:eq(0)").addClass("program_item_active").parent().addClass("d5")
	$(".program_item:eq(3)").addClass("program_item_active").parent().addClass("d4")
	$(".program_item:eq(6)").addClass("program_item_active").parent().addClass("d3")
	
	$("li.d5 .program_item").mouseover(function(){
		$("li.d5 .program_item").removeClass("program_item_active")
		$(this).addClass("program_item_active")
	})
	$("li.d4 .program_item").mouseover(function(){
		$("li.d4 .program_item").removeClass("program_item_active")
		$(this).addClass("program_item_active")
	})
	$("li.d3 .program_item").mouseover(function(){
		$("li.d3 .program_item").removeClass("program_item_active")
		$(this).addClass("program_item_active")
	})
	
	
//	返回顶部
	
	$(".return_top_wrapper").click(function(){
		window.scrollBy(0,-10000);
	})
})

export default {
	methods : {
		addClass (i){
			this.isActive = true
		}
	},
	created () {
		var _this = this
		this.$http.get('http://localhost:8081/total').then(function (data) {
			_this.bigPics = data.data.bigPics
			_this.bigPics_2 = data.data.bigPics_2
			_this.videos = data.data.videos
			_this.priModule.push(data.data.priModule)
			_this.details = data.data.details
			_this.details_2 = data.data.details_2
			_this.priModule_2.push(data.data.priModule_2)
			_this.submodules = data.data.submodules
			_this.priModule_3.push(data.data.priModule_3)
			_this.submodules_2 = data.data.submodules_2
			_this.playlists = data.data.playlists
			_this.video = data.data.video
		})
		
		
//		-----------------------------------------------------------------
//		this.$http.get('http://localhost:8081/bigPics').then(function (data) {
//			_this.bigPics = data.data
//		})
//		this.$http.get('http://localhost:8081/bigPics_2').then(function (data) {
//			_this.bigPics_2 = data.data
//		})
//		this.$http.get('http://localhost:8081/videos').then(function (data) {
//			_this.videos = data.data
//		})
//		this.$http.get('http://localhost:8081/priModule').then(function (data) {
//			_this.priModule.push(data.data)
//		})
//		this.$http.get('http://localhost:8081/details').then(function (data) {
//			_this.details = data.data
//		})
//		this.$http.get('http://localhost:8081/details_2').then(function (data) {
//			_this.details_2 = data.data
//		})
//		this.$http.get('http://localhost:8081/priModule_2').then(function (data) {
//			_this.priModule_2.push(data.data)
//		})
//		this.$http.get('http://localhost:8081/submodules').then(function (data) {
//			_this.submodules = data.data
//		})
//		this.$http.get('http://localhost:8081/priModule_3').then(function (data) {
//			_this.priModule_3.push(data.data)
//		})
//		this.$http.get('http://localhost:8081/submodules_2').then(function (data) {
//			_this.submodules_2 = data.data
//		})
//		this.$http.get('http://localhost:8081/playlists').then(function (data) {
//			_this.playlists = data.data
//		})
//		this.$http.get('http://localhost:8081/video').then(function (data) {
//			_this.video = data.data
//			console.log(_this.video.artists)
//		})
//		
		
//		function getData(dataArray,url){
//			this.$http.get('http://localhost:8081/'+`${url}`).then(function (data) {
//				dataArray = data.data
//			})
//		}
//		
//		getData(this.playlists,playlists)
		
	},
	data () {
		return {
			isActive : false,
			isLeave : true,
			bigPics : [],
			bigPics_2 : [],
			videos : [],
			priModule : [],
			details : [],
			details_2 : [],
			priModule_2 : [],
			submodules : [],
			priModule_3 : [],
			submodules_2 : [],
			playlists : [],
			video : []
		}
		
	}
	
}
</script>

<style>
	
/*------------------------------------------轮播图------------------------------------------*/

.slideContent {
    position: relative;
    min-width: 1020px;
    max-width: 1600px;
    height: 480px;
    margin: 50px auto 0;
}
.slideContent li{
    height: 480px;
    /*filter: alpha(opacity=0);*/
    position: absolute;
    left: 0;
    right: 0;
    /*background: url("../img/2.jpg") no-repeat;*/
    opacity: 1;
    z-index: 0;
}
/*.slideContent li:nth-child(1){
    background: url("./img/1.jpg") no-repeat;
}
.slideContent li:nth-child(2){
    background: url("./img/02.jpg") no-repeat;
}
.slideContent li:nth-child(3){
    background: url("./img/03.jpg") no-repeat;
}
.slideContent li:nth-child(4){
    background: url("./img/04.jpg") no-repeat;
}
.slideContent li:nth-child(5){
    background: url("./img/05.jpg") no-repeat;
}
.slideContent li:nth-child(6){
    background: url("./img/06.jpg") no-repeat;
}
.slideContent li:nth-child(7){
    background: url("./img/07.jpg") no-repeat;
}
.slideContent li:nth-child(8){
    background: url("./img/08.jpg") no-repeat;
}
.slideContent li:nth-child(9){
    background: url("./img/09.jpg") no-repeat;
}
.slideContent li:nth-child(10){
    background: url("./img/10.jpg") no-repeat;
}*/
.slideContent li{
	transition: opacity 1s;
    -webkit-transition: opacity 1s; 
}
.autoBox {
    width: 1220px;
    margin: 0 auto;
    position: relative;
}
.bannerTitleBox{
	position: absolute;
	top: 29px;
	right: 0;
	background: url("./img/bannerTitleBox.png") no-repeat;
    width: 258px;
    height: 390px;
    padding-top: 14px;
    text-align: center;
    z-index: 2;
}
.slideTitle {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    width: 230px;
    line-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    cursor: pointer;
}
.slideTitle:hover{
	color: #52e2c0;;
}

@media screen and (max-width:1273px){
	.autoBox {
	    width: 970px;
	}
}
/*--------------------------------------------轮播图---------------------------------------------*/



/*--------------------------------------------页面内容---------------------------------------------*/
.index_content{
    max-width: 1600px;
    margin: 0 auto;
    background: #fff;
}
.index_box_outer {
    border-bottom: 4px solid #f3f5f7;
}
.index_box {
    width: 1220px;
    margin: 0 auto;
    position: relative;
}
.titleBox {
    padding: 34px 0 16px;
    overflow: hidden;
}
.titleBox h3 {
    font-size: 20px;
    color: #000;
    float: left;
    line-height: 20px;
    font-weight: bold;
}
.titleBox ul {
    float: right;
}
.titleBox ul li:first-child {
    background: none;
}
.titleBox ul li {
    float: left;
    background: url("./img/dash_border.png") 0 no-repeat;
    padding: 0 19px;
}
.titleBox ul li.cur a {
    color: #52e2c0;
    border-bottom: 2px solid #52e2c0;
}
.titleBox ul li a {
    color: #666;
    font-size: 14px;
    padding-bottom: 16px;
    line-height: 20px;
}
.line{
	height: 2px;
    background: #f4f4f4;
    margin-top: -2px;
}
.disabled{
	display: none;
}
.contentBox {
    padding-top: 17px;
    height: 398px;
    overflow: hidden;
    position: relative;
}
.titleBox .change {
    color: #a4a4a4;
    font-size: 14px;
    float: right;
    background: url("./img/change.png") 3px 3px no-repeat;
    padding-left: 23px;
}
.titleBox .change:hover {
    background: url("./img/change_hover.png") no-repeat;
    color: #52e2c0;
}
.titleBox ul li a:hover{
    color: #52e2c0;
}



/*---------------------------首播---------------------------*/
.contentBox ul {
    overflow: hidden;
}
.contentBox li {
    float: left;
    margin-left: 30px;
    width: 220px;
}
.contentBox li img {
    width: 220px;
    height: 124px;
    display: block;
}
.contentBox li h5 {
    font-size: 14px;
    line-height: 16px;
    margin: 12px 12px 10px;
    width: 196px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.contentBox li p {
    font-size: 12px;
    line-height: 16px;
    margin: 0 12px 21px;
    color: #a4a4a4;
    width: 196px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.contentBox li.li01 {
    margin-left: 0;
    width: 470px;
}
.contentBox li.li01 img {
    width: 470px;
    height: 323px;
    display: block;
}
.contentBox li.li01 h5 {
    font-size: 16px;
    line-height: 16px;
    margin: 12px 12px 12px;
    width: 445px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.contentBox li.li01 p {
    font-size: 14px;
    line-height: 14px;
    margin: 0 12px;
    width: 445px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.sliderBox {
	width: 470px;
    position: relative;
    overflow: hidden;
}
.sliderBox .slider {
    width: 940px;
    height: 378px;
    position: relative;
    overflow: hidden;
    transition: margin-left 1s;
    -webkit-transition: margin-left 1s; 
}
.sliderBox .sliderEle {
    float: left;
    position: relative;
    overflow: hidden;
    width: 470px;
    margin-left: 0;
}
.contentBox ul li a.statisEle:hover {
    cursor: pointer;
}
.contentBox .mv_one:hover h5, .contentBox .mv_one:hover p {
    color: #52e2c0;
}
.contentBox li.li01:hover h5, .contentBox li.li01:hover p {
    color: #52e2c0;
}


.mv-prev, .mv-prev:hover, .mv-next, .mv-next:hover {
    background: url("./img/arrow.png");
    width: 13px;
    height: 25px;
    position: absolute;
    top: 150px;
    cursor: pointer;
}
.mv-prev {
    left: 10px;
}
.mv-prev:hover {
    background-position: 0 -25px;
}
.mv-next {
	right: 10px;
    background-position: -13px 0;
}
.mv-next:hover {
    background-position: -13px -25px;
}
/*---------------------------首播---------------------------*/



/*---------------------------娱乐---------------------------*/

/*---------------------------娱乐---------------------------*/



/*---------------------------热播推荐---------------------------*/
.contentBox_row1 {
    height: 199px;
}
.contentBox li:first-child {
    margin-left: 0;
}
.contentBox_row1 li:hover h5, .contentBox_row1 li:hover p {
    color: #52e2c0;
}
/*---------------------------热播推荐---------------------------*/



/*---------------------------音悦V榜---------------------------*/
.titleBox .titleLink {
    float: left;
    margin-left: 15px;
    overflow: hidden;
    margin-top: 6px;
}
.titleBox .titleLink a {
    color: #666;
    font-size: 14px;
    padding: 0 13px;
    line-height: 14px;
    float: left;
    border-left: 1px solid #e5e5e5;
}
.titleBox .titleLink a:hover {
    color: #52e2c0;
}

.contentBox_vchart ul, .contentBox_program ul {
    height: 378px;
    overflow: hidden;
}
.contentBox_vchart li h4.date_ch, .contentBox_program li h4.date_ch {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
}
.contentBox_vchart li span.date_en, .contentBox_program li span.date_en {
    color: #a4a4a4;
    display: block;
    margin-bottom: 15px;
}
.contentBox_vchart li .vchart_item, .contentBox_program li .program_item {
    border-top: 1px solid #f4f4f4;
    cursor: pointer;
    height: 73px;
}
.contentBox_vchart li .vchart_item_active, .contentBox_vchart li .vchart_item01, .contentBox_program li .program_item_active, .contentBox_program li .program_item01 {
    border-top: none;
    height: 192px;
}
.contentBox_vchart li h5, .contentBox_program li h5 {
    font-size: 14px;
    line-height: 25px;
    margin: 12px 12px 8px;
    max-height: 50px;
    text-overflow: inherit;
    white-space: inherit;
}
.contentBox_vchart li .vchart_item_active h5, .contentBox_program li .program_item_active h5 {
    color: #52e2c0;
}
.contentBox_vchart li .vchart_item img, .contentBox_program li .program_item img {
    height: 120px;
    display: none;
}
.contentBox_vchart li .vchart_item_active img, .contentBox_vchart li .vchart_item01 img, .contentBox_program li .program_item01 img, .contentBox_program li .program_item_active img {
    display: block;
}

/*---------------------------音悦V榜---------------------------*/



/*---------------------------自制节目---------------------------*/
.titleBox .moreLink {
    color: #a4a4a4;
    font-size: 14px;
    float: right;
}
.titleBox .moreLink:hover {
    color: #52e2c0;
}
/*---------------------------自制节目---------------------------*/


/*---------------------------精品悦单---------------------------*/
.contentBox_playlist {
    height: 294px;
}
.contentBox_playlist ul {
    height: 270px;
    overflow: hidden;
}
.contentBox li:first-child {
    margin-left: 0;
}
.contentBox_playlist li {
    position: relative;
    cursor: pointer;
}
.contentBox_playlist li img {
    width: 220px;
    height: 220px;
}
.contentBox_playlist li h5 {
    margin: 11px 12px 8px;
}
.contentBox_playlist li p {
    margin: 0 12px;
}
.contentBox_playlist li:hover h5, .contentBox_playlist li:hover p {
    color: #52e2c0;
}

.contentBox_playlist .hoverBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 470px;
    height: 270px;
    background: #f3f5f7;
    z-index: 1;
    overflow: hidden;
    display: none;
}
.contentBox_playlist li:hover .hoverBox {
    display: block;
}
.hoverBox .img_box img {
    float: left;
    width: 100%;
    height: 100%;
}
.hoverBox .img_box_shadow {
    position: absolute;
    top: 0;
    left: 0;
    background: url("./img/play_icon.png") no-repeat;
    background-size: 100%;
    width: 270px;
    height: 270px;
}
.hoverBox .info_box {
    padding: 0 22px;
    width: 155px;
    float: right;
    border: 1px solid #e5e5e5;
    border-left: 0;
    height: 268px;
}
.hoverBox .info_box .heightLimit {
    height: 145px;
    overflow: hidden;
}
.hoverBox .info_box h4 {
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0;
}
.hoverBox:hover h4, .hoverBox:hover .userName, .hoverBox:hover .tag {
    color: #000;
}
.hoverBox .info_box .des {
    font-size: 12px;
    color: #a4a4a4;
    line-height: 23px;
    margin-top: -6px;
    display: block;
}
.hoverBox .user_box {
    overflow: hidden;
    margin-top: 7px;
}
.hoverBox .img_box {
    float: left;
    width: 270px;
    height: 270px;
}
.hoverBox .user_box img {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
}
.hoverBox .user_box .userName {
    font-size: 14px;
    margin-left: 50px;
    line-height: 40px;
    display: block;
}
.hoverBox .info_box .count {
    font-size: 12px;
    color: #a4a4a4;
    margin-left: 50px;
    display: block;
}
.hoverBox .info_box .count i {
    background: url("./img/playcount.png") no-repeat;
    display: inline-block;
    width: 13px;
    height: 14px;
    vertical-align: middle;
    margin-right: 5px;
    margin-bottom: 3px;
}
/*---------------------------精品悦单---------------------------*/


/*---------------------------猜你喜欢---------------------------*/

/*---------------------------猜你喜欢---------------------------*/

@media screen and (max-width:1273px){
	.index_box {
	    width: 970px;
	}
}
.contentBox .loading {
    background: url("./img/loading.gif") no-repeat;
    width: 48px;
    height: 48px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -24px;
    margin-top: -24px;
    display: none;
}
/*-----------------------------------------页面内容---------------------------------*/

/*------------------------------------返回顶部---------------------------------------------*/
.return_top_wrapper {
    height: 65px;
    position: fixed;
    right: 0;
    top: 460px;
    z-index: 298;
    _position: absolute;
    _bottom: auto;
    overflow: hidden;
    /*display: none;*/	
}
.return_top_wrapper div {
    height: 65px;
    width: 50px;
}
.return_top_wrapper a.return_top_static {
    background: url("./img/returntop.png") no-repeat;
    left: 0;
}
.return_top_wrapper a {
    position: absolute;
    height: 65px;
    width: 50px;
    top: 0;
}
.return_top_wrapper a.return_top_running {
    background: url("./img/returntop.png") no-repeat;
    position: absolute;
    left: -50px;
}

/*-------------------------------------返回顶部-------------------------------------*/


img[lazy=loading] {
	/*width: 100px;*/
	background-position: center center!important;
	background: url("../../assets/loading.gif");
	background-size: 100px 100px;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

img[lazy=error] {
	/*width: 100px;*/
	background-position: center center!important;
	background-size: 100px 100px;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

img[lazy=loaded] {
	/*width: 100px;*/
	background-position: center center!important;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-color: green;
}
/*
 or background-image
 */

.yourclass[lazy=loading] {
	background: no-repeat;
	background-position: center center; 
}

.yourclass[lazy=error] {
	/*your style here*/
}

.yourclass[lazy=loaded] {
	/*your style here*/
}
</style>