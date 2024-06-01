'use client'

import ReactQuill from 'react-quill'
import { StyledTextEditor } from './TextEditor.style'
import { useEffect, useMemo, useRef, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { red } from '@mui/material/colors'
import QuillNoSSRWrapper from './QuillNoSSRWrapper'

type StyledTextEditorProps = {
  value: string
  onChange: (value: string) => void
}

function TextEditor({ value, onChange }: StyledTextEditorProps) {
  const quillRef = useRef<ReactQuill | null>(null)
  const [editorContent, setEditorContent] = useState('')

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [red] }, { background: [] }],
          [{ align: [] }, 'link', 'image', 'code-block'],
        ],
      },
    }
  }, [])

  const handleEditorChange = (content: string) => {
    setEditorContent(content)
  }

  return (
    <StyledTextEditor className="editor-container">
      <QuillNoSSRWrapper
        forwardedRef={quillRef}
        placeholder="내용을 입력해주세요."
        modules={modules}
        value={editorContent}
        onChange={handleEditorChange}
      />
    </StyledTextEditor>
  )
}

export default TextEditor
