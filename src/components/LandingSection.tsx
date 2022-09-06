import React from 'react'
import { Flex, Box, Image, Text, Button, Link } from '@chakra-ui/react'
import  {AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import terryb from '../assets/terryb.png'
import { name, bio, linkedInUrl, gitHubUrl } from '../content'


const LandingSection: React.FC = () => {
  const resume = `https://drive.google.com/file/d/1uYZAnJxkM5SPo3LazRyIGqKmNG37CvSK/view?usp=sharing`
  return (
    <Flex 
      flexDir={['column', 'row']}
      alignItems='center'
      justifyContent={'center'}
      h={['100vh', '91vh']}
      >
      <Box
        boxSize={['130px', '200px']}
      >
        <Image src={terryb}  
        name={name} 
        borderRadius='50%'
        boxShadow='md'
        ml={1}
        />
        <Box boxSize={['140px', '215px']} borderRadius='50%' bgColor='#0099ff47'mt='-108%' ml={5}/>
        <Box boxSize={['140px', '215px']} borderRadius='50%' bgColor='#0099ff6d'mt='-108%' ml={3}/>
        <Box boxSize={['140px', '215px']} borderRadius='50%' bgColor='#0099ff6d'mt='-108%' ml={1}/>
      </Box>
      <Flex
        flexDir='column'
        ml={[0, 10]}
        p={[3, 10]}
        w={[ '100%', '40%']}
      >
        <Text 
          as='h2' 
          fontSize={['1.5rem', '2.1rem']}
          textAlign={['center', 'start']}
          fontWeight='300' 
          color='#6d6d6d' >
          Terry Don Bartels
        </Text>
        <Text
          p={[5, 3, 0]}
          fontSize={['12pt', '13pt']}
          color='#696969'>{bio}</Text>
        <Flex
          align={['center', 'none']}
          padding={[5, 0]}
          flexDir={['column-reverse', 'row']} 
          mt={5}
        >
          <Button 
            as={Link}  
            isExternal
            bgColor='#0099ff' 
            href={resume} 
            color='#fff' 
            mr={[0, 20]} 
            mt={[5, 0]} 
            p='1.2em' 
            minW='6.5rem'>Resume</Button>
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
