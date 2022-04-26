import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProfiderProps {
  children: ReactNode
}
type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)
/*aqui é feita um contexto para  que no header se possa saber caso o menu Drawer seja habilitado se ele esta aberto ou fechado*/
export function SidebarDrawerProvider({
  children
}: SidebarDrawerProfiderProps) {
  const disclousure = useDisclosure()
  const router = useRouter()
  useEffect(() => {
    disclousure.onClose()
  }, [router.asPath])
  return (
    <SidebarDrawerContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
