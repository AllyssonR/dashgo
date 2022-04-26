import { Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
interface NavSectionProps {
  title: string
  children: ReactNode
}
export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gtay.400" fontSize="small">
        {title}
      </Text>
      {children}
    </Box>
  )
}
