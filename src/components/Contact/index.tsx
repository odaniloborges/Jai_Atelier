import * as S from './styles'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'

const Contact = () => {
  return (
    <>
      <S.Container id="contato">
        <div>
          <S.Title>Contato</S.Title>
          <div>
            <S.Links>
              <li>
                <S.Link href="#">
                  <img src={instagram} alt="instagram" />
                </S.Link>
              </li>
              <li>
                <S.Link href="#">
                  <img src={facebook} alt="instagram" />
                </S.Link>
              </li>
            </S.Links>
            <S.Text>
              Eleve o impacto do seu espetáculo com figurinos que não apenas
              vestem, mas dançam com você.
            </S.Text>
          </div>
        </div>
        <div>
          <S.Text>
            Se você tiver alguma dúvida ou precise de um orçamento, entre em
            contato comigo. Estou aqui para ajudar!
          </S.Text>
          <S.Form action="">
            <S.Field
              type="text"
              name="nome"
              placeholder="nome"
              aria-label="nome"
            />
            <S.Field
              type="email"
              name="email"
              placeholder="email"
              aria-label="email"
            />
            <S.Message
              name="message"
              placeholder="Message"
              aria-label="message"
            ></S.Message>
            <S.Button>Enviar</S.Button>
          </S.Form>
        </div>
      </S.Container>
    </>
  )
}

export default Contact
