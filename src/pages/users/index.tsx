import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Pagination from '../../components/Form/Pagination'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo Usuario
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whitealpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuario</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernandes</Text>
                    <Text fontWeight="sm" color="gray.300">
                      diego.schell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril,2021</Td>}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernandes</Text>
                    <Text fontWeight="sm" color="gray.300">
                      diego.schell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril,2021</Td>}
              </Tr>{' '}
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernandes</Text>
                    <Text fontWeight="sm" color="gray.300">
                      diego.schell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril,2021</Td>}
              </Tr>{' '}
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernandes</Text>
                    <Text fontWeight="sm" color="gray.300">
                      diego.schell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril,2021</Td>}
              </Tr>{' '}
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diego Fernandes</Text>
                    <Text fontWeight="sm" color="gray.300">
                      diego.schell.f@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril,2021</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
