import React from 'react'
import {Link} from '@chakra-ui/react'

interface NavProps {
  link: string
  linkSection: string
}

const NavItem: React.FC<NavProps> = ({link, linkSection}) => {

  return (
    <Link 
    color='#fff'
    href={linkSection}
    p={5}
    _hover={{
      borderBottom: '5px solid #0099ff',
      color: '#0099ff',
    }}
    _focus={{
      color: '#fff',
  
    }}
    >
      {link}
    </Link>
  )
}

export default NavItem
