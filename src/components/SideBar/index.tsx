import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../Context/SidebarDrawerContext'
import { SideBarNav } from './SideBarNav'
/* a função  drawer serve para criar um  menu sanduiche no caso da tela n
a qual se acessa a aplicação seja um celular criando um Drawer bar igual menus de aplicativos de celulares */
export function SideBar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })
  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}
