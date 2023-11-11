import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { StyledImage } from './Image.style'

interface I_ImageProps extends NextImageProps {
  className: string
  objectFit?: 'cover' | 'contain'
}

function Image({ className, objectFit = 'contain', ...props }: I_ImageProps) {
  return (
    <StyledImage className={className}>
      <NextImage {...props} layout="fill" objectFit={objectFit} />
    </StyledImage>
  )
}
export default Image
