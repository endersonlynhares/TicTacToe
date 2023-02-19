import { ThemeProvider } from 'styled-components'
import {defaultTheme} from "./styles/themes/default"
import { GlobalStyle } from './styles/global'
import { GameContainer } from './components/GameContainer'
import { GameContextProvider } from './contexts/GameContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GameContextProvider>
        <GameContainer />
      </GameContextProvider>
      <GlobalStyle />
    </ThemeProvider>    
  )
}

export default App
