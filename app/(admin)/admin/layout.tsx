import { StyledAdminPageContainer } from '@/components/pages/(admin)/styled'

interface AdminLayoutProps {
  children: React.ReactNode
}

function adminLayout({ children }: AdminLayoutProps) {
  return <StyledAdminPageContainer>{children}</StyledAdminPageContainer>
}

export default adminLayout
