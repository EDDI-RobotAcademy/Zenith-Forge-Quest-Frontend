import { Avatar, CardContent, CardHeader, CardMedia } from '@mui/material'
import { StyledCard, T_CardSize } from './Card.style'
import { Flexbox } from '../FlexBox/FlexBox'
import Chip from '../Chip/Chip'
import Tooltip from '../Tooltip/Tooltip'
import SquareIconBtn from '../SquareIconBtn/SquareIconBtn'
import useCategoryToColor from '@/hooks/useCategoryToColor'
import Link from 'next/link'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { neutralColor } from '@/styles/theme/colors'

type T_CardProps = {
  category: string
  title: string
  content: string
  imageSrc: string
  author: string
  minute: string
  hour: string
  $size?: T_CardSize
}

function Card({ category, title, content, imageSrc, author, minute, hour, $size = 'lg' }: T_CardProps) {
  const categoryToColor = useCategoryToColor()

  return (
    <StyledCard $size={$size}>
      <CardHeader
        className="card-header"
        avatar={
          <Flexbox className="card-header-container">
            <Chip
              href="/"
              size={$size === 'sm' ? 'small' : 'medium'}
              label={category}
              color={categoryToColor(category as any) as any}
            />
            <Flexbox className="card-icon">
              <Tooltip title="댓글">
                <SquareIconBtn className="chat-icon" aria-label="chat">
                  <ChatBubbleOutlineIcon fontSize={$size === 'sm' ? 'small' : 'medium'} color="primary" />
                </SquareIconBtn>
              </Tooltip>
              <Tooltip title="공유하기">
                <SquareIconBtn className="share-icon" aria-label="share">
                  <ShareIcon fontSize={$size === 'sm' ? 'small' : 'medium'} color="primary" />
                </SquareIconBtn>
              </Tooltip>
              <Tooltip title="스크랩">
                <SquareIconBtn className="bookmark-icon" aria-label="share">
                  <BookmarkBorderIcon fontSize={$size === 'sm' ? 'small' : 'medium'} color="primary" />
                </SquareIconBtn>
              </Tooltip>
            </Flexbox>
          </Flexbox>
        }
      />
      <CardContent className="card-top">
        <CardMedia className="card-media-container" image={imageSrc} title="green iguana" />
      </CardContent>

      <CardContent className="card-contents">
        <div className="card title">
          <Link className="anchor-under" href="/">
            {title}
          </Link>
        </div>
        <Flexbox className="card time" justifyContent="inherit">
          <AccessTimeIcon fontSize="small" />
          <p className="minute">{minute}</p>
          <p className="">|</p>
          <p className="hours">{hour}</p>
        </Flexbox>

        <div className="card contents">
          <Link className="anchor-under" href="/">
            {content}
          </Link>
        </div>
      </CardContent>

      <CardContent className="card-bottom">
        <Flexbox justifyContent="inherit">
          <Avatar>
            <InsertEmoticonIcon fontSize="small" />
          </Avatar>
          <p className="author">{author}</p>
        </Flexbox>
      </CardContent>
    </StyledCard>
  )
}

export default Card
