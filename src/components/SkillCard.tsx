import React from 'react'
import { Grid } from '@chakra-ui/layout'
import { Flex, Text, Divider, Image } from '@chakra-ui/react'
import {FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaSass, FaAngular, FaBootstrap, FaWordpress} from 'react-icons/fa'
import {SiJavascript, SiRedux, SiGraphql, SiTypescript, SiWebpack } from 'react-icons/si'
import Skill from './Skill'
import chakraUi from '../assets/chakraUi.svg'

const SkillCard: React.FC = () => {
  return (
    <Flex
      flexDir='column'
      ml={20}
      mb={40}
      mr={20}
      id='skills'
    >
      <Flex
        flexDir='column'
        align='center'
        justify='center'
        mt={20}
        mb={10}
    >
        <Text fontSize={30} fontWeight={400} color='#5f5a5a'>Skills</Text>
        <Divider w='30px' borderColor='#3d3b3b' border='3px' mt={1} />
      </Flex>
      <Grid 
      boxShadow='md'
      pt={10}
      pl={10}
      pb={10}
      alignItems='center'
      templateColumns='repeat(5, 1fr)'
      gap={8}
    >
      <Skill text='HTML'>
        <FaHtml5 size='50px' color='#f06529'/>
      </Skill>
      <Skill text='CSS'>
        <FaCss3 size='50px' color='#264de4c8'/>
      </Skill>
      <Skill text='Sass'>
        <FaSass size='50px' color='#cd6799'/>
      </Skill>
      <Skill text='React'>
        <FaReact size='50px' color='#61DBFB'/>
      </Skill>
      <Skill text='Node.js'>
        <FaNodeJs size='50px' color='#68A063'/>
      </Skill>
      <Skill text='Redux'>
        <SiRedux size='50px' color='#764abc'/>
      </Skill>
      <Skill text='Graphql'>
        <SiGraphql size='50px' color='#f4447c'/>
      </Skill>
      <Skill text='Javascript'>
        <SiJavascript size='50px' color='#f0db4f'/>
      </Skill>
      <Skill text='Git'>
        <FaGitAlt size='50px' color='#f06529'/>
      </Skill>
      <Skill text='Angular'>
        <FaAngular size='50px' color='#dd1b16'/>
      </Skill>
      <Skill text='Typescript'>
        <SiTypescript size='50px' color='#007acc'/>
      </Skill>
      <Skill text='Bootstrap'>
        <FaBootstrap size='50px' color='#553C7B'/>
      </Skill>
      <Skill text='Chakra-ui'>
        <Image src={chakraUi} w='50px' />
      </Skill>
      <Skill text='Wordpress'>
        <FaWordpress size='50px' color='#00749C'/>
      </Skill>
      <Skill text='Webpack'>
        <SiWebpack size='50px' color='#8ed6fb'/>
      </Skill>
    </Grid>
    </Flex>
  )
}

export default SkillCard
