import React from 'react'
import Link from "next/link"
import {HStack,Text} from "@chakra-ui/react"
const Navbar = () => {
  return (
    <HStack gap="30px" p="5px 20px" h="50px" bgColor={"#333"} color="white">
        <Link style={{linkdecoretion:"none"}}  href="/home"> <Text color="white"> Abhishek Pal </Text> </Link>
        <Link color="#fff" href="/projects"><Text color="white"> Projects </Text></Link>
        <Link color="#fff" href="/experience"><Text color="white"> Experience</Text></Link>
    </HStack>
  )
}

export default Navbar