/*
 * @Author: RA
 * @Date: 2020-04-27 11:11:08
 * @LastEditTime: 2020-05-07 00:02:02
 * @LastEditors: RA
 * @Description: 
 */
import { combineReducers } from 'redux';
import * as ACTIONTYPES from './actionTypes';

const defaultState = {
  index: 0,
  musicId: '',
  currentTime: 0,
  duration: 0,
  isLogin: false,
  showLogin: false,
  theme: localStorage.getItem('themeIndex') || 0,
  playModel: localStorage.getItem('playModel') || 1,//1顺序播放 2随机播放 3单曲循环
  playStatus: false,
  userInfo: {},
  playList: [],//播放列表
  musicList: [],//音乐列表
  menuList: [
    { name: 'EMusic' },
    { name: '搜索', path: '/home/search', icon: 'search' },
    { name: '发现', path: '/home/find', icon: 'find' },
    { name: '视频', path: '/home/video', icon: 'video' },
    { name: '朋友', path: '/home/frind', icon: 'frind' },
    { name: '我的音乐' },
    { name: '本地音乐', path: '/home/local', icon: 'local' },
    { name: '下载管理', path: '/home/down', icon: 'down' },
    { name: '最近播放', path: '/home/lately', icon: 'lately' },
    { name: '创建的歌单' },
    { name: '收藏的歌单' },
  ]
}

//获取音乐列表
const musicList = (state = defaultState.musicList, action) => {
  switch (action.type) {
    case ACTIONTYPES.MUSIC_LIST:
      return action.data
    default:
      return state;
  }
}
//获取播放列表
const playList = (state = defaultState.playList, action) => {
  switch (action.type) {

    case ACTIONTYPES.PLAY_LIST:
      return action.data
    default:
      return state;
  }
}
//获取用户详情
const userInfo = (state = defaultState.userInfo, action) => {
  switch (action.type) {
    case ACTIONTYPES.USER_INFO:
      return action.data;
    default:
      return state;
  }
}
const showLogin = (state = defaultState.showLogin, action) => {
  switch (action.type) {
    case ACTIONTYPES.SHOW_LOGIN:
      return action.data;
    default:
      return state;
  }
}
const isLogin = (state = defaultState.isLogin, action) => {
  switch (action.type) {
    case ACTIONTYPES.IS_LOGIN:
      return action.data;
    default:
      return state;
  }
}
const menuList = (state = defaultState.menuList, action) => {
  switch (action.type) {
    case ACTIONTYPES.MENU_LIST:
      return Object.assign([], state, {
        state: action.data
      })
    default:
      return state;
  }
}
const musicId = (state = defaultState.musicId, action) => {
  switch (action.type) {
    case ACTIONTYPES.MUSIC_ID:
      return action.data
    default:
      return state;
  }
}
export default combineReducers({
  musicList,
  playList,
  userInfo,
  showLogin,
  isLogin,
  menuList,
  musicId
})