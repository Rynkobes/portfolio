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
      mb={10}
      ml={10}
      mr={10}
      p={5}
      bgColor='#fff'
      borderRadius='10px'
    >
      <Text align='center' fontSize='30px' color='#5f5a5a'>Who is Terry ?</Text>
      <Text fontSize='16px' fontWeight='300' color='#5f5a5a' p={5}>{content}</Text>
    </Flex>
  )
}

export default BioCard
