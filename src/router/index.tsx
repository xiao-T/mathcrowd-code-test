/**
 * routes
 * Fri Aug 28 09:48:48 2020
 * by xiaoT
 */

import React, { FC, CSSProperties, lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

const Home = lazy(() => import(/* webpackChunkName: 'home.lazy' */'@Components/home/index'))

const NoMatch: FC<RouteComponentProps> = ({ location }) => {
  let style: CSSProperties = {
    color: 'red',
    fontSize: '16px',
    margin: '20px auto',
    textAlign: 'center'
  }
  return (
    <div style={style}>路由不匹配：{location.pathname}</div>
  )
}
const routes = [
  {
    path: '/',
    exact: true,
    render: (props) => {
      return (
        <Redirect to={'/home'} />
      )
    }
  }, {
    path: '/home',
    exact: true,
    component: Home
  }, {
    component: NoMatch
  }
]

export default routes
