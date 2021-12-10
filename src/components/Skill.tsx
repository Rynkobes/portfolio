import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface SkillProps{
  text: string 
}

const Skill: React.FC<SkillProps> = ({children, text}) => {
  return (
    <Flex 
      boxShadow='md'
      flexDir='column'
      boxSize='90px'
      w='90px'
      borderRadius={8}
      align='center'
      justifyContent='center'
      border= '1px solid #bdbdbdbc'
    >
      {children}
      <Text fontSize='13px' mt={1}>{text}</Text>
    </Flex>
  )
}

export default Skill
