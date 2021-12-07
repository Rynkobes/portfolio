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
      align='center'
      w='20vw'
    >
      <Flex boxSize='120px' flexDir='column' mr={2}>
      <Image src={hexagon} h='120px' 
      mb='-90px'
      />
      <Image src={name} w='60px' ml='auto' mr='auto'/>
    </Flex>
      <Text fontSize='25px' color='#696969' fontWeight='450'>{title}</Text>
      <Text fontWeight='300' pl={2} pr={2} color='#696969' fontSize='16px' align='center'>{body}</Text>
    </Flex>
  )
}

export default Icon
