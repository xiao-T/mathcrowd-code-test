/**
 * Login component
 * Fri Aug 28 11:52:26 2020
 * by xiaoT
 */

import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { Row, Button, Avatar, Col, Badge, Modal } from 'antd'
import { UserOutlined, BellOutlined } from '@ant-design/icons'

import { updateUserinfo } from '@Store/actions'

interface LoginProps {
  className?: string;
}
// get qr uuid
function getUUID (): Promise<any> {
  return axios.get('https://www.mathcrowd.cn/index.php?r=qr/ajax-generate')
}
// check uuid status
function checkUUID (uuid: string): Promise<any> {
  return axios.get(`https://www.mathcrowd.cn/index.php?r=qr/ajax-check&uuid=${uuid}`)
}

let timer = null

const Login: FC<LoginProps> = ({ className = '' }): JSX.Element => {
  // component state
  let [modalStatus, setModalStatus] = useState<boolean>(false)
  let [uuid, setUUID] = useState<string>('')
  // store dispatch
  const dispatch = useDispatch()
  let userinfo = useSelector(state => state.userinfo)
  const { login, nickname, avatar } = userinfo

  // switch modal
  function handleSwitchModal () {
    setModalStatus(!modalStatus)
  }
  // loop check uuid
  function loopCheckUUID (uuid: string) {
    timer = setTimeout(() => {
      checkUUID(uuid).then(res => {
        const { data: resData } = res
        let { success, status_id: statusId } = resData
        if (success === 'success' && statusId === 1) {
          dispatch(updateUserinfo({
            login: true,
            ...resData
          }))
          setModalStatus(false)
        } else {
          loopCheckUUID(uuid)
        }
      })
    }, 500)
  }
  // clear timer
  function handleClearTimer () {
    if (timer) {
      clearTimeout(timer)
    }
  }
  // get uuid & show modal
  function handleGetUUID () {
    getUUID().then(res => {
      const { data: resData } = res
      const { success, uuid } = resData
      if (success === 'success') {
        setModalStatus(true)
        setUUID(uuid)
        loopCheckUUID(uuid)
      }
    })
  }
  return (
    <>
      <Row align='middle' gutter={20} className={`login-status ${className}`}>
        {
          !login
            ? <Button onClick={handleGetUUID} type='text'>扫码登录</Button>
            : <>
              <Col>
                <Row align='middle' gutter={5}>
                  <Col>
                    {
                      avatar
                        ? <Avatar className='avatar' src={`https://cdn2.mathcrowd.cn/uploads/avatar/${avatar}`} />
                        : <Avatar className='avatar' icon={<UserOutlined />} />
                    }
                  </Col>
                  <Col className='user-name'>{nickname}</Col>
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
      <Modal
        closable={false}
        onOk={handleSwitchModal}
        onCancel={handleSwitchModal}
        afterClose={handleClearTimer}
        visible={modalStatus}>
        <img className='login-qr' src={`https://www.mathcrowd.cn/index.php?r=qr%2Fget&uuid=${uuid}`} />
      </Modal>
    </>
  )
}

export default Login
