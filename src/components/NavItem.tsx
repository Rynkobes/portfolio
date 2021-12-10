import React from 'react'
import { Link as ReactLink} from 'react-router-dom'
import {Link} from '@chakra-ui/react'

interface NavProps {
  link: string
  linkSection: string
}

const NavItem: React.FC<NavProps> = ({link, linkSection}) => {

  return (
    <Link as={ReactLink}
    color='#fff'
    to={linkSection}
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
