//状态

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
	mute: false,			//是否静音
	computershow: true,		//是否电脑登
	infor: {},				//联系人信息
	contactList: [],		//对话列表
	userInfo: {},			//用户信息
	newImg: '',				//主题图片地址
	imagestatus: false,
	firendwarn: true,		//朋友圈提示红色按钮
	consumerthing: false,	//登弹窗显隐
	allgroup:[],			//所有Group Chat的人
	
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})