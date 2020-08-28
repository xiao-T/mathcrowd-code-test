/**
 * NavBar component
 * Fri Aug 28 10:15:23 2020
 * by xiaoT
 */

import React, { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'

import { Row, Col, Form, Input } from 'antd'

import Login from './login'
import DropdownMenu from './dropdownMenu'

import './navBar.scss'

const { Item: FormItem } = Form

interface NavbarProps {}

const NavBar: FC<NavbarProps> = (): JSX.Element => {
  return (
    <Row
      align='middle'
      justify='space-between'
      className='nav-bar'>
      {/* logo & nans */}
      <Row align='middle' gutter={20}>
        <Col><i className='logo' /></Col>
        <Col className='navs'>
          <Row gutter={20}>
            <Col><Link className='nav-item' activeClassName='active' to={'/home'}>组卷</Link></Col>
            <Col><Link className='nav-item' activeClassName='active' to={'/qa'}>问答</Link></Col>
            <Col><Link className='nav-item' activeClassName='active' to={'/topics'}>专栏</Link></Col>
          </Row>
        </Col>
      </Row>
      {/* search form */}
      <Row className='search-form' align='middle'>
        <Form>
          <FormItem>
            <Input.Search placeholder='请输入关键词' />
          </FormItem>
        </Form>
      </Row>
      {/* user login status */}
      <Login />
      {/* list icon */}
      <DropdownMenu />
    </Row>
  )
}

export default NavBar
