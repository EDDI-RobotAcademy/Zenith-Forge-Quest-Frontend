'use client'

import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

// * React Query 인스턴스
const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        suspense: true,
        keepPreviousData: true,
        refetchOnReconnect: true,
        useErrorBoundary(error: any) {
          return error.reason !== 'INVALID_ARGUMENT'
        },
      },
    },
  })

interface ReactQueryJotaiProviderProps {
  children: React.ReactNode
}

export default function ReactQueryProvider({ children }: ReactQueryJotaiProviderProps) {
  const queryClient = useRef(createQueryClient())

  return <QueryClientProvider client={queryClient.current}>{children}</QueryClientProvider>
}
