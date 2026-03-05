import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Main />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
