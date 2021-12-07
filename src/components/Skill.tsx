import React from 'react'
import { Flex, Text, Progress, Box } from '@chakra-ui/react'

interface SkillProps{
  skill: string
  pecentage: number
}

const Skill: React.FC = () => {
  return (
    <Flex>
      {/* <Text fontSize='18px' p={2} bgColor='#0099ff' color='#fff' w='120px'>React</Text> */}
      <Box h='100px'>
        <Progress value={80} colorScheme='green' borderRadius={8}/>
      </Box>
    </Flex>
  )
}

export default Skill
