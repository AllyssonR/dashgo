import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  confirmation_password: string
}
const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatorio'),
  email: yup.string().required('Email Obrigatorio').email('E-mail Invalido'),
  password: yup
    .string()
    .required('Senha Obrigatoria')
    .min(6, 'A senha precisa de no minimo de 6 caracteres'),
  confirmation_password: yup
    .string()
    .required()
    .min(6, 'A senha precisa de no minimo de 6 caracteres')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuario
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" label="nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="password" label="senha " />
              <Input
                name="password_confirmatin"
                type="password"
                label="Confirme a sua senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
