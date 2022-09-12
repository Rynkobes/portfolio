import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import hexagon from '../assets/hexagon.png'


interface IconProps {
  name: string
  title: string
  body: string
}


const Icon: React.FC<IconProps> = ({name, title, body}) => {
  return (
    <Flex
      flexDir='column'
      m={['1rem auto', 'none']}
      align='center'
      maxW={['85%','20vw']}
    >
      <Flex
        boxSize={['80px', '120px']}
        flexDir='column'
        align='center'
      >
        <Image
          src={hexagon}
          h={['', '120px']} 
          mb={['-5rem', '-7.3rem']}
        />
        <Image
          src={name}
          w={['50px', '60px']}
          m={['auto']}
        />
    </Flex>
      <Text fontSize={['1.3rem','25px']} color='#696969' fontWeight='450'>{title}</Text>
      <Text fontWeight='300' pl={2} pr={2} color='#696969' fontSize='16px' align='center'>{body}</Text>
    </Flex>
  )
}

export default Icon
