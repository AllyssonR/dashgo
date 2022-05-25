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
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
/*
estou com um problema no handleSubmit não consigo fazer ele validar os dados não aparece nenhum erro que indique algo o que pode ser
encontrado quando mudo de pagina na aplicação é um erro relacionado a webpack que é "webpack-internal ..." não sei dizer oq 
procurando no google aparece que é algo relacionado ao browser que possui um cache de alguma coisa que esta dando erro,
porem mesmo mudando de browser o problema persiste , o codigo aparentimente esta de acordo com que esta no site do react-hook-form e com a aula do diego
mas ainda assim tenho esse problema pode ser algo que tenha mudado em outra pasta que esta interfirindo nessa R:problema resolvido esta esquecendo de passar os erros para os inputs do formulario
*/
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
    .min(6, 'A senha precisa de no minimo de 6 caracteres')
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting } // é presiso pegar os atributos do formState que irão ser ultilizados
  } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const handleCreateUser: SubmitHandler<
    CreateUserFormData | FieldValues
  > = async values => {
    // coloquei essa
    console.log(values)
    console.log(watch('name,email,password,confirmation_password'))
  }
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuario
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="nome completo"
                type="text"
                id="name"
                error={errors.name}
                {...register('name')}
              />

              <Input
                type="email"
                label="E-mail"
                id="email"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="password"
                id="password"
                label="senha"
                error={errors.password}
                {...register('password')}
              />

              <Input
                id="confirmation_password"
                type="password"
                label="Confirme a sua senha"
                error={errors.confirmation_password}
                {...register('confirmation_password')}
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
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
