import styled from 'styled-components'

export const Container = styled.section`
  /* Container que segura os blocos */
  .transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row; /* Blocos lado a lado horizontalmente */
    z-index: 9999;
    pointer-events: none; /* Deixa clicar no site quando não está animando */
  }

  /* Cada um dos 20 blocos */
  .block {
    flex: 1;
    height: 100%;
    background-color: #ededed; /* Cor da transição - vermelho para teste */
    transform: scaleX(1); /* Começa invisível */
    transform-origin: left; /* Origem da transformação */
  }
`
