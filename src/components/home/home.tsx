/**
 * Home component
 * by xiaoT
 */

import React, { FC } from 'react'

import NavBar from '@Components/navBar/'

interface HomeProps {}

const Home:FC<HomeProps> = ():JSX.Element => {
  return (
    <>
      <NavBar />
    </>
  )
}

export default Home
