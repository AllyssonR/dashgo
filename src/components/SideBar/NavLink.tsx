import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string
}
/*
a extenção no NavLinkProps serve para que possa usar o NavLink Como 
se fosse a propriedade link do Chakra-ui junto com as funções de icones no 
dashborad assim pode ser usado em outras partes o app e até facilitando futuras 
altrações no codigo adicionando estilização ou função
*/
/* a importação do link do NextJs serve para fazer o roteamento da aplicação tendo
 como navegar pelo mesmo atravez de botoes */
export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
