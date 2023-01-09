import {Box,HStack,VStack,Heading,Grid,Text} from "@chakra-ui/react"


import React from 'react'

const Project = ({repos}) => {
  return (
    <div style={{margin:"auto"}}>
       <Grid  p='20px' gap="20px" w="70%" templateColumns="repeat(2, 1fr)" templateRows="repeat(5,150px)">
                {repos.map((e)=> (
                    <Box p="20px" border="2px solid #999" borderRadius={"20px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                        <Heading color="#3363ac ">{e.name}</Heading>
                        <Text>{e.description}</Text>
                        <HStack p="10px" justifyContent={"space-between"}>
                            <HStack>
                                <Box>{e.watchers}</Box>
                                <Box>{e.fork_count}</Box>
                            </HStack>
                            <Box fontSize={"18px"} fontWeight='bold' color="#225d47">{e.language}</Box>
                        </HStack>
                    </Box>
                ))}
            </Grid>
    </div>
  )
}
export async function getServerSideProps(){
    let res = await fetch(`https://api.github.com/search/repositories?q=user:palabhi017+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data = await res.json()
    return {
        props:{
            repos: data.items
        }
    }
}

export default Project