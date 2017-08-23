<template>
	<div class="all">
		<!-------------------------------------主页内容--------------------------------------------->
	  	<div class="container">
	  		<div class="container_body">
				<div class="mv-bar">
					<h3 class="channel">全部视频</h3>
					<ul class="channel-list">
						<li>
							<a class="J_link statisEle" href="/?id=10">韩流频道</a>
						</li>
	
						<li>
							<a class="J_link statisEle" href="/?id=8">华语频道</a>
						</li>
	
						<li>
							<a class="J_link statisEle" href="/?id=9">欧美频道</a>
						</li>
	
						<li>
							<a class="J_link statisEle" href="/?id=11">日语频道</a>
						</li>
	
						<li>
							<a class="J_link statisEle" href="/?id=12">粉丝聚焦</a>
						</li>
	
						<li>
							<a class="pl_link statisEle" href="/pl.html">精品悦单</a>
						</li>
					</ul>
				</div>
				<div class="category-box">
					<div class="category-row">
						<h5>视频分类：</h5>
						<ul class="videoCataList">
							<li>
								<a class="J_video_cata selected statisEle" href="javascript:void(0);">全部</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">音乐视频</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">现场/live</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">娱乐视频</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">舞蹈</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">演奏</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">ACG</a>
							</li>
	
							<li>
								<a class="J_video_cata statisEle " href="javascript:void(0);">戏剧</a>
							</li>
						</ul>
					</div>
					<div class="category-second">
						<h5></h5>
						<ul class="secondVideoCataList"></ul>
					</div>
					<div class="category-row">
						<h5>艺人地区：</h5>
						<ul class="category-list a-list">
							<li>
								<a href="javascript:void(0);" class="selected statisEle">全部</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">内地</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">港台</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">欧美</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">韩国</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">日本</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">二次元</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">其他</a>
							</li>
						</ul>
					</div>
					<div class="category-row">
						<h5>艺人类别：</h5>
						<ul class="category-list p-list">
							<li>
								<a href="javascript:void(0);" class="selected statisEle">全部</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">男艺人</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">女艺人</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">乐队组合</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">其他</a>
							</li>
						</ul>
					</div>
					<div class="category-row">
						<h5>视频画质：</h5>
						<ul class="category-list c-list">
							<li>
								<a href="javascript:void(0);" class="selected statisEle">全部</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">1080P</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">超清</a>
							</li>
							<li>
								<a href="javascript:void(0);" class="statisEle">高清</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="mv-box">
					<div class="mv-tab-box">
						<div class="mv-tab">
							<div data-value="pubdate" class="tab cur">
								<a href="javascript:void(0)" class="tab-cur statisEle">
									<span class="tab-default">最新发布</span>
								</a>
							</div>
							<div data-value="weekViews" class="tab">
								<a href="javascript:void(0)" class="tab-cur statisEle">
									<span class="tab-default">
										<span class="type-text">本周</span>最多播放
									</span>
									<i class="arrow"></i>
								</a>
								<ul>
									<li data-value="dayViews" class="tab-type statisEle">今日</li>
									<li data-value="weekViews" class="tab-type statisEle">本周</li>
									<li data-value="monthViews" class="tab-type statisEle">本月</li>
									<li data-value="totalViews" class="tab-type statisEle">全部</li>
								</ul>
							</div>
							<div data-value="weekFavorites" class="tab">
								<a href="javascript:void(0)" class="tab-cur statisEle">
									<span class="tab-default">
										<span class="type-text">本周</span>最多收藏
									</span>
									<i class="arrow"></i>
								</a>
								<ul>
									<li data-value="dayFavorites" class="tab-type statisEle">今日</li>
									<li data-value="weekFavorites" class="tab-type statisEle">本周</li>
									<li data-value="monthFavorites" class="tab-type statisEle">本月</li>
									<li data-value="totalFavorites" class="tab-type statisEle">全部</li>
								</ul>
							</div>
							<div data-value="totalb" class="tab">
								<a href="javascript:void(0)" class="tab-cur statisEle">
									<span class="tab-default">最多弹幕</span>
								</a>
							</div>
						</div>
						<div class="view-type">
							<a href="javascript:void(0);" class="type type-list statisEle"></a>
							<a href="javascript:void(0);" class="type type-view cur statisEle"></a>
						</div>
					</div>
					<div class="mv-list-box mv-list-vertical">
						<ul class="mv-list">
							<li>
								<a href="" target="_blank" class="img-box statisEle">
									<img class="mv-pic" src="./img/video.jpg" alt="10个IG粉丝人数最多的韩国女明星!">
	
									<div class="tag tag3">高清</div>
	
									<div class="time">03:41</div>
									<div class="hover-bg"></div>
								</a>
								<div class="info">
									<div class="oneline">
										<a href="" target="_blank" class="title statisEle" >10个IG粉丝人数最多的韩国女明星!</a>
										<p class="count">发布时间：2017.07.25</p>
									</div>
									<div class="user-info">
										<span>艺人：</span>
	
										<a class="statisEle" href="">少女时代</a>
	
										&amp;
										<a class="statisEle" href="" >金泫雅</a>
	
										&amp;
										<a class="statisEle" href="" >韩国群星</a>
	
										&amp;
										<a class="statisEle" href="">Krystal(f(x))</a>
	
										&amp;
										<a class="statisEle" href="" >秀智(miss A)</a>
	
									</div>
									<span class="count">发布时间：2017.07.25</span>
	
									<div class="des">MV描述：CR 转自https://www.youtube.com/watch?v=yWqylW1j5hA&amp;t=53s</div>
	
									<div class="count-box">
	
										<span class="view-count">19</span>
										<span class="fav-count">4</span>
										<span class="cmt-count">0</span>
	
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="pageContainer">
						<div class="page_group page_right">
	
							<span class="page_cur">1</span>
	
							<a href="javascript:;" class="page_num J_page" data-page="2">2</a>
	
							<a href="javascript:;" class="page_num J_page" data-page="3">3</a>
	
							<a href="javascript:;" class="page_num J_page" data-page="4">4</a>
	
							<a href="javascript:;" class="page_num J_page" data-page="5">5</a>
	
							<a href="javascript:;" class="page_num J_page" data-page="6">6</a>
	
							<a href="javascript:;" class="page_num J_page" data-page="7">7</a>
	
							<a href="javascript:;" class="page_num J_page" data-page="8">8</a>
	
							<span class="page_ellipsis">...</span>
	
							<a class="page_next J_page" href="javascript:;" data-page="2">&gt;</a>
	
							<span class="page_total">共100页</span>
						</div>
	
					</div>
				</div>
			</div>
	  	</div>
	  	<!-------------------------------------主页内容--------------------------------------------->
	  	
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
/*---------------------------------------页面内容样式-----------------------------------------*/
.container {
    background: #f3f5f7;
    padding-top: 50px;
}
.container .container_body {
    width: 1260px;
    background: #fff;
    padding-bottom: 40px;
    min-width: 1200px;
    margin: 0 auto;
}
.mv-bar {
    height: 90px;
    line-height: 90px;
    overflow: hidden;
    padding: 0 30px;
}
.mv-bar h3 {
    font-size: 20px;
    font-weight: 700;
    float: left;
}
.mv-bar ul {
    float: right;
    overflow: hidden;
}
.mv-bar ul li {
    float: left;
    background: url("./img/dash_border.png") 0 no-repeat;
    padding: 0 19px;
}
.mv-bar ul li:first-child {
    background: none;
}
.mv-bar ul li a {
    color: #666;
    font-size: 14px;
}
.mv-bar ul li.cur a, .mv-bar ul li:hover a {
    color: #52e2c0;
}

