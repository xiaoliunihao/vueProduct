Vue.config.productionTip = false
require("./style/app.scss")
import Vue from "vue";
import router from "./script/router"

new Vue({
	el:"#app",
	router,
	template:"<router-view></router-view>"
})