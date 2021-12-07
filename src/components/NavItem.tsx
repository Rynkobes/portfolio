import React from 'react'
import {Link} from '@chakra-ui/react'

interface NavProps {
  link: string
}

const NavItem: React.FC<NavProps> = ({link}) => {

  return (
    <Link 
    color='#fff'
    
    p={5}
    _hover={{
      borderBottom: '5px solid #0099ff',
      color: '#0099ff',
    }}
    >
      {link}
    </Link>
  )
}

export default NavItem
