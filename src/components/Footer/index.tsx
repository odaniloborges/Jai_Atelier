import * as S from './styles'
import logodev from '../../assets/images/logodev.png'

const Footer = () => {
  return (
    <>
      <S.Container>
        <div>
          <S.Text>
            © Design by&nbsp;
            <S.Link href="https://pixasquare.gumroad.com/">
              Dan Woody Studio
            </S.Link>
          </S.Text>
        </div>
        <div>
          <span className="frame">
            <img src={logodev} alt="logo do dev" />
          </span>
        </div>
      </S.Container>
    </>
  )
}

export default Footer
