import * as S from './styles'
import logodev from '../../assets/images/logodev60.webp'

const Footer = () => {
  return (
    <>
      <S.Container>
        <div>
          <S.Text>
            © Design by&nbsp;
            <S.Link href="https://pixasquare.gumroad.com/">
              DanWoody Studio
            </S.Link>
          </S.Text>
        </div>
        <div>
          <span className="frame">
            <img
              src={logodev}
              alt="logo do dev"
              loading="lazy"
              decoding="async"
            />
          </span>
        </div>
      </S.Container>
      <S.Direitos>Atelier Jai Barcellos © 2026</S.Direitos>
    </>
  )
}

export default Footer
