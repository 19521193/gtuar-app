
import Button from '@mui/material/Button/Button'
import Box from '@mui/material/Box/Box'
import Stack from '@mui/material/Stack/Stack'
import CheckBox from '@mui/material/Checkbox/Checkbox'
import Produc from './component/Homepage/bodys'
import Header from './component/Homepage/header'
import Footer from './component/Homepage/footer'


import React, { Component } from 'react'
import Image from 'next/image'


export default function Home() {
  return (
    <Box sx={{}}>
      <Header />
      <Produc />
      <Footer />
    </Box>
  )
}
