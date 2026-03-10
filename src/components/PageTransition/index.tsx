'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import * as S from './styles'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<HTMLDivElement[]>([])
  const isTransitioning = useRef(false)

  const expandAndReveal = useCallback(() => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: 'left' })

    // Expand blocks from left to right
    gsap.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      transformOrigin: 'left',
      onComplete: () => {
        // After expanding, reveal the page by shrinking back
        gsap.to(blocksRef.current, {
          scaleX: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.out',
          transformOrigin: 'right',
          onComplete: () => {
            isTransitioning.current = false
            if (overlayRef.current) {
              overlayRef.current.style.pointerEvents = 'none'
            }
          }
        })
      }
    })
  }, [])

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return
      overlayRef.current.innerHTML = ''
      blocksRef.current = []

      for (let i = 0; i < 20; i++) {
        const block = document.createElement('div')
        block.className = 'block'
        overlayRef.current.appendChild(block)
        blocksRef.current.push(block)
      }
    }

    createBlocks()

    expandAndReveal()

    return () => {
      // Cleanup if needed
    }
  }, [expandAndReveal])

  return (
    <S.Container>
      <div ref={overlayRef} className="transition-overlay" />
      {children}
    </S.Container>
  )
}

export default PageTransition
