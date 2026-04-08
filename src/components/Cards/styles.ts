import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  overflow: hidden;
  width: 100%;
  background-color: ${cores.branca};
  padding: 20px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 16rem;
  gap: 2rem;
  max-width: 100%;
  animation: animate 15s linear infinite;

  img {
    width: 17rem;
    height: 20rem;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  @keyframes animate {
    to {
      transform: translateX(calc(-5 * (16rem - 1rem)));
    }
  }
`
