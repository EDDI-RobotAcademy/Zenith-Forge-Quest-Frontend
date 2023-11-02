import { headers } from '@/styles/typography'

export function header(size: 1 | 2 | 3 | 4 | 5 | 6) {
  return {
    ...headers[size],
  }
}
