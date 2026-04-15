import * as S from './styles'
import faixas from '../../assets/images/faixas.webp'
import terno from '../../assets/images/terno.webp'
import rainha from '../../assets/images/rainha.webp'
import kimono from '../../assets/images/kimono-grande.webp'
import cleopatra from '../../assets/images/cleopatra.webp'

const Cards = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={faixas} alt="Faixas" loading="lazy" decoding="async" />
        <img src={terno} alt="terno" loading="lazy" decoding="async" />
        <img src={rainha} alt="rainha" loading="lazy" decoding="async" />
        <img src={kimono} alt="kimono" loading="lazy" decoding="async" />
        <img src={cleopatra} alt="cleopatra" loading="lazy" decoding="async" />

        <img src={faixas} aria-hidden="true" loading="lazy" decoding="async" />
        <img src={terno} aria-hidden="true" loading="lazy" decoding="async" />
        <img src={rainha} aria-hidden="true" loading="lazy" decoding="async" />
        <img src={kimono} aria-hidden="true" loading="lazy" decoding="async" />
        <img
          src={cleopatra}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </S.Wrapper>
    </S.Container>
  )
}

export default Cards
