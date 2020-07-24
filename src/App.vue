<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

    
export default {
  name: 'App',
  components: {
      
  }
}
</script>

<style lang="scss">
 // GLOBAL STYLES
@import '../node_modules/font-awesome/css/font-awesome.css';
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
@font-face {
	font-family: PTSans-Bold;
	src: url('assets/fonts/PTSans-Bold.ttf');
}
@font-face {
	font-family: PTSans-Regular;
	src: url('assets/fonts/PTSans-Regular.ttf');
}
html, body {
	height: 100%;
}
body {
	counter-reset: paragraph;
}
button,
a {
	&:focus {
		outline: none;
	}
}
// GLOBAL STYLES    

</style>
