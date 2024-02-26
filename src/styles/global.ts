import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;


}
:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.green_500};
}


body {
    background-color: ${({ theme }) => theme.gray_900};
    color: ${({ theme }) => theme.gray_300};;
}


body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`
