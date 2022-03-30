import { Flex, Input, Button } from '@chakra-ui/react'
export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Input name="password" type="email" />
        <Input name="password" type="password" />
        <Button mt={6} type="submit" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
