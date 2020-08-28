/**
 * Login component
 * Fri Aug 28 11:52:26 2020
 * by xiaoT
 */

import React, { FC } from 'react'
import { Row, Button, Avatar, Col, Badge } from 'antd'
import { UserOutlined, BellOutlined } from '@ant-design/icons'

interface LoginProps {
  className?: string;
}

const Login: FC<LoginProps> = ({ className = '' }): JSX.Element => {
  const login = false
  return (
    <Row align='middle' gutter={20} className={`login-status ${className}`}>
      {
        !login
          ? <Button type='text'>扫码登录</Button>
          : <>
            <Col>
              <Row align='middle' gutter={5}>
                <Col><Avatar className='avatar' icon={<UserOutlined />} /></Col>
                <Col className='user-name'>user-name</Col>
              </Row>
            </Col>
            <Col className='icon bell-icon'>
              <Badge dot>
                <BellOutlined />
              </Badge>
            </Col>
          </>
      }
    </Row>
  )
}

export default Login
