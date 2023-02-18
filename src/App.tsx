import { ThemeProvider } from 'styled-components'
import {defaultTheme} from "./styles/themes/default"
import { GlobalStyle } from './styles/global'
import { GameContainer } from './components/GameContainer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GameContainer />
      <GlobalStyle />
    </ThemeProvider>    
  )
}

export default App
