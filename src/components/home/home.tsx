/**
 * Home component
 * by xiaoT
 */

import React, { FC } from 'react'
import { Button } from 'antd'

import NavBar from '@Components/navBar/'

interface HomeProps {}

const Home:FC<HomeProps> = ():JSX.Element => {
  return (
    <>
      <NavBar />
      <Button type='primary'>antd button</Button>
    </>
  )
}

export default Home
