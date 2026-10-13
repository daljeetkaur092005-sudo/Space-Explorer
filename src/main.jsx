import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './App/AppRoute.jsx'
import { ContextProvider } from './Features/Travel/State/useContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './App/Store.jsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(

<Provider store={store}>
  <ContextProvider>
    <QueryClientProvider client={queryClient}>
       <AppRoute/>
    </QueryClientProvider>
</ContextProvider>
    </Provider>
   
)
