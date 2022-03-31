import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { SideBar } from './sidebar'

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" px="6">
        <SideBar/>
      </Flex>
    </Flex>
  )
}