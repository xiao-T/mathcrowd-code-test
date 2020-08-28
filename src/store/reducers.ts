/**
 * reducer
 * Fri Aug 28 13:18:15 2020
 * by xiaoT
 */

let initState = {
  userinfo: {
    login: false
  }
}

export default function (state = initState, action) {
  let { userinfo } = action
  switch (action.type) {
    case 'UPDATE_USERINFO': // update userinfo
      return Object.assign({}, state, { userinfo })
    default:
      return state
  }
}
