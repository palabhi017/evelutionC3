import {Box,HStack,VStack,Heading,Grid,Text,Image,Button} from "@chakra-ui/react"
import React from 'react'

const Home = ({repos,profile}) => {
    console.log(repos)
    console.log(profile.name)
  return (
    <>
        <HStack w="100%">
            <VStack  mt="0" h="auto"  w="30%"  >
                <Heading>Profile</Heading>
                <VStack  borderRadius={"20px"} mt="30px" p="30px" gap="20px" border="1px solid #999" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                    <Image borderRadius={"30px"} w="30%" src={profile.avatar_url}/>
                    <Heading >Abhishek Pal</Heading>
                    <Grid templateColumns="repeat(3,30%)" gap="5px" >
                    <Button p='5px 10px' color="#fff" border="none" fontWeight={"bold"} bgColor="#e6135a">JavaScript</Button>
                    <Button p='5px 10px' color="#fff" border="none" fontWeight={"bold"} bgColor="#e6135a">React</Button>
                    <Button p='5px 10px' color="#fff" border="none" fontWeight={"bold"} bgColor="#e6135a">Redux</Button>
                    <Button p='5px 10px' color="#fff" border="none" fontWeight={"bold"} bgColor="#e6135a">TypeScript</Button>
                    <Button p='5px 10px' color="#fff" border="none" fontWeight={"bold"} bgColor="#e6135a">MongoDB</Button>
                    <Button p='5px 10px' color="#fff" border="none" fontWeight={"bold"} bgColor="#e6135a">Node</Button>

                    </Grid>
                    <HStack>
                    <Button p="10px 20px" borderRadius={"10px"} bgColor="#225d47" color="#ffeab6" fontWeight={"bold"}>Resume</Button> <Button p="10px 20px" borderRadius={"10px"} bgColor="#225d47" color="#ffeab6" fontWeight={"bold"}>Follow</Button>
                    </HStack>
                   
                </VStack>
                <VStack >
                <Heading  textAlign={"center"}>Experience</Heading>
            <Box m="auto" borderRadius={"20px"} mt="10px" p="0px 20px"  w="95%" border="2px solid #999">
                 <Text  color="#999" fontSize={"20px"} fontWeight="bold" color="#2f3556">SDE1 at masai school</Text>
                <Text color="#999" fontSize={"20px"} fontWeight="bold">july - present</Text>
            </Box>
              <Box m="auto" borderRadius={"20px"} mt="10px" p="0px 20px"  w="95%" border="2px solid #999">
                 <Text color="#999" fontSize={"20px"} fontWeight="bold" color="#2f3556">senior software engineer at tata</Text>
                <Text color="#999" fontSize={"20px"} fontWeight="bold">july - present</Text>
            </Box>
            <Box m="auto" borderRadius={"20px"} mt="10px" p="0px 20px"  w="95%" border="2px solid #999">
                 <Text color="#999" fontSize={"20px"} fontWeight="bold" color="#2f3556">software developer at swwigy</Text>
                <Text color="#999" fontSize={"20px"} fontWeight="bold">july - present</Text>
            </Box>
            <Box m="auto" borderRadius={"20px"} mt="10px" p="0px 20px" w="95%" border="2px solid #999">
                <Text color="#999" fontSize={"20px"} fontWeight="bold" color="#2f3556">full stack developer at masai</Text>
                <Text color="#999" fontSize={"20px"} fontWeight="bold">july - present</Text>
            </Box>
            <Box m="auto" borderRadius={"20px"} mt="10px" p="0px 20px"  w="95%" border="2px solid #999">
                 <Text color="#999" fontSize={"20px"} fontWeight="bold" color="#2f3556">SDE1 at masai school</Text>
                <Text color="#999" fontSize={"20px"} fontWeight="bold">july - present</Text>
            </Box>
            </VStack>
            </VStack>
            
            <Grid margin={"auto"} p='20px' gap="20px" w="70%" templateColumns="repeat(2, 1fr)" templateRows="repeat(5,150px)">
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
        </HStack>
    </>
  )
}

export async function getServerSideProps(){
    let res = await fetch(`https://api.github.com/search/repositories?q=user:palabhi017+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data = await res.json()
    let res1 = await fetch(`https://api.github.com/users/palabhi017`)
    let data1 = await res1.json()
    // console.log(data1)
    return {
        props:{
            repos: data.items,
            profile: data1

        }
    }
}

export default Home