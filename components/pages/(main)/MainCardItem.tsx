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
import { TabletOrDesktop } from '@/components/common/Responsive/ResponsiveViews'
import Image from '@/components/common/Image/Image'
import { M_Main } from '@/types/model/main'
import useCategoryToColor from '@/hooks/useCategoryToColor'
import { StyledMainCardItem } from './styled'

function MainCardItem({ title, category, content, imageSrc, author, minute, hour }: M_Main.I_MainData) {
  const categoryToColor = useCategoryToColor()

  return (
    <StyledMainCardItem>
      <CardHeader
        className="card-header"
        avatar={
          <Flexbox className="card-header-container">
            <Chip href="/" size="medium" label={category} color={categoryToColor(category as any) as any} />
            <Flexbox className="card-icon">
              <SquareIconBtn className="chat-icon" aria-label="chat">
                <Tooltip title="댓글" placement="top">
                  <ChatBubbleOutlineIcon />
                </Tooltip>
              </SquareIconBtn>
              <SquareIconBtn className="share-icon" aria-label="share">
                <Tooltip title="공유하기" placement="top">
                  <ShareIcon />
                </Tooltip>
              </SquareIconBtn>
              <SquareIconBtn className="bookmark-icon" aria-label="share">
                <Tooltip title="스크랩" placement="top">
                  <BookmarkBorderIcon />
                </Tooltip>
              </SquareIconBtn>
            </Flexbox>
          </Flexbox>
        }
      />
      <CardContent className="card-contents">
        <div className="card title">
          <div className="title-container">
            <div className="title-anchor">
              <Link className="anchor-under" href="/">
                {title}
              </Link>
            </div>
            <Flexbox className="card-time" justifyContent="inherit">
              <AccessTimeIcon fontSize="small" />
              <div className="minute">{minute}</div>
              <div className="">|</div>
              <div className="hours">{hour}</div>
            </Flexbox>
            <TabletOrDesktop>
              <div className="card contents">
                <Link className="anchor-under" href="/">
                  {content}
                </Link>
              </div>
            </TabletOrDesktop>
          </div>

          <Image src={imageSrc} alt="test" className="main-card-img" />
        </div>
      </CardContent>

      <CardContent className="card-bottom">
        <Flexbox justifyContent="inherit">
          <Avatar>
            <InsertEmoticonIcon color="action" fontSize="small" />
          </Avatar>
          <Typography>{author}</Typography>
        </Flexbox>
      </CardContent>
    </StyledMainCardItem>
  )
}

export default MainCardItem
