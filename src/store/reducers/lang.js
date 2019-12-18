import {
  handleActions
} from 'redux-actions'
import {
  SETLANG,
  GETLOCATE
} from '../types/lang'
import {
  language
} from '../../lang'

const defaultState = {
  lang: wx.getStorageSync('language') || 'zh-CN',
  locate: language[wx.getStorageSync('language')]
}

export default handleActions({
  [SETLANG](state, action) {
    wx.setStorageSync('language', action.payload)
    return {
      lang: action.payload,
      locate: language[action.payload]
    }
  },
  [GETLOCATE](state, action) {
    console.log("参数：", state, action)
    return action
  }
}, defaultState)
