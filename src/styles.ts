import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#ffffff',
  cinza: '#DEDEDE',
  vermelho: '#E66767',
  cinzaClaro: '#EDEDED',
  preto: '#000000'
}

export const GlobalCss = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Alexandria', sans-serif;;
    list-style: none;
  }

  body {
    background-color: ${cores.cinzaClaro};
    color: ${cores.vermelho};
  }

  @media (max-width: 736px) {
    html {
      font-size: 8px;
    }
  }

  @media (max-width: 736px) {
    html {
      font-size: 9px;
    }
  }

  @media (max-width: 1281px) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: 1601px) {
    html {
      font-size: 12px;
    }
  }
`
