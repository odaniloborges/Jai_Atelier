import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

/* eslint-disable react/no-children-prop */
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import PageTransition from './components/PageTransition'

import { GlobalCss } from './styles'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  const smoother = useRef<ScrollSmoother | null>(null)

  useLayoutEffect(() => {
    // Inicialização
    smoother.current = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      effects: true,
      normalizeScroll: true
    })
  }, [])

  return (
    <>
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          <GlobalCss />
          <PageTransition>
            <Header />
            <Main />
            <About />
            <Contact />
            <Footer />
          </PageTransition>
        </div>
      </div>
    </>
  )
}

export default App