a{
	color: #333;
}
.category-box {
    padding: 28px 30px 14px;
    border-top: 4px solid #f3f5f7;
    border-bottom: 4px solid #f3f5f7;
}
.category-box .category-row {
    margin-bottom: 14px;
    line-height: 21px;
    font-size: 14px;
    overflow: hidden;
}
.category-box .category-row h5 {
    color: #a4a4a4;
    float: left;
    width: 130px;
}
.category-box .category-row ul {
    float: left;
    overflow: hidden;
}
.category-box .category-row ul li {
    float: left;
    margin-right: 36px;
}
.category-box .category-row ul li a.selected {
    background: #52e2c0;
    color: #fff;
}
.category-box .category-row ul li a {
    display: block;
    padding: 0 10px;
}
.category-box .category-row ul li a:hover {
    color: #52e2c0;
}


.mv-box {
    padding: 30px 30px 0;
}
.mv-tab-box {
    height: 60px;
    border-bottom: 2px solid #f4f4f4;
}
.mv-tab-box .mv-tab {
    float: left;
    padding-bottom: 15px;
}
.mv-tab-box .mv-tab .tab:first-child {
    padding-left: 0;
}
.mv-tab-box .mv-tab .tab {
    float: left;
    position: relative;
    line-height: 44px;
    border-right: 2px solid #f4f4f4;
    padding: 0 20px;
    cursor: pointer;
}
.mv-tab-box .mv-tab .tab.cur a.tab-cur {
    border-bottom: 2px solid #52e2c0;
}
.mv-tab-box .mv-tab .tab a.tab-cur {
    padding: 0 10px 30px;
    position: relative;
    z-index: 2;
}
.mv-tab-box .mv-tab .tab.cur a.tab-cur span.tab-default {
    color: #52e2c0;
}
.mv-tab-box .mv-tab .tab a.tab-cur span.tab-default {
    font-size: 16px;
    font-weight: 700;
}
.mv-tab-box .mv-tab .tab a.tab-cur i.arrow {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #bcbcbc;
    width: 0;
    height: 0;
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 2px;
}
.mv-tab-box .mv-tab .tab:hover a.tab-cur i.arrow {
    border-top: 6px solid #52e2c0;
}
.mv-tab-box .mv-tab .tab:hover a.tab-cur {
    color: #52e2c0;
}
.mv-tab-box .view-type {
    float: right;
    margin-top: 10px;
}
.mv-tab-box .view-type a.type-list {
    background-position: 0 0;
}
.mv-tab-box .view-type a {
    background: url("./img/view.png") no-repeat;
    width: 30px;
    height: 25px;
    display: inline-block;
    margin-left: 22px;
}
.mv-tab-box .view-type a.type-view.cur, .mv-tab-box .view-type a.type-view:hover {
    background-position: -30px -25px;
}
.mv-tab-box .view-type a.type-list.cur, .mv-tab-box .view-type a.type-list:hover {
    background-position: 0 -25px;
}
.mv-tab-box .mv-tab .tab ul {
    position: absolute;
    top: 62px;
    left: 20px;
    z-index: 2;
    background: #f3f5f7;
    width: 131px;
    border: 1px solid #e5e5e5;
    border-top: none;
    display: none;
}
.mv-tab-box .mv-tab .tab ul li {
    width: 122px;
    margin: 0 auto;
    line-height: 57px;
    text-align: center;
    font-size: 14px;
    border-bottom: 1px solid #e5e5e5;
}
.mv-tab-box .mv-tab .tab:hover ul {
	display: block;
}
.mv-tab-box .mv-tab .tab ul li:hover {
    color: #52e2c0;
}


