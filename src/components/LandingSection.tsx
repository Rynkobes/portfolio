import React from 'react'
import { Flex, Box, Image, Text, Button, Link } from '@chakra-ui/react'
import  {AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import terryb from '../assets/terryb.png'
import { name, bio, linkedInUrl, gitHubUrl } from '../content'


const LandingSection: React.FC = () => {
  return (
    <Flex 
      flexDir={['column', 'row']}
      alignItems='center'
      justifyContent='center'
      h={['none', '91vh']}
    >
      <Box boxSize='200px'>
        <Image src={terryb}  
        name={name} 
        borderRadius='50%'
        boxShadow='md'
        ml={1}
        />
        <Box boxSize='215px' borderRadius='50%' bgColor='#0099ff47'mt='-108%' ml={5}/>
        <Box boxSize='215px' borderRadius='50%' bgColor='#0099ff6d'mt='-108%' ml={3}/>
        <Box boxSize='215px' borderRadius='50%' bgColor='#0099ff6d'mt='-108%' ml={1}/>
      </Box>
      <Flex
        flexDir='column'
        ml={[5, 10]}
        p={10}
        w={[ '100%', '40%']}
      >
        <Text 
          as='h2' 
          fontSize={['1.8rem','2.1rem']} 
          fontWeight='300' 
          color='#6d6d6d' >
          Terry Don Bartels
        </Text>
        <Text pt={3} pb={3} color='#696969'>{bio}</Text>
        <Flex
        flexDir={['column-reverse', 'row']} 
        mt={5}>
          <Button bgColor='#0099ff' color='#fff' mr={20} p='1.2em' minW='6.5rem'>Resume</Button>
          <Flex>
            <Link href={linkedInUrl} isExternal>
              <Flex ml={5} boxShadow='md' boxSize='40px' align='center' justify='center' color='#0099ff' ><AiFillLinkedin size='25px' /></Flex>
            </Link>
            <Link href={gitHubUrl} isExternal>
              <Flex ml={5} boxShadow='md' boxSize='40px' align='center' justify='center' color='#0099ff' ><AiOutlineGithub size='25px' color='#34355'  /></Flex>
            </Link>
            <Flex ml={5} boxShadow='md' boxSize='40px' align='center' justify='center' color='#0099ff' ><AiOutlineTwitter size='25px' color='#34355' /></Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LandingSection
