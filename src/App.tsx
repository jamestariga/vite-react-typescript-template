import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Dog from './components/Dog'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Dog />
      </div>
    </QueryClientProvider>
  )
}

export default App
