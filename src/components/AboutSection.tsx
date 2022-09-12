import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/react'
import Icon from './Icon'
import bulb from '../assets/bulb.png'
import speed from '../assets/speed.png'
import devices from '../assets/device.png'
import dynamicArrow from '../assets/dynamicArrow.png'
import { fastContent, dynamicText, intuitiveText, responsiveText, introMessage } from '../content'
import BioCard from './BioCard'


const AboutSection: React.FC = () => {
  return (
    <Flex
      p={[8, 10]}
    id='about'
    flexDir='column'
    w='100%'
    ml='auto'
    mr='auto'
      bgColor='#e2e2e263'
    >
      <Flex
        flexDir='column'
        align='center'
        justify='center'
        mt={[0, 5]}
        mb={5}
    >
        <Text fontSize={['1.4rem', '2rem']} fontWeight={400} color='#5f5a5a'>About</Text>
        <Divider w='40px' borderColor='#3d3b3b' border='3px' mt={1} />
      </Flex>
      <BioCard content={introMessage} />
      <Flex
        flexDir={['column', 'row']}
        justify={['', 'space-around']}
        p={['none', '3rem']}
        m={['none', '3.5rem auto']}
      >
        <Icon name={speed} title='Fast' body={fastContent} />
        <Icon name={devices} title='Responsive' body={responsiveText} />
        <Icon name={bulb} title='Intuitive' body={intuitiveText} />
        <Icon name={dynamicArrow} title='Dynamic' body={dynamicText}/>
      </Flex>
    </Flex>
  )
}

export default AboutSection
