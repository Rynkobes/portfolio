import React from 'react'
import { Flex } from '@chakra-ui/layout'
import NavItem from './NavItem'

const NavBar = () => {
  return (
    <Flex 
    align='center'
    justify='center'
    bgColor='#122349'
    borderBottom='3px solid #0099ff'
    >
      <NavItem link='Home' />
      <NavItem link='About' />
      <NavItem link='Portfilio' />
      <NavItem link='Contact' />
    </Flex>
  )
}

export default NavBar
