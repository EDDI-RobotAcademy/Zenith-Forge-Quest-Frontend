'use client'

import Autocomplete from '@/components/common/Autocomplete/Autocomplete'
import Dropdown from '@/components/common/Dropdown/Dropdown'
import Input from '@/components/common/Input/Input'
import TextEditor from '@/components/common/TextEditor/TextEditor'
import { ChangeEvent, useState } from 'react'
import { Outline } from '@/components/common/Typography/Typography'
import InputController from '@/components/common/Input/Controller'
import { BoardFormInputs, boardSchema } from '@/utils/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useBoardStore from '@/store/board/board'
import { StyledBoardLeftForm } from './styled'

function BoardLeftSection() {
  const [selectedValue, setSelectedValue] = useState('기본값')

  const { board, updateTitle } = useBoardStore()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BoardFormInputs>({
    resolver: zodResolver(boardSchema),
    defaultValues: board,
    mode: 'all',
  })

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value

    if (newText.length <= 100) {
      updateTitle(newText)
    }
  }

  return (
    <StyledBoardLeftForm>
      <Dropdown id="test" list={['기술', '커리어']} value="토픽 선택" onChange={handleChange} />

      <InputController
        control={control}
        placeholder="제목을 15자 이상 입력하세요."
        value={board.title}
        onChange={handleInputChange}
        name="title"
        isValueLengthValid
      />

      <TextEditor value={''} onChange={() => {}} />
    </StyledBoardLeftForm>
  )
}

export default BoardLeftSection
