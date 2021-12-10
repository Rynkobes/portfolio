import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/react'
import PortfolioCard from './PortfolioCard'
import cashew from '../assets/cashew.png'
import evalu8 from '../assets/evalu8.png'
import philjoe from '../assets/philJoe.png'
import dashboard from '../assets/dashboard.png'
import { cashewDesc, cashewUrl, dashbordDesc, philDesc } from '../content'

const PortfolioSection = () => {
  return (
    <Flex
      flexDir='column'
      id='portfolio'
      bgColor='#e2e2e263'
      pt={20}
    >
      <Flex
        flexDir='column'
        align='center'
        justify='center'
        mb={20}
    >
        <Text fontSize={30} fontWeight={400} color='#5f5a5a'>Portfolio</Text>
        <Divider w='50px' borderColor='#3d3b3b' border='3px' mt={1}/>
      </Flex>
      <PortfolioCard 
        projectTitle='Cashew Website & Portals'
        url={cashewUrl}
        imgUrl={cashew}
        tech='Webflow, html, css, Javascript, React-typescript, Redux'
        desc={cashewDesc}
      />
      <PortfolioCard 
        projectTitle='Evalu8'
        url=''
        imgUrl={evalu8}
        tech='React, Typescript, Redux, Formik, react-touter, chakra-ui'
        repoUrl='https://github.com/Rynkobes/evalu8'
        desc={cashewDesc}
      />
      <PortfolioCard 
      projectTitle='Phil and Joe shoes website'
      url='https://philandjoeshoes.com/'
      imgUrl={philjoe}
      tech='Wordpress, WooCommerce, Joomla, jQuery'
      desc={philDesc}
    />
    <PortfolioCard 
      projectTitle='Dashboard'
      url=''
      imgUrl={dashboard}
      tech='React, typeScript, Chakra-UI, recharts'
      repoUrl='https://github.com/Rynkobes/vien-health-dashboard'
      desc={dashbordDesc}
    />
    </Flex>
  )
}

export default PortfolioSection
