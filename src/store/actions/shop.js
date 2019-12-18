import {
  GET_SHOPLIST
} from '../types/shop'
import {
  createAction
} from 'redux-actions'
import wepy from 'wepy'
export const getShopList = createAction(GET_SHOPLIST, (type) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: 'https://www.95cfun.cn/front/activity',
      data: {
        activityName: type
      },
      success: function (res) {       
        if (res.statusCode === 200 && res.data.errorCode === '0000') {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
})
