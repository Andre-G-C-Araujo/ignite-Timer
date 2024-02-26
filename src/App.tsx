import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Button } from './Button'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="sucess" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}