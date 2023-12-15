import Dropzone from '@/components/common/Dropzone/Dropzone'
import BoardHeader from '@/components/pages/(board)/BoardHeader'
import BoardLeftSection from '@/components/pages/(board)/BoardLeftSection'

function boardPage() {
  return (
    <>
      <BoardHeader />
      <BoardLeftSection />
      <Dropzone />
    </>
  )
}

export default boardPage
