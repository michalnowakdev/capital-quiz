import { QueryClient, QueryClientProvider } from 'react-query';
import { Game } from './components/Game/Game';
import GlobalStyles from './GlobalStyles';
import { Header } from './components/Header';
import { Main } from './components/Main';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Main>
          <Game />
        </Main>
      </QueryClientProvider>
    </div>
  );
}

export default App;
