import { StyledBoardPageContainer } from '@/components/pages/(board)/styled'

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <StyledBoardPageContainer>{children}</StyledBoardPageContainer>
}

export default AuthLayout
