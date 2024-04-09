import Header from '@/components/layouts/Header/Header'
import StoryAccordionSidebar from '@/components/pages/(story)/StoryAccordionSidebar'
import StorySection from '@/components/pages/(story)/StorySection'
import { StyledStoryPageContainer } from '@/components/pages/(story)/styled'

function StoryPage() {
  return (
    <>
      <Header />
      <StyledStoryPageContainer>
        <StoryAccordionSidebar />
        <StorySection />
      </StyledStoryPageContainer>
    </>
  )
}

export default StoryPage
