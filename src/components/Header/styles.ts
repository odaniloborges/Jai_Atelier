import styled from 'styled-components'
import { cores } from '../../styles'
import { fonts } from '../../styles'

export const Container = styled.div`
  width: 100%;
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 2rem;

  @media (max-width: 1281px) {
    font-size: 1.5rem;
  }

  @media (max-width: 736px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1rem;
  }
`

export const Title = styled.a`
  font-family: ${fonts.fontFamily}, sans-serif;
  padding-top: 0.5rem;
  font-size: 2.5rem;
  color: ${cores.preto};
  justify-content: flex-start;
  align-self: flex-start;
  text-decoration: none;
  line-height: 1.5;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-left: 4rem;

  @media (max-width: 736px) {
    margin-left: 0 !important;
  }
`

export const ListItem = styled.li`
  line-height: 1.5;
  letter-spacing: -1px;
  text-align: center;

  a {
    color: ${cores.preto};
    text-decoration: none;
    transition: color 0.25s ease;

    :hover {
      text-decoration: underline;
    }
  }
`

export const Button = styled.a`
  color: #000000;
  border: solid 1px #000000;
  text-decoration: none;
  display: inline-block;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
  text-align: center;
  width: 12rem;
  height: 3rem;
  line-height: calc(3rem - 2px);
  padding: 1px;
  vertical-align: middle;
  font-family: 'Alexandria', sans-serif;
  font-weight: 400;
  border-radius: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease;
  cursor: pointer;

  @media (max-width: 736px) {
    width: 100%;
    margin-left: 0 !important;
  }
`
