import React from 'react'
import { Flex } from '@chakra-ui/layout'
import LandingSection from '../components/LandingSection'

const Portfolio: React.FC = () => {
  return (
   
      <Flex>
        <Flex 
          h='100vh'
          w='100vw'
          border='1px solid tomato'
        >
          <LandingSection />
        </Flex>
      </Flex>
   
  )
}

export default Portfolio
