import React from 'react'
import { Flex, Box, Image, Text, Button, Link } from '@chakra-ui/react'
import  {AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import terryb from '../assets/terryb.png'
import { name, bio, linkedInUrl, gitHubUrl } from '../content'


const LandingSection: React.FC = () => {
  return (
    <Flex 
      alignItems='center'
      justifyContent='center'
      w='100%'
    >
      <Box boxSize='200px'>
        <Image src={terryb}  
        name={name} 
        borderRadius='50%'
        boxShadow='md'
        ml={1}
        />
        <Box boxSize='215px' borderRadius='50%' bgColor='#64040778'mt='-108%' ml={5}/>
        <Box boxSize='215px' borderRadius='50%' bgColor='#6404076f'mt='-108%' ml={3}/>
        <Box boxSize='215px' borderRadius='50%' bgColor='#6404074e'mt='-108%' ml={1}/>
      </Box>
      <Flex
        flexDir='column'
        ml={20}
        w='40vw'
      >
        <Text as='h2' fontSize='40px' fontWeight='300' color='#6d6d6d' >
          Terry Don Bartels
        </Text>
        <Text pt={3} pb={3} color='#696969'>{bio}</Text>
        <Flex mt={5}>
          <Button bgColor='#640408' color='#fff' mr={20}>Resume</Button>
          <Flex>
            <Link href={linkedInUrl} isExternal>
              <Flex ml={5} boxShadow='md' boxSize='40px' align='center' justify='center' color='red.900' ><AiFillLinkedin size='25px' /></Flex>
            </Link>
            <Link href={gitHubUrl} isExternal>
              <Flex ml={5} boxShadow='md' boxSize='40px' align='center' justify='center' color='red.900' ><AiOutlineGithub size='25px' color='#34355'  /></Flex>
            </Link>
            <Flex ml={5} boxShadow='md' boxSize='40px' align='center' justify='center' color='red.900' ><AiOutlineTwitter size='25px' color='#34355' /></Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LandingSection
