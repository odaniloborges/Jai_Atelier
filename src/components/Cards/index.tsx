import * as S from './styles'
import faixas from '../../assets/images/faixas.jpg'
import terno from '../../assets/images/terno.jpg'
import rainha from '../../assets/images/rainha.png'
import kimono from '../../assets/images/kimono-grande.jpg'
import cleopatra from '../../assets/images/cleopatra.png'

const Cards = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={faixas} alt="Faixas" />
        <img src={terno} alt="terno" />
        <img src={rainha} alt="rainha" />
        <img src={kimono} alt="kimono" />
        <img src={cleopatra} alt="cleopatra" />

        <img src={faixas} aria-hidden="true" />
        <img src={terno} aria-hidden="true" />
        <img src={rainha} aria-hidden="true" />
        <img src={kimono} aria-hidden="true" />
        <img src={cleopatra} aria-hidden="true" />
      </S.Wrapper>
    </S.Container>
  )
}

export default Cards
