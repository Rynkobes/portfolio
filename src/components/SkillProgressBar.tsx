import React from 'react'
import { Flex, Text, Progress, Box, ProgressLabel } from '@chakra-ui/react'

interface SkillProps{
  skill: string
  progress: number
}

const SkillProgressBar: React.FC<SkillProps> = ({skill, progress}) => {
  return (
    <Flex h='30px' mb={2}>
      <Text 
        align='center'
        lineHeight='30px'
        fontSize='16px' 
        pl={3}
        bgColor='#0099ffc1' 
        color='#fff' 
        w='120px'
          >{skill}
      </Text>
      <Box 
      w='30vw'>
        <Progress 
          value={progress} 
          color='#0099ffd8' 
          borderRightRadius={2} 
          bgColor='#d3d3d3d8' 
          h='30px'>
            <ProgressLabel 
              fontSize='13px'
              color='#525252' 
              fontWeight='400' 
              textAlign='right'
              pl={2} 
              pr={2}>{progress}%
            </ProgressLabel>
        </Progress>
      </Box>
    </Flex>
  )
}

export default SkillProgressBar
