/**
 * app store actions
 * Fri Aug 28 13:16:20 2020
 * by xiaoT
 */
import { UPDATE_USERINFO } from './actionTypes'

/**
 * update userinfo
 */
export const updateUserinfo = (userinfo: {}): {type: string; userinfo: {}} => {
  return {
    type: UPDATE_USERINFO,
    userinfo
  }
}
