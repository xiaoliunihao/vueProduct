Vue.config.productionTip = false
require("./style/app.scss")
import Vue from "vue";
import Index from "./script/components/Index"

new Vue({
	el:"#app",
	components:{
		Index:Index
	}
})