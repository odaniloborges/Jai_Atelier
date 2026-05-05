'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { gsap } from 'gsap'
import * as S from './styles'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<HTMLDivElement[]>([])
  const isTransitioning = useRef(false)
  const [blocks, setBlocks] = useState(Array(20).fill(0))

  const expandAndReveal = useCallback(() => {
    gsap.set(blocksRef.current, { scaleX: 1 })

    // Expand blocks from left to right
    gsap.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      onComplete: () => {
        // After expanding, reveal the page by shrinking back
        gsap.to(blocksRef.current, {
          scaleX: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.out',
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
      blocksRef.current = Array.from(
        overlayRef.current.children
      ) as HTMLDivElement[]
    }

    setBlocks(Array(20).fill(0))
    createBlocks()

    expandAndReveal()

    return () => {
      gsap.killTweensOf(blocksRef.current)
    }
  }, [expandAndReveal])

  return (
    <S.Container>
      <div ref={overlayRef} className="transition-overlay">
        {blocks.map((_, index) => (
          <div key={index} className="block" />
        ))}
      </div>
      {children}
    </S.Container>
  )
}

export default PageTransition
