import React from 'react'
import { Flex, Text, Divider, Progress } from '@chakra-ui/react'
import Icon from './Icon'
import bulb from '../assets/bulb.png'
import speed from '../assets/speed.png'
import devices from '../assets/device.png'
import dynamicArrow from '../assets/dynamicArrow.png'
import { fastContent, dynamicText, intuitiveText, responsiveText, introMessage } from '../content'
import BioCard from './BioCard'
import Skill from './Skill'


const AboutSection: React.FC = () => {
  return (
    <Flex p={10}
    flexDir='column'
    w='100%'
    ml='auto'
    mr='auto'
    >
      <Flex
        flexDir='column'
        align='center'
        justify='center'
        mt={5}
        mb={5}
    >
        <Text fontSize={40} fontWeight={400} color='#5f5a5a'>ABOUT</Text>
        <Divider w={20} borderColor='#3d3b3b' border='3px' />
      </Flex>
      <Flex
        justify='space-between'
       m={20}
      >
        <Icon name={speed} title='Fast' body={fastContent} />
        <Icon name={devices} title='Responsive' body={responsiveText} />
        <Icon name={bulb} title='Intuitive' body={intuitiveText} />
        <Icon name={dynamicArrow} title='Dynamic' body={dynamicText}/>
      </Flex>
      <Flex m={20}>
        <BioCard content={introMessage} />
        <Flex ml={5}>
          <Skill />
        <Progress value={80} colorScheme='green' borderRadius={8}/>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutSection
