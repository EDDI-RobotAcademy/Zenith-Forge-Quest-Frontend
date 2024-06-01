import { neutralColor } from '@/styles/theme/colors'
import { flexbox } from '@/styles/utils/flexbox'
import { styled } from '@mui/material'

export const StyledDropzone = styled('div')`
  ${flexbox()}
  height: 200px;
  background-color: ${neutralColor.white2}; // #F7F5F9
  border: 1px dashed ${neutralColor.white3}; // #ECE9F1
  border-radius: 8px;
  cursor: pointer;
  padding: 9.5px 12px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #6979f8;
  }

  input {
    display: none;
  }

  .dropzone-text {
    color: ${neutralColor.dark2}; // #1A051D
    font-weight: 700;
  }
`
