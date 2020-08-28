/**
 * DropdownMenu component
 * Fri Aug 28 12:14:04 2020
 * by xiaoT
 */

import React, { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { Dropdown, Menu } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'

import Login from '../login'

const { Item: MenuItem, Divider: MenuDivider } = Menu

// dropdown overlay menu
const DropMenu: FC<{}> = (): JSX.Element => {
  return (
    <Menu className='drop-menu'>
      <MenuItem><Link className='nav-item' activeClassName='active' to={'/home'}>组卷</Link></MenuItem>
      <MenuItem><Link className='nav-item' activeClassName='active' to={'/qa'}>问答</Link></MenuItem>
      <MenuItem><Link className='nav-item' activeClassName='active' to={'/topics'}>专栏</Link></MenuItem>
      <MenuDivider />
      <Login className='drop-menu-login-status' />
    </Menu>
  )
}
const DropdownMenu: FC<{}> = (): JSX.Element => {
  return (
    <Dropdown className='dropdown' overlay={<DropMenu />} trigger={['click']} arrow>
      <UnorderedListOutlined />
    </Dropdown>
  )
}

export default DropdownMenu
