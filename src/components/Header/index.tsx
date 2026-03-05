import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Title href="">Jai Barcellos</S.Title>
      <S.List>
        <S.ListItem>
          <a href="#trabalhos">Trabalhos</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#sobre">Sobre</a>
        </S.ListItem>
      </S.List>
      <S.Button href="#contato">Contato</S.Button>
    </S.Container>
  )
}

export default Header
