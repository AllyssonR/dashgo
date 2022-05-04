import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
type SignInFormData = {
  email?: string
  password?: string
}
export default function Home() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm()

  const handleSignin: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }
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
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input
            {...register('email', { required: 'email  obgrigatorio' })}
            type="email"
            label="E-mail"
            error={errors.email}
          />
          <Input
            {...register('password', { required: 'senha obrigatoria' })}
            type="password"
            label="Password"
            error={errors.password}
          />
        </Stack>
        <Button
          mt="6"
          type="submit"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
