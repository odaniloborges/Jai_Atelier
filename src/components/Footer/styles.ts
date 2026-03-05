import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  margin: 1.25rem 3rem;
  background-color: ${cores.cinza};
  color: ${cores.preto};
  align-items: center;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  padding: 0 40px;

  @media (max-width: 736px) {
    padding: 0 2rem;
    margin: 1.25rem 2rem;
  }

  img {
    height: 3rem;
  }
`

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 400px;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  @media (max-width: 736px) {
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
`

export const Link = styled.a`
  color: ${cores.preto};
  font-size: 2rem;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.25s ease;

  :hover {
    text-decoration: none;
  }

  @media (max-width: 736px) {
    font-size: 1.5rem;
  }
`
