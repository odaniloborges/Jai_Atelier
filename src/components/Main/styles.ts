import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 1.25rem 3rem;
  background-color: ${cores.cinzaClaro};
  color: ${cores.preto};
  align-items: center;

  @media (max-width: 736px) {
    padding: 1.25rem 2rem;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;

  @media (max-width: 736px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`

export const ListItem = styled.li`
  width: 100%;

  img {
    max-width: 100%;
    width: 100vw;
    border-radius: 30px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 500;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  @media (max-width: 736px) {
    font-size: 4rem;
  }
`

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 400px;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  @media (max-width: 736px) {
    font-size: 1.5rem;
  }
`

export const Image = styled.img`
  border-radius: 30px;
  max-width: 100%;
  width: 100vw;
  transition: none;
  overflow-clip-margin: content-box;
  overflow: clip;
`
