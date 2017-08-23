<template>
  <div id="app">
  	<top-bar></top-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import TopBar from './components/topBar'
import footerBar from './components/footer'

export default {
  name: 'app',
  components:{
  	TopBar,
  	footerBar
  }
}
</script>

<style>
/*----------------------------------------清除默认样式开始----------------------------------------*/

html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, menu, nav, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	font-size: 100%;
	font-weight: inherit;
	font-style: normal;
	vertical-align: baseline;
	background: transparent;
	border: 0;
	outline: 0;
	list-style: none;
}
article, aside, figure, figure img, hgroup, footer, header, nav, section {
	display: block;
}
a{
	text-decoration: none;
}

/*----------------------------------------清除默认样式结束----------------------------------------*/



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-family: Tahoma, 微软雅黑, "Microsoft Yahei", "hiragino sans gb", Helvetica, Arial, 宋体, 	sans-serif;
}
</style>
