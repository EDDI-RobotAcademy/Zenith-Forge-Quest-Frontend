import { StyledStoryLayout } from '@/components/pages/(story)/styled'

interface StoryLayoutProps {
  children: React.ReactNode
}

function StoryLayout({ children }: StoryLayoutProps) {
  return <StyledStoryLayout>{children}</StyledStoryLayout>
}

export default StoryLayout
