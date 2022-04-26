import { HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
export function NotificationsaNav() {
  return (
    <HStack
      spacing={['6', '8']} //esses valores são para responsividade do componente ele vai assumir de acordo com o tamanho da tela qual tamanho ele vai ficar
      mx={['6', '8']}
      pr={['6', '8']}
      py-="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  )
}
