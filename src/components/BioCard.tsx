import React from 'react'
import { Text, Flex } from '@chakra-ui/react'

interface BioCardProps{
  content: string
}

const BioCard: React.FC<BioCardProps> = ({content}) => {
  return (
    <Flex
      flexDir='column'
      boxShadow='lg'
      m='10px auto'
      p={5}
      bgColor='#fff'
      borderRadius='10px'
      maxW='1080px'
    >
      <Text align='center' fontSize={['1.4rem', '2rem']} color='#5f5a5a'>Who is Terry ?</Text>
      <Text fontSize='16px' fontWeight='300' color='#5f5a5a' p={5} whiteSpace="pre-line" >{content}</Text>
    </Flex>
  )
}

export default BioCard
