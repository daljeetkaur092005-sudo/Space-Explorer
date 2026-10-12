import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './App/AppRoute.jsx'
import { ContextProvider } from './Features/Travel/State/useContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
<ContextProvider>
    <QueryClientProvider client={queryClient}>
       <AppRoute/>
    </QueryClientProvider>
</ContextProvider>
   
)
