'use client'
import { ChangeEvent, memo } from 'react'
import { StyledTextBox } from './styled'
import { Avatar } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import SendIcon from '@mui/icons-material/Send'
import { Outline } from '../Typography/Typography'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import clsx from 'clsx'
import useFocus from '@/hooks/useFocus'

interface T_TextBoxProps {
  className?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

function TextBox({ className, value, placeholder, disabled, maxLength, onChange }: T_TextBoxProps) {
  const { isFocused, handleFocus, handleBlur } = useFocus()

  return (
    <StyledTextBox className={clsx(className, { focus: isFocused })} tabIndex={0}>
      <div className="text-box-top">
        <Avatar className="avatar" sizes="sm">
          <InsertEmoticonIcon fontSize="small" />
        </Avatar>
        <p className="author">박성빈</p>
      </div>

      <textarea
        className="text-box"
        rows={10}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="text-length-container">
        <Outline className="value-length">{value?.length} / 300</Outline>
      </div>
      <div className="text-box-footer">
        <button className="photo-btn">
          <InsertPhotoIcon fontSize="small" color="actions" />
        </button>
        <button className="send-btn" type="button">
          <SendIcon fontSize="small" color="actions" />
        </button>
      </div>
    </StyledTextBox>
  )
}

export default memo(TextBox)
