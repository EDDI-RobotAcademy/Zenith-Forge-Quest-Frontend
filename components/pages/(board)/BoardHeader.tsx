import Link from 'next/link'
import { StyledBoardHeader } from './styled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from '@/components/common/Button/Button'
function BoardHeader() {
  return (
    <StyledBoardHeader>
      <Link className="back-link" href="/">
        <ArrowBackIcon />
      </Link>

      <Button className="login-btn" size="small" variant="contained">
        저장
      </Button>
    </StyledBoardHeader>
  )
}

export default BoardHeader
