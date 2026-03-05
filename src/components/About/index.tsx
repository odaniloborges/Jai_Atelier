import * as S from './styles'
import founder from '../../assets/images/jaine.jpg'

const About = () => {
  return (
    <>
      <S.Container id="sobre">
        <S.Column>
          <div>
            <S.Title>Jai Barcellos</S.Title>
            <S.Text>
              Artista e figurinista com mais de 11 anos de vivência nos palcos.
              Minha criação une técnica e sensibilidade, vestindo espetáculos
              que transitam do urbano ao popular com a mesma fluidez.
              Especialista em peças personalizadas, entendo o figurino como uma
              extensão da coreografia e da dramaturgia. No meu atelier, cada
              traje é projetado para potencializar a performance e narrar
              histórias únicas através da cena.
            </S.Text>
          </div>
        </S.Column>
        <S.Column>
          <span>
            <S.Image src={founder} alt="Jaine" />
          </span>
        </S.Column>
      </S.Container>
    </>
  )
}

export default About
