'use client'

import React, { useState } from 'react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { StyledDropzone } from './Dropzone.style'
import ImageIcon from '@mui/icons-material/Image'
import { Body2 } from '../Typography/Typography'

function Dropzone() {
  const [files, setFiles] = useState([])

  const onDrop = useCallback((acceptedFile: any) => {
    setFiles(
      acceptedFile?.map((file: Blob | MediaSource) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const images = files.map((file: any) => (
    <div key={file?.name}>
      <img src={file.preview} style={{ width: '100%' }} alt="Preview" />
    </div>
  ))

  const showUploadMessage = !isDragActive && images.length === 0

  return (
    <StyledDropzone {...getRootProps()}>
      <input {...getInputProps()} />
      {showUploadMessage ? (
        <>
          <ImageIcon className="dropzone-icon" />
          <Body2 className="dropzone-text">이미지 파일을 업로드 하세요.</Body2>
        </>
      ) : null}
      <div>{images}</div>
    </StyledDropzone>
  )
}

export default Dropzone
