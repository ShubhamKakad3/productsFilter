"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
const client = new QueryClient()



function Providers({children}:PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>)
  
}

export default Providers