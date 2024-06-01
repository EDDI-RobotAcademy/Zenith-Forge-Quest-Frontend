import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { StyledImage } from './Image.style'

interface I_ImageProps extends NextImageProps {
  className: string
  objectFit?: 'cover' | 'contain'
}

function Image({ className, objectFit = 'contain', ...props }: I_ImageProps) {
  return (
    <StyledImage className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <NextImage {...props} fill style={{ objectFit: 'cover' }} />
    </StyledImage>
  )
}
export default Image
