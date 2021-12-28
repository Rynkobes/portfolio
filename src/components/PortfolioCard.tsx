import React from 'react'
import { Flex, Image, Link, Text, UnorderedList, ListItem, Box} from '@chakra-ui/react'

interface PortfolioCardProps {
  projectTitle: string
  desc: string[]
  imgUrl: string
  url?: string
  repoUrl?: string
  tech?: string
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  projectTitle, desc, url, repoUrl, imgUrl, tech
}) => {
  return (
    <Flex
      flexDir={['column', 'row']}
      mb={20}
      ml={20}
      mr={20}
      boxShadow='md'
      borderRadius={20}
      // border='1px solid green'
      p={10}
      bgColor='#fff'
    >
      <Box 
        borderRadius={8}
        mr={10}
        border='2px solid #62626250'
      >
        <Image src={imgUrl} w='40vw'/>
      </Box>
      <Flex
        flexDir='column'
        align='self-start'
        justify='center'
      >
        <Text fontSize='20px' fontWeight='600' pb={2}>{projectTitle}</Text>
        <Flex 
          align='baseline'
        >
          <Text fontSize='17px' fontWeight='600' pr={2} pb={2}>Technologies Used: </Text>
          <Text fontWeight='700' color='#0322ad'>{tech}</Text>
        </Flex>
        <UnorderedList>
        {
          desc.map((item, i) => {
            return(
                <ListItem key={i}>
                  {item}
                </ListItem>
            )
          })
        }
        </UnorderedList>
        <Flex mt={10}>
          {
            url ? 
              <Link 
                href={url} 
                isExternal
                fontWeight='500'
                textDecoration='underline' 
                color='#122349'
                pr={3}
              >Live
              </Link> : null
          }
          {
            repoUrl ? 
            <Link 
              href={repoUrl} 
              isExternal
              fontWeight='500'
              textDecoration='underline' 
              color='#122349'
            >Repo</Link> : null
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PortfolioCard
