import React from 'react'
import { Flex } from '@chakra-ui/layout'
import LandingSection from '../components/LandingSection'
import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'

const Portfolio: React.FC = () => {
  return (
   
      <Flex
        flexDir='column'
      >
        <Flex 
          h='100vh'
          w='100vw'
        >
          <LandingSection />
        </Flex>
        <NavBar />
        <AboutSection />
      </Flex>
   
  )
}

export default Portfolio
