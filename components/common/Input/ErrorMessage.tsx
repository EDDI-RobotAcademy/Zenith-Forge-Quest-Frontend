'use client'
import { slideInDown } from '@/styles/theme/motion'
import { StyledErrorMessage } from './styled'
import { AnimatePresence } from 'framer-motion'
interface ErrorMessageProps {
  error?: string
}

function ErrorMessage({ error }: ErrorMessageProps) {
  const hasError = !!error

  return (
    <AnimatePresence>
      {hasError && (
        <StyledErrorMessage
          role="alert"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          variants={slideInDown}
        >
          {error}
        </StyledErrorMessage>
      )}
    </AnimatePresence>
  )
}

export default ErrorMessage
