import Link from 'next/link'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import StyledHomeCard from './HomeCard.style'
import Chip from '@mui/material/Chip/Chip'
import { Avatar, CardContent, IconButton, Typography } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ShareIcon from '@mui/icons-material/Share'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { Flexbox } from '@/components/common/Box/Box'

function HomeCard() {
  return (
    <StyledHomeCard>
      <div className="card-top">
        <CardMedia sx={{ height: 200 }} image="/images/team-work-meeting-with-females.jpg" title="green iguana" />
      </div>
      <CardContent className="card-contents">
        <div className="card category">
          <Chip color="info" clickable className="test" label="Javascript" component="a" />
        </div>
        <div className="card title">
          <Link className="anchor-under" href="/">
            팀으로 일하는 디자이너의 커뮤니케이션 팁
          </Link>
        </div>

        <div className="card contents">
          <Link className="anchor-under" href="/">
            업계 아티클을 즐겨 보시는 분이라면 디자이너의 커뮤니케이션에 대한 글을 심심치 않게 보셨을 겁니다. 이는
            그만큼 디자이너에게는 디자인 못지않게 커뮤니케이션 능력도 중요하다는 의미일 것입니다. 같은 배를 탔지만,
            각자의 목표와 이해관계가 다르기 때문에 잘못하면 배가 이리저리 휘청거릴 수 있습니다. 이때 함께 일하는
            사람들과 서로 윈윈하며 공동의 목표를 달성할 수 있는 디자이너의 커뮤니케이션 팁을 몇 가지 알려드리겠습니다.
          </Link>
        </div>

        <Flexbox justifyContent="inherit">
          <Avatar>
            <InsertEmoticonIcon fontSize="small" />
          </Avatar>
          <Typography>냐하하하하하</Typography>
        </Flexbox>
      </CardContent>

      <CardContent className="card-footer">
        <Flexbox justifyContent="space-between">
          <Flexbox className="card-time" justifyContent="inherit">
            <AccessTimeIcon fontSize="small" />
            <div className="minute">7분</div>
            <div className="">|</div>
            <div className="hours">5시간 전</div>
          </Flexbox>

          <Flexbox>
            <IconButton aria-label="chat">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Flexbox>
        </Flexbox>
      </CardContent>
    </StyledHomeCard>
  )
}

export default HomeCard
