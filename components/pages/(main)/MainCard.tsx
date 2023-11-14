'use client'

import Link from 'next/link'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Avatar, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { Flexbox } from '@/components/common/FlexBox/FlexBox'
import Chip from '@/components/common/Chip/Chip'
import SquareIconBtn from '@/components/common/SquareIconBtn/SquareIconBtn'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import Tooltip from '@/components/common/Tooltip/Tooltip'
import { M_Main } from '@/types/model/main'
import useCategoryToColor from '@/hooks/useCategoryToColor'
import { StyledMainCard } from './styled'

function MainCard({ title, category, content, imageSrc, author, minute, hour }: M_Main.I_MainData) {
  const categoryToColor = useCategoryToColor()

  return (
    <StyledMainCard>
      <CardHeader
        className="card-header"
        avatar={
          <Flexbox className="card-header-container">
            <Chip href="/" size="medium" label={category} color={categoryToColor(category as any) as any} />
            <Flexbox className="card-icon">
              <Tooltip title="댓글">
                <SquareIconBtn className="chat-icon" aria-label="chat">
                  <ChatBubbleOutlineIcon />
                </SquareIconBtn>
              </Tooltip>
              <Tooltip title="공유하기">
                <SquareIconBtn className="share-icon" aria-label="share">
                  <ShareIcon />
                </SquareIconBtn>
              </Tooltip>
              <Tooltip title="스크랩">
                <SquareIconBtn className="bookmark-icon" aria-label="share">
                  <BookmarkBorderIcon />
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
        <Flexbox className="card-time" justifyContent="inherit">
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
    </StyledMainCard>
  )
}

export default MainCard
