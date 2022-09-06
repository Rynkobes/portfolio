import React from 'react'
import { Flex } from '@chakra-ui/layout'
import NavItem from './NavItem'

const NavBar = () => {
  return (
    <Flex 
      d={['none', 'flex']}
      align='center'
      justify='center'
      bgColor='#122349'
      top={0}
      position='sticky'
    >
      <NavItem link='Home' linkSection='#'/>
      <NavItem link='About' linkSection='#about'/>
      <NavItem link='Skills' linkSection='#skills' />
      <NavItem link='Portfilio' linkSection='#portfolio'/>
      <NavItem link='Contact' linkSection='#contact'/>
    </Flex>
  )
}

export default NavBar
