import Vue from 'vue'
import Button from './button'
import Icon from './icon'

// console.log(Button);
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
	el:'#app',
	data:{
		loading1 :false,
		loading2 :true,
		loading3: true
	}
})