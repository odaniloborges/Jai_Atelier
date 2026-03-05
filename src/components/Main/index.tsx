import * as S from './styles'
import apresentacao from '../../assets/images/apresentacao.jpg'
import emilia from '../../assets/images/emilia.jpg'
import tecido from '../../assets/images/tecido.jpg'

const Main = () => {
  return (
    <>
      <S.Container id="trabalhos">
        <S.Title>Trabalhos</S.Title>
        <S.Text>
          Cada projeto é uma jornada única de criação, onde transformamos visões
          em realidade através de técnicas artesanais e design inovador.
        </S.Text>
        <span className="frame">
          <S.Image src={apresentacao} alt="apresentação" />
        </span>
        <S.Text>#Grupo de apresentações do Resort Costão do Santinho.</S.Text>
        <S.List>
          <S.ListItem>
            <span className="frame">
              <img src={emilia} alt="emilia" />
            </span>
            <S.Text>
              #Emilia do espetáculo sitío do pica-pau amarelo da RPR Produções.
            </S.Text>
          </S.ListItem>
          <S.ListItem>
            <span className="frame">
              <img src={tecido} alt="tecido" />
            </span>
            <S.Text>
              #Atriz circence em tecido no Resort Costão do Santinho
            </S.Text>
          </S.ListItem>
        </S.List>
      </S.Container>
    </>
  )
}

export default Main
