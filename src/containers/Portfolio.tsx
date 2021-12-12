import React from 'react'
import { Flex } from '@chakra-ui/layout'
import LandingSection from '../components/LandingSection'
import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import SkillCard from '../components/SkillCard'
import PortfolioSection from '../components/PortfolioSection'
import Footer from '../components/Footer'

const Portfolio: React.FC = () => {
  return (
   
      <Flex
        flexDir='column'
      >
          <LandingSection />
        <NavBar />
        <AboutSection />
        <SkillCard />
        <PortfolioSection />
        <Footer />
      </Flex>
   
  )
}

export default Portfolio
