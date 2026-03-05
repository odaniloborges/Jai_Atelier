import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  margin: 1.25rem 3rem;
  background-color: ${cores.cinza};
  color: ${cores.preto};
  border-radius: 30px;
  display: flex;
  gap: 20px;
  padding: 40px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 736px) {
    flex-direction: column;
    gap: 1rem;
    margin: 1.25rem 3rem;
    padding: 1rem 1rem !important;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;

  @media (max-width: 736px) {
    row-gap: 1rem;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 20px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.preto};
  background-color: transparent;
  border: solid 1px #000000;
  height: 50px;
  width: 50px;
  border-radius: 18px;

  img {
    height: 2rem;
  }

  @media (max-width: 736px) {
    height: 40px;
    width: 40px;
    border-radius: 14px;
  }
`

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 736px) {
    font-size: 4rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 400px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 736px) {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  margin-top: 1.75rem;
`

export const Field = styled.input`
  color: ${cores.preto};
  background-color: transparent;
  border: solid 1px #000000;
  border-radius: 50px;
  display: inline-block;
  max-width: 100%;
  line-height: calc(3rem - 2px);
  padding: 8px 20px;
  font-size: 2rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease;
  cursor: pointer;

  @media (max-width: 736px) {
    font-size: 1.5rem;
    padding: 0 2rem;
  }
`

export const Message = styled.textarea`
  color: ${cores.preto};
  background-color: transparent;
  border: solid 1px #000000;
  display: inline-block;
  max-width: 100%;
  line-height: calc(3rem - 2px);
  padding: 8px 20px;
  font-size: 2rem;
  font-weight: 400;
  border-radius: 50px;
  text-overflow: ellipsis;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease;
  cursor: pointer;

  @media (max-width: 736px) {
    font-size: 1.5rem;
    padding: 0 2rem;
  }
`

export const Button = styled.button`
  color: ${cores.preto};
  background-color: transparent;
  border: solid 1px #000000;
  border-radius: 50px;
  max-width: 50%;
  line-height: calc(3rem - 2px);
  padding: 8px 16px;
  font-size: 2rem;
  font-weight: 400;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease;
  cursor: pointer;

  @media (max-width: 736px) {
    font-size: 1.5rem;
    max-width: 100%;
    padding: 0;
  }
`