.mv-list-vertical {
    padding-top: 25px;
}
.mv-list-vertical ul {
    overflow: hidden;
    width: 1225px;
}
.mv-list-vertical li {
    margin: 0 25px 25px 0;
    float: left;
    width: 220px;
}
.mv-list-vertical li a.img-box {
    width: 220px;
    height: 124px;
    display: block;
    overflow: hidden;
    position: relative;
}
.mv-list-vertical li a.img-box img {
    display: block;
    height: 124px;
    margin-left: -0.222222px;
}
.mv-list-vertical li a.img-box .tag3 {
    color: #52e2c0;
    border: 1px solid #52e2c0;
}

.mv-list-vertical li a.img-box .tag {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 36px;
    height: 20px;
    border: 1px solid #52e2c0;
    text-align: center;
    background: rgba(0,0,0,.6);
}
.mv-list-vertical li a.img-box .time {
    position: absolute;
    bottom: 3px;
    right: 8px;
    color: #fff;
}
.mv-list-vertical li a.img-box:hover .hover-bg {
    display: block;
}
.mv-list-vertical li a.img-box .hover-bg {
    background: url("./img/video-logo.png") no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: none;
}
.mv-list-vertical li .info {
    width: 200px;
    padding: 0 10px;
}
.mv-list-vertical li .info .oneline {
    overflow: hidden;
}
.mv-list-vertical li .info .oneline a.title {
    font-size: 14px;
    color: #000;
    line-height: 33px;
    width: 200px;
    display: block;
    margin-top: 5px;
}
.ellipsis, .mv-list-vertical li .info .oneline a.title, .mv-list-vertical li .info .user-info {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mv-list-vertical li .info .oneline p.count {
    display: none;
}
.mv-list-vertical li .info .user-info {
    color: #000;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    width: 200px;
}
.ellipsis, .mv-list-vertical li .info .oneline a.title, .mv-list-vertical li .info .user-info {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mv-list-vertical li .info .user-info span {
    color: #a4a4a4;
}
.mv-list-vertical li .info .user-info a {
    color: #52e2c0;
}
.mv-list-vertical li .info span.count {
    display: block;
    font-size: 12px;
    margin-top: 4px;
    color: #a4a4a4;
}
.mv-list-vertical li .info .count-box, .mv-list-vertical li .info .des {
    display: none;
}
.pageContainer {
    font-size: 14px;
    overflow: hidden;
    padding: 20px 0;
    font-style: italic;
}
.page_right {
    float: right;
}
.page_group .page_cur {
    color: #52e2c0;
    border-bottom: 2px solid #52e2c0;
    display: inline-block;
    width: 15px;
    margin: 0 12px;
    text-align: center;
}
.page_group .page_ellipsis, .page_group .page_next, .page_group .page_num, .page_group .page_pre {
    color: #414141;
}
.page_group a {
    padding: 0 15px;
    display: inline-block;
    text-align: center;
}
.page_group a:hover {
    color: #52e2c0;
}
/*----------------------------------------页面内容样式---------------------------------------------*/
</style>