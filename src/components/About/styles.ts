import styled from 'styled-components'
import { cores } from '../../styles'
import { fonts } from '../../styles'

export const Container = styled.section`
  margin: 1.25rem 3rem;
  background-color: ${cores.branca};
  color: ${cores.preto};
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  @media (max-width: 736px) {
    padding: 0 0;
    margin: 1.25rem 2rem;
    grid-template-columns: 1fr;
    row-gap: 0;
  }
`

export const Title = styled.h2`
  //font-family: ${fonts.fontFamily}, sans-serif;
  //padding-top: 0.5rem;
  font-size: 4rem;
  font-weight: 500;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  @media (max-width: 736px) {
    font-size: 2%.5;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const Column = styled.div`
  padding: 1.75rem;

  div {
    height: 100%;
    padding: 1.75rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 736px) {
      padding: 0 0;
    }
  }

  @media (max-width: 736px) {
    padding: 1rem 1rem;
  }
`

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 400px;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  @media (max-width: 736px) {
    margin-top: 0 !important;
    font-size: 1.5rem;
  }
`

export const Image = styled.img`
  max-width: 100%;
  border-radius: 30px;
  object-fit: cover;
`
