import { ListItem, ListItemText } from '@mui/material'
import { StyledMainListItem } from './styled'
import clsx from 'clsx'
import Link from 'next/link'

type T_MainListItem = {
  rank: number
  title: string
  comment: string
}

function MainListItem({ rank, title, comment }: T_MainListItem) {
  const isTopRank = rank === 1 || rank === 2 || rank === 3

  return (
    <Link href="/">
      <StyledMainListItem>
        <ListItem className="raking-list-item">
          <div className={clsx('square-ranking', { top: isTopRank })}>
            <span>{rank}</span>
          </div>
        </ListItem>
        <ListItemText primary={title} secondary={comment} />
      </StyledMainListItem>
    </Link>
  )
}

export default MainListItem
